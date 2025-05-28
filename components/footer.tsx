export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">© {currentYear} Mohammed Kaif</p>
        <p className="text-sm text-muted-foreground mt-2 flex justify-center items-center gap-1">
          Built with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-black dark:text-white"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 
              3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 
              3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
