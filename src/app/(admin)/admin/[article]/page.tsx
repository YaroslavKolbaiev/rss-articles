import SubmitButton from '@/components/buttons/SubmitButton';
import FormInput from '@/components/Form/FormInput';
import DeleteArticleModal from '@/components/modal';
import { updateArticle } from '@/lib/actions';
import { fetchArticle } from '@/lib/data';

type Props = {
  params: {
    article: string;
  };
};

export default async function EditArticle({ params: { article } }: Props) {
  const {
    title, content, link, id,
  } = await fetchArticle(article);

  return (
    <>
      <form action={updateArticle} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
        <input type="hidden" name="id" value={id} />
        <FormInput defaultValue={title} label="Title" name="title" type="text" />
        <FormInput defaultValue={link} label="Link" name="link" type="text" />
        <FormInput defaultValue={content} label="Content" name="content" type="textarea" />
        <SubmitButton />
      </form>
      <DeleteArticleModal />
    </>
  );
}
