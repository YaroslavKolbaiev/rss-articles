import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  revalidateTag('update-articles');

  return NextResponse.json({ message: 'OK' }, { status: 200 });
}
