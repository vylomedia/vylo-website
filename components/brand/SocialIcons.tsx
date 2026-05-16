export function SocialIcons() {
  const items: { label: string; href: string; svg: React.ReactNode }[] = [
    {
      label: "LinkedIn",
      href: "#",
      svg: (
        <path d="M4.98 3.5a2.5 2.5 0 11.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.76-1.96 4.02 0 4.76 2.65 4.76 6.09V21H18.4v-5.36c0-1.28-.02-2.93-1.78-2.93-1.78 0-2.05 1.39-2.05 2.83V21H10V9z" />
      ),
    },
    {
      label: "YouTube",
      href: "#",
      svg: (
        <path d="M21.6 7.2a2.5 2.5 0 00-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 002.4 7.2 26.2 26.2 0 002 12a26.2 26.2 0 00.4 4.8 2.5 2.5 0 001.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 001.76-1.77A26.2 26.2 0 0022 12a26.2 26.2 0 00-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
      ),
    },
    {
      label: "Instagram",
      href: "#",
      svg: (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.4" cy="6.6" r="1" />
        </>
      ),
    },
    {
      label: "X",
      href: "#",
      svg: (
        <path d="M18 3h3l-7.5 8.6L22 21h-6.5l-5-6.4L4.8 21H1.8l8-9.2L1.5 3H8.2l4.5 5.9L18 3zm-1.1 16h1.8L7.2 5H5.3l11.6 14z" />
      ),
    },
  ];
  return (
    <div className="flex items-center gap-2 mt-6">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          aria-label={it.label}
          className="h-9 w-9 grid place-items-center rounded-full border border-border text-text-muted hover:text-accent hover:border-accent transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
          >
            {it.svg}
          </svg>
        </a>
      ))}
    </div>
  );
}
