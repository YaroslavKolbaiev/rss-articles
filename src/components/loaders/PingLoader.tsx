export default function PingLoader() {
  return (
    <span className="relative flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-100 opacity-75" />
      <span className="relative inline-flex h-4 w-4 rounded-full bg-primary-300" />
    </span>
  );
}
