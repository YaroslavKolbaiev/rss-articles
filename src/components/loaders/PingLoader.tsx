export default function PingLoader() {
  return (
    <span className="relative flex h-5 w-5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
      <span className="relative inline-flex rounded-full h-5 w-5 bg-primary-300" />
    </span>
  );
}
