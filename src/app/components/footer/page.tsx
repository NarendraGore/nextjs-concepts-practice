

// function Footer(){
//   return( 
//   <footer className="bg-white shadow p-4 text-center text-sm">
//       © 2026 Boilerplate
//     </footer>
//     )
// }
// export default Footer;

import Link from "next/link";


function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left */}
        <p className="text-sm text-gray-500">
          © 2026 <span className="font-semibold text-gray-700">NextBoiler</span>. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <Link href="#" className="hover:text-blue-600 transition">
            Privacy
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Terms
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
