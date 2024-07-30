import { approveArticle } from '@/lib/actions';

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return Response.json({ error: 'Missing id' }, { status: 400 });
  }

  await approveArticle(id);

  return Response.json({ id }, { status: 200 });
}
