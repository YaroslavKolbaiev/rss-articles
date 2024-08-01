import Link from 'next/link';
import classes from './Buttons.module.css';

type Props = {
  link: string;
  text: string;
};

export default function AdminMenuButton({ link, text }: Props) {
  return (
    <Link className={classes.adminButton} href={link}>
      {text}
    </Link>
  );
}
