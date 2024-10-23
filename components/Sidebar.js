import Link from 'next/link';

const Sidebar = () => (
  <aside className="bg-gray-800 h-screen w-60 p-4 flex flex-col space-y-4">
    <nav>
      <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
      <Link href="/about" className="block text-gray-300 hover:text-white">About</Link>
      <Link href="/skills" className="block text-gray-300 hover:text-white">Skills</Link>
      <Link href="/projects" className="block text-gray-300 hover:text-white">Projects</Link>
      <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
    </nav>
  </aside>
);

export default Sidebar;
