type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">{children}</div>
    </section>
  );
}
