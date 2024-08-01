import getRssFeed from '@/services/rssFeed';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  try {
    if (request.headers.get('secret') === process.env.SECRET) {
      await getRssFeed();
      revalidateTag('update-articles');
    }
    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
