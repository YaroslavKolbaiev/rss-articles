import classes from './Form.module.css';

type Props = {
  name: string;
  placeholder: string;
  text: string
};

export default function AuthFormInput({
  name, placeholder, text,
}: Props) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {text}
        <input
          type={name}
          name={name}
          id={name}
          className={classes.formInput}
          placeholder={placeholder}
          required
        />
      </label>
    </div>
  );
}
