export default function ProgressIcon({
  icon,
}: {
  icon: { path: string; alt: string; style: string };
}) {
  const { style, path, alt } = icon;

  return (
    <div className={`${style} rounded-lg p-2`}>
      <img src={path} alt={alt} />
    </div>
  );
}
