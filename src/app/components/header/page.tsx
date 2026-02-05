import Link from "next/link";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0  z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          Next<span className="text-gray-800">Practice</span>
        </h1>

        <nav className="flex items-center gap-6 text-gray-600 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
          <Link href="/register" className="hover:text-blue-600 transition">
            Register
          </Link>
          <Link href="/product" className="hover:text-blue-600 transition">
            Products
          </Link>
         
        </nav>
      </div>
    </header>
  );
}

export default Header;
