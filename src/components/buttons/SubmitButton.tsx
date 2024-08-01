'use client';

import { useFormStatus } from 'react-dom';
import classes from './Buttons.module.css';
import PingLoader from '../loaders/PingLoader';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={classes.signInBtn} aria-disabled={pending}>
      {pending ? <PingLoader /> : <span>Submit</span>}
    </button>
  );
}
