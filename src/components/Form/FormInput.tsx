type Props = {
  label: string;
  name: string;
  type: string;
  defaultValue: string;
};

export default function FormInput({
  defaultValue, label, name, type,
}: Props) {
  return (
    <div className="mb-4">
      <label htmlFor="title" className="mb-2 block font-bold text-gray-700">
        {label}
        {type === 'textarea' ? (
          <textarea
            defaultValue={defaultValue}
            id={name}
            name={name}
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          />
        ) : (
          <input
            defaultValue={defaultValue}
            type={type}
            id={name}
            name={name}
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        )}
      </label>
    </div>
  );
}
