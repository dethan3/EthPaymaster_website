
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <img src="/logo-aastar.png" alt="AAStar Logo" className="h-8 w-8 object-cover mr-2" />
        <span className="text-xl font-bold">ETHPaymaster</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:underline">Docs</a>
        <a href="#" className="hover:underline">Pricing</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Media</a>
      </div>
    </nav>
  );
};

export default Navbar;



















// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <div className="flex items-center space-x-4">
//         <img src="/logo.png" alt="Logo" className="h-8 w-8" />
//         <span className="text-xl font-bold">ETHPaymaster</span>
//       </div>
//       <div className="flex space-x-4">
//         <Link href="/docs" className="hover:text-gray-400">Docs</Link>
//         <Link href="/pricing" className="hover:text-gray-400">Pricing</Link>
//         <Link href="/about" className="hover:text-gray-400">About</Link>
//         <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
//         <a href="https://github.com" className="hover:text-gray-400">GitHub</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
