import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-1.5 mb-6">
              <img 
                src={logo} 
                alt="ScholarB Logo" 
                className="h-14 sm:h-16 max-w-[240px] w-auto object-contain" 
              />
              <span className="font-bold text-2xl text-white tracking-tight">ScholarB</span>
            </Link>
            <p className="text-base text-slate-400 leading-relaxed max-w-sm mb-8">
              Connecting students with verified expert tutors for personalized learning and better results. Elevate your academic journey with us.
            </p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Subscribe to our newsletter</h4>
              <form className="flex max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-l-xl w-full focus:outline-none focus:border-[#1A61F7]"
                />
                <button type="submit" className="bg-[#1A61F7] hover:bg-blue-600 text-white px-5 py-3 rounded-r-xl transition-colors flex items-center justify-center">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
          
          {/* Platform */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Platform</h3>
            <ul className="space-y-3 text-base">
              <li><Link to="/tutors" className="text-slate-400 hover:text-[#1A61F7] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Find Tutors</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-[#1A61F7] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>How it Works</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-[#1A61F7] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Resources</Link></li>
              <li><Link to="/book-demo" className="text-slate-400 hover:text-[#1A61F7] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Book a Demo</Link></li>
            </ul>
          </div>
          
          {/* Roles */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Roles</h3>
            <ul className="space-y-3 text-base">
              <li><Link to="/for-students" className="text-slate-400 hover:text-[#1A61F7] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>For Students</Link></li>
              <li><Link to="/for-parents" className="text-slate-400 hover:text-[#1A61F7] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>For Parents</Link></li>
              <li><Link to="/for-teachers" className="text-slate-400 hover:text-[#1A61F7] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>For Teachers</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={18} className="text-[#1A61F7] mt-1 shrink-0" />
                <a href="mailto:support@scholarb.com" className="hover:text-white transition-colors">support@scholarb.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone size={18} className="text-[#1A61F7] mt-1 shrink-0" />
                <a href="tel:+18001234567" className="hover:text-white transition-colors">+1 (800) 123-4567</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="text-[#1A61F7] mt-1 shrink-0" />
                <span>123 Education Lane<br/>Learning City, ED 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ScholarB Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#1A61F7] hover:bg-slate-800 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#1A61F7] hover:bg-slate-800 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#1A61F7] hover:bg-slate-800 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
