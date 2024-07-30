'use server';

import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import crypto from '@/services/crypto';
import { SessionData, defaultSession, sessionOptions } from './session';
import { fetchUser } from './data';

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export async function login(formData: FormData) {
  const session = await getSession();

  const email = formData.get('email') as string;

  const user = await fetchUser(email);

  if (!user) {
    throw new Error('User not found');
  }

  const password = formData.get('password') as string;

  const decryptedPassword = await crypto.decrypt(user.password);

  const isValidPassword = password === decryptedPassword;

  if (!isValidPassword) {
    throw new Error('Invalid password');
  }

  session.isLoggedIn = true;
  session.userId = user.id;
  session.username = user.username;
  session.role = user.role;

  await session.save();

  if (session.role === 'ADMIN') {
    return redirect('/admin');
  }

  return redirect('/');
}

export async function logout() {
  const session = await getSession();

  session.destroy();

  return redirect('/');
}
