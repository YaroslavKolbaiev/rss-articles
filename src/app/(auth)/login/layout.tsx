type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <section>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
