import React from 'react';
import Hero from './Hero';
import Blogs from '../blogs/Blogs';

const Home = () => {
  return (
    <>
      {/* Main Content */}
      <div className='bg-white-400 text-pr container mx-auto mt-8 p-8'>
        <Hero />
        <Blogs />
      </div>

      {/* Stylish Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">SpringFallUSA</h2>
            <p className="mt-2 text-sm text-gray-400">
              Sharing knowledge and stories that inspire. Join our community of curious minds.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
           
              <li><a href="/privacy-policy" className="hover:text-white transition">Privacy And Policy</a></li>
             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 text-sm">Email: support@springfallus.org</p>
            <p className="text-gray-400 text-sm">Phone: +(977) 9819186578 </p>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 text-center text-sm text-gray-500 py-4">
          &copy; {new Date().getFullYear()} SpringFallUSA. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
