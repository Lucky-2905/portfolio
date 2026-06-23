export default function Footer() {
  return (
    <footer className="py-8 border-t border-primary/20 bg-background relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground tracking-wide">
          Designed & Developed by Lavanya Reddy
        </p>
        <p className="text-sm text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
