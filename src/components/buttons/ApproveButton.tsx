'use client';

import { useFormStatus } from 'react-dom';
import classes from './Buttons.module.css';

export default function ApproveButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className={classes.approveButton}
      type="submit"
      disabled={pending}
    >
      approve
    </button>
  );
}
