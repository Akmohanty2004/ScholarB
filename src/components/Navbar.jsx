import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Search, ChevronDown, Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tutors?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const navItems = [
    {
      label: "Find Tutors",
      path: "/tutors",
    },
    {
      label: "For Students",
      links: [
        { label: "Overview", path: "/for-students" },
        { label: "Find Tutors", path: "/tutors" },
        { label: "Book a Demo", path: "/book-demo" },
      ]
    },
    {
      label: "For Parents",
      links: [
        { label: "Overview", path: "/for-parents" },
        { label: "Find Tutors", path: "/tutors" },
        { label: "Book a Demo", path: "/book-demo" },
      ]
    },
    {
      label: "For Teachers",
      links: [
        { label: "Overview", path: "/for-teachers" },
        { label: "Apply as Tutor", path: "/book-demo" },
        { label: "Teacher Benefits", path: "/for-teachers" },
      ]
    }
  ];

  const DropdownMenu = ({ links }) => (
    <div className="absolute top-full left-0 mt-6 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
      <div className="absolute -top-6 left-0 w-full h-6 bg-transparent"></div>
      <div className="bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-2xl p-2 relative overflow-hidden">
        {/* Glow effect inside dropdown */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A61F7]/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          {links.map((link, i) => (
            <Link 
              key={i} 
              to={link.path} 
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#1A61F7] dark:hover:text-blue-400 rounded-xl hover:bg-[#1A61F7]/5 dark:hover:bg-blue-500/10 transition-colors group/item"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover/item:bg-[#1A61F7] transition-colors"></div>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 transition-all duration-500 rounded-full ${
        scrolled 
          ? 'py-3 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-2xl border border-white/20 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-xl' 
          : 'py-4 bg-white/40 dark:bg-[#0B1120]/40 backdrop-blur-md border border-white/10 shadow-lg'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={logo} 
                alt="ScholarB Logo" 
                className="h-14 sm:h-16 max-w-[240px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 group-hover:from-[#1A61F7] group-hover:to-purple-500 transition-all duration-500">
                ScholarB
              </span>
            </Link>
          </div>
          
          {/* Main Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((nav, idx) => {
              const isActive = location.pathname === nav.path;
              return (
                <div key={idx} className="relative group">
                  {nav.path ? (
                    <Link 
                      to={nav.path} 
                      className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 relative overflow-hidden ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-[#1A61F7] to-blue-600 shadow-md' 
                          : 'text-slate-600 dark:text-slate-300 hover:text-[#1A61F7] dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                      }`}
                    >
                      {nav.label}
                    </Link>
                  ) : (
                    <div className="px-4 py-2 rounded-full font-semibold text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300 flex items-center gap-1 cursor-pointer">
                      {nav.label} 
                      <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                    </div>
                  )}

                  {/* Dropdown for items with links */}
                  {nav.links && <DropdownMenu links={nav.links} />}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Search Icon */}
            <button 
              onClick={() => setShowSearch(!showSearch)} 
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:text-[#1A61F7] dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300"
            >
              <Search size={20} />
            </button>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-slate-500 hover:text-amber-500 dark:text-slate-400 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3 pl-4 ml-2 border-l border-slate-200 dark:border-slate-800 h-8">
              <Link 
                to="/login" 
                className="font-bold text-sm text-slate-600 dark:text-slate-300 hover:text-[#1A61F7] dark:hover:text-blue-400 transition-colors"
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="group relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Join Free 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Animated Search Bar Dropdown */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-4"
            >
              <div className="max-w-3xl mx-auto pb-4">
                <form onSubmit={handleSearch} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1A61F7] to-[#8B5CF6] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative flex items-center bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-lg rounded-full p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                    <Search className="text-slate-400 ml-3 mr-2" size={20} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      placeholder="What do you want to learn today?"
                      className="flex-grow py-3 px-2 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 outline-none text-base font-medium"
                    />
                    <button type="submit" className="bg-[#1A61F7] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl lg:hidden max-h-[80vh] overflow-y-auto z-50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="space-y-2">
                <Link to="/tutors" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-200 hover:bg-[#1A61F7]/10 hover:text-[#1A61F7] transition-all">
                  <Search size={20} className="opacity-50" /> Find Tutors
                </Link>
                <Link to="/for-students" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-200 hover:bg-[#1A61F7]/10 hover:text-[#1A61F7] transition-all">
                  For Students
                </Link>
                <Link to="/for-parents" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-200 hover:bg-[#1A61F7]/10 hover:text-[#1A61F7] transition-all">
                  For Parents
                </Link>
                <Link to="/for-teachers" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-200 hover:bg-[#1A61F7]/10 hover:text-[#1A61F7] transition-all">
                  For Teachers
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full py-4 text-center rounded-2xl border-2 border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 hover:border-[#1A61F7] hover:text-[#1A61F7] transition-all">
                  Log In
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="block w-full py-4 text-center rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-xl transition-all">
                  Join for Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
