import Image from 'next/image';
import { approveArticle } from '@/lib/actions';
import ApproveButton from '../buttons/ApproveButton';

type Props = {
  approved: boolean;
  id: string;
};

export default function ApproveArticle({ approved, id }: Props) {
  return (
    <div>
      {approved ? (
        <span className="inline-flex items-center justify-center gap-1">
          <span className="text-sm text-[#028A0F]">approved</span>
          <Image src="TickIcon.svg" alt="Approved" width={14} height={14} />
        </span>
      ) : (
        <form action={approveArticle} className="inline-flex">
          <input type="hidden" name="id" value={id} />
          <ApproveButton />
        </form>
      )}
    </div>
  );
}
