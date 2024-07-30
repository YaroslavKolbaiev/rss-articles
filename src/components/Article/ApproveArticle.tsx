'use client';

import Image from 'next/image';
import classes from '@/components/buttons/Buttons.module.css';
import { useState } from 'react';

type Props = {
  approved: boolean;
  id: string;
};

export default function ApproveArticle({ approved, id }: Props) {
  const [isApproved, setIsApproved] = useState(approved);
  const [isApproving, setIsApproving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsApproving(true);

    await fetch(`/api/approve-article?id=${id}`);

    setIsApproved(true);
    setIsApproving(false);
  };

  return (
    <div>
      {isApproved
        ? (
          <span className="inline-flex items-center justify-center gap-1">
            <span className="text-sm text-[#028A0F]">approved</span>
            <Image
              src="TickIcon.svg"
              alt="Approved"
              width={14}
              height={14}
            />
          </span>
        ) : (
          <form onSubmit={handleSubmit} className="inline-flex">
            <input type="hidden" name="id" value={id} />
            <button
              className={`${classes.approveButton} ${isApproving && 'animate-bounce'}`}
              type="submit"
              disabled={isApproving}
            >
              approve
            </button>
          </form>
        )}
    </div>
  );
}
