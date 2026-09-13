import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex flex-1 items-center py-32 md:py-40">
      <div className="container-content">
        <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          404
        </p>
        <h1 className="mt-4 text-statement">Page not found.</h1>
        <p className="mt-6 max-w-md text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-11 items-center justify-center bg-foreground px-6 text-sm text-background transition-opacity hover:opacity-85"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
