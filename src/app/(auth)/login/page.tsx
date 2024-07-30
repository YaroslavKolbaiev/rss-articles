import SubmitButton from '@/components/buttons/SubmitButton';
import AuthFormInput from '@/components/Form/AuthFormInput';
import { login } from '@/lib/auth';

export default function LoginPage() {
  return (
    <form className="space-y-4 md:space-y-6" action={login}>
      <AuthFormInput name="email" placeholder="type admin@admin.com" text="Your Email" />
      <AuthFormInput name="password" placeholder="type admin" text="Password" />
      <SubmitButton />
    </form>
  );
}
