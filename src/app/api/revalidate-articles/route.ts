import getRssFeed from '@/services/rssFeed';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  try {
    await getRssFeed();
    revalidateTag('update-articles');
    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
