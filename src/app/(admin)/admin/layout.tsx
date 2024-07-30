import AdminMenuButton from '@/components/buttons/AdminMenuButton';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <section className="bg-primary-50 flex flex-col lg:flex-row grow">
      <div className="bg-white border-r lg:w-72 p-4 flex flex-col gap-2">
        <AdminMenuButton link="/admin" text="Dashboard" />
        <AdminMenuButton link="/admin/new" text="Create new Articel" />
      </div>
      <div className="flex p-2 grow">
        <div className="bg-white p-4 border rounded-md w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
