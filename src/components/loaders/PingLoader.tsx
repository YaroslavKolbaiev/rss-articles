export default function PingLoader() {
  return (
    <span className="relative flex h-4 w-4">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-100 opacity-75" />
      <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-300" />
    </span>
  );
}
