import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://github.com/anaselass", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; {new Date().getFullYear()} Zentry. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              href={link.href}
              target="_blank"
              key={index}
              rel="noopener noreferrer"
              className="text-2xl hover:text-violet-600 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
