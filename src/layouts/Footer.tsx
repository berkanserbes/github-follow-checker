import { FaMedium, FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t py-6 bg-background text-foreground">
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Social Media */}
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/berkanserbes"
              target="_blank"
              className="hover:text-foreground social-link"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://linkedin.com/in/berkanserbes"
              target="_blank"
              className="hover:text-foreground social-link"
            >
              <FaLinkedinIn size={40} />
            </a>
            <a
              href="https://medium.com/@berkanserbes"
              target="_blank"
              className="hover:text-foreground social-link"
            >
              <FaMedium size={40} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} Berkan Serbes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
