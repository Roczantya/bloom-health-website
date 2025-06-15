
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="w-full py-8 bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3">
    <div className="text-center text-lg font-medium text-gray-500">
      © 2025 Bloom. Made with <span role="img" aria-label="love" className="px-1 align-middle">💜</span> by Tiffany Tjandinegara.
    </div>
    <div className="flex justify-center mt-2 space-x-6">
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="rounded-full p-2 transition-colors duration-200 text-gray-400 hover:text-primary hover:bg-gradient-to-tr hover:from-gradient2 hover:to-gradient1"
      >
        <Instagram size={28} />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="rounded-full p-2 transition-colors duration-200 text-gray-400 hover:text-primary hover:bg-gradient-to-tr hover:from-gradient2 hover:to-gradient1"
      >
        <Linkedin size={28} />
      </a>
    </div>
  </footer>
);
export default Footer;

