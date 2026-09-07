export default function Header() {
  return (
    <header className="flex items-start gap-2">
      <img src="/Logo.svg" alt="My Task Board" className="mt-3" />

      <article>
        <h1 className="text-[clamp(2.2rem,2rem+.03vw,2.5rem)]">
          My Task Board
        </h1>
        <p>Tasks to keep organised</p>
      </article>

      <img src="/Edit_duotone.svg" alt="Edit duotone icon" className="mt-3" />
    </header>
  );
}
