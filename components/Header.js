import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter(); // To highlight the active page

  return (
    <header className="flex flex-col justify-center items-center min-h-screen"> {/* Full-screen height, centered content */}
      {/* Centered Navigation Links */}
      <nav className="flex space-x-16 text-3xl"> {/* Increased font size */}
        <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link href="/AboutMe" className={`nav-link ${router.pathname === '/AboutMe' ? 'active' : ''}`}>
          About
        </Link>
        <Link href="/Skills" className={`nav-link ${router.pathname === '/Skills' ? 'active' : ''}`}>
          Skills
        </Link>
        <Link href="/Projects" className={`nav-link ${router.pathname === '/Projects' ? 'active' : ''}`}>
          Projects
        </Link>
        <Link href="/Contact" className={`nav-link ${router.pathname === '/Contact' ? 'active' : ''}`}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
