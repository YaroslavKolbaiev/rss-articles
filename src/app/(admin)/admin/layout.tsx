import AdminMenuButton from '@/components/buttons/AdminMenuButton';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <section className="flex grow flex-col bg-primary-50 lg:flex-row">
      <div className="flex flex-col gap-2 border-r bg-white p-4 lg:w-72">
        <AdminMenuButton link="/admin" text="Dashboard" />
        <AdminMenuButton link="/admin/new" text="Create new Articel" />
      </div>
      <div className="flex grow p-2">
        <div className="w-full rounded-md border bg-white p-4">{children}</div>
      </div>
    </section>
  );
}
