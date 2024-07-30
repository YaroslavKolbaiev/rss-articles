import Link from 'next/link';
import classes from './Buttons.module.css';

export default function AdminLinkButton() {
  return (
    <Link href="/admin" className={classes.adminDashboardBtn}>
      <span className="inline text-sm lg:hidden">Admin</span>
      <span className="hidden lg:inline">Go To Admin dashboard</span>
    </Link>
  );
}
