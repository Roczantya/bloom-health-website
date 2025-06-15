
const Footer = () => (
  <footer className="w-full py-8 bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 text-center text-primary text-md font-medium">
    <div>
      MindBloom &copy; {new Date().getFullYear()} · Youth Mental Health Project
      <div className="mt-2 flex justify-center gap-4">
        <a href="mailto:info@mindbloom.org" className="underline hover:text-green-700">Contact</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-700">Instagram</a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-700">TikTok</a>
      </div>
    </div>
  </footer>
);
export default Footer;
