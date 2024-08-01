'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { deleteArticle } from '@/lib/actions';
import classes from '@/components/buttons/Buttons.module.css';
import DeleteArticle from '../buttons/DeleteArticle';

export default function DeleteArticleModal() {
  const [deleteModal, setDeleteModal] = useState(false);
  const { article } = useParams();

  return (
    <div className="flex justify-center pt-7">
      <button onClick={() => setDeleteModal(true)} type="button" className={classes.deleteArticle}>
        Delete Article
      </button>
      {deleteModal && (
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-slate-500 bg-opacity-70">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      Delete Article
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete article? All ssociated data will be
                        permanently removed. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-3 bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <form action={deleteArticle}>
                  <input type="hidden" name="id" value={article} />
                  <DeleteArticle />
                </form>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setDeleteModal(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
