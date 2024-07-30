import SubmitButton from '@/components/buttons/SubmitButton';
import FormInput from '@/components/Form/FormInput';
import { login } from '@/lib/auth';

export default function LoginPage() {
  return (
    <form className="space-y-4 md:space-y-6" action={login}>
      <FormInput name="email" placeholder="type admin@admin.com" text="Your Email" />
      <FormInput name="password" placeholder="type admin" text="Password" />
      <SubmitButton />
    </form>
  );
}
