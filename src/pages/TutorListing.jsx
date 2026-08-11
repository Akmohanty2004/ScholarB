import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Star, BookOpen, Clock, Users, ChevronDown, CheckCircle, ArrowRight, Check } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function TutorListing() {
  // Dummy Data
  const [tutors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      subjects: ["Mathematics", "Physics"],
      classes: "Grade 10-12, A-Levels",
      experience: "8 Years",
      rating: 4.9,
      reviews: 124,
      classesConducted: 850,
      price: 45,
      board: "IGCSE",
      featured: true,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      cover: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      subjects: ["Chemistry", "Biology"],
      classes: "Grade 9-12, AP",
      experience: "5 Years",
      rating: 4.8,
      reviews: 89,
      classesConducted: 420,
      price: 35,
      board: "State Board",
      featured: false,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      subjects: ["English Literature"],
      classes: "All Grades",
      experience: "10 Years",
      rating: 5.0,
      reviews: 210,
      classesConducted: 1200,
      price: 40,
      board: "ICSE",
      featured: true,
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=200&auto=format&fit=crop",
      cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "David Kim",
      subjects: ["Computer Science"],
      classes: "Grade 8-12",
      experience: "4 Years",
      rating: 4.7,
      reviews: 56,
      classesConducted: 310,
      price: 30,
      board: "CBSE",
      featured: false,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
    },
  ]);

  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedBoards, setSelectedBoards] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sortBy, setSortBy] = useState('Recommended');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const query = searchParams.get('search');
    if (query !== null) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  const subjectsList = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'Computer Science'];
  const boardsList = ['CBSE', 'ICSE', 'IGCSE', 'State Board'];

  const toggleSubject = (sub) => {
    setSelectedSubjects(prev => 
      prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
    );
  };

  const toggleBoard = (board) => {
    setSelectedBoards(prev => 
      prev.includes(board) ? prev.filter(b => b !== board) : [...prev, board]
    );
  };

  const clearAll = () => {
    setSearchTerm('');
    setSelectedSubjects([]);
    setSelectedBoards([]);
    setMaxPrice(100);
    setSortBy('Recommended');
  };

  const filteredTutors = useMemo(() => {
    let result = tutors;
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(t => 
        t.name.toLowerCase().includes(lowerSearch) || 
        t.subjects.some(s => s.toLowerCase().includes(lowerSearch))
      );
    }
    if (selectedSubjects.length > 0) {
      result = result.filter(t => t.subjects.some(s => selectedSubjects.includes(s)));
    }
    if (selectedBoards.length > 0) {
      result = result.filter(t => selectedBoards.includes(t.board));
    }
    result = result.filter(t => t.price <= maxPrice);

    if (sortBy === 'Rating: High to Low') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'Price: Low to High') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Price: High to Low') result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? 1 : -1);

    return result;
  }, [tutors, searchTerm, selectedSubjects, selectedBoards, maxPrice, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="bg-transparent min-h-screen pb-20 transition-colors duration-300">
      
      {/* Premium Hero Header */}
      <div className="relative bg-gradient-to-br from-[#1A61F7] via-indigo-600 to-[#8B5CF6] dark:from-slate-900 dark:via-[#0B1120] dark:to-slate-900 pt-32 pb-20 overflow-hidden border-b border-blue-400/30 dark:border-slate-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/10 dark:bg-[#1A61F7]/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-white/10 dark:bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
              Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white dark:from-blue-400 dark:to-purple-400 drop-shadow-none">Tutor</span>
            </h1>
            <p className="text-lg text-blue-50 dark:text-slate-300 max-w-2xl mx-auto font-medium">
              Browse through our verified network of expert educators and start your journey towards academic excellence today.
            </p>
          </div>

          {/* Premium Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1A61F7] to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-100 dark:border-slate-800">
              <Search className="text-slate-400 ml-4 mr-2" size={24} />
              <input
                type="text"
                placeholder="Search by tutor name, subject, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 px-2 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 outline-none text-lg font-medium"
              />
              <button className="bg-gradient-to-r from-[#1A61F7] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="lg:hidden w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-3 rounded-xl font-bold shadow-sm"
          >
            <Filter size={18} /> {isMobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Left Sidebar - Premium Filters */}
          <aside className={`lg:w-1/4 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl p-6 sticky top-28 transition-all">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                  <Filter size={20} className="text-[#1A61F7]" /> Filters
                </h2>
                <button onClick={clearAll} className="text-sm font-semibold text-[#1A61F7] hover:text-blue-700 dark:hover:text-blue-400">
                  Clear all
                </button>
              </div>

              {/* Subjects Filter */}
              <div className="mb-8">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">Subjects</h3>
                <div className="space-y-3">
                  {subjectsList.map(sub => {
                    const isSelected = selectedSubjects.includes(sub);
                    return (
                      <label key={sub} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-200 ${
                          isSelected 
                            ? 'bg-[#1A61F7] border-[#1A61F7] shadow-[0_0_10px_rgba(26,97,247,0.3)]' 
                            : 'bg-slate-50 border-slate-300 dark:bg-slate-800 dark:border-slate-600 group-hover:border-[#1A61F7]'
                        }`}>
                          {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                        </div>
                        <span className={`text-sm font-medium transition-colors ${
                          isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                        }`}>
                          {sub}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-8"></div>

              {/* Board/Curriculum Filter */}
              <div className="mb-8">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">Board / Curriculum</h3>
                <div className="space-y-3">
                  {boardsList.map(board => {
                    const isSelected = selectedBoards.includes(board);
                    return (
                      <label key={board} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-200 ${
                          isSelected 
                            ? 'bg-[#1A61F7] border-[#1A61F7] shadow-[0_0_10px_rgba(26,97,247,0.3)]' 
                            : 'bg-slate-50 border-slate-300 dark:bg-slate-800 dark:border-slate-600 group-hover:border-[#1A61F7]'
                        }`}>
                          {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                        </div>
                        <span className={`text-sm font-medium transition-colors ${
                          isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                        }`}>
                          {board}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-8"></div>

              {/* Price Range */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Max Price</h3>
                  <span className="font-bold text-[#1A61F7] bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md text-xs">${maxPrice}/hr</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#1A61F7]"
                />
                <div className="flex justify-between text-xs font-medium text-slate-400 mt-2">
                  <span>$10</span>
                  <span>$100+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Side - Results */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {filteredTutors.length} {filteredTutors.length === 1 ? 'tutor' : 'tutors'} available
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Explore top-rated educators tailored for you.</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-500">Sort by:</span>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A61F7] shadow-sm cursor-pointer"
                  >
                    <option>Recommended</option>
                    <option>Rating: High to Low</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Tutor Cards Grid */}
            {filteredTutors.length > 0 ? (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredTutors.map(tutor => (
                  <motion.div 
                    key={tutor.id} 
                    variants={cardVariants} 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] dark:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
                  >
                    
                    {/* Top Cover Section */}
                    <div className="relative h-32 w-full overflow-hidden">
                      <img src={tutor.cover} alt="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {tutor.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                          <Star size={12} className="fill-current" /> Featured
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 pt-0 relative flex-grow flex flex-col">
                      
                      {/* Floating Profile Picture */}
                      <div className="relative -mt-12 flex justify-between items-end mb-4">
                        <div className="relative p-1.5 bg-white dark:bg-slate-900 rounded-full shadow-lg">
                          <img src={tutor.image} alt={tutor.name} className="w-20 h-20 rounded-full object-cover border border-slate-100 dark:border-slate-800" />
                          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full shadow-sm"></div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-slate-900 dark:text-white">${tutor.price}</div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">per hour</div>
                        </div>
                      </div>

                      {/* Header Info */}
                      <div className="mb-4">
                        <Link to={`/tutors/${tutor.id}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-[#1A61F7] dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                          {tutor.name} <CheckCircle size={18} className="text-[#1A61F7]" />
                        </Link>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <div className="flex items-center text-amber-500 font-bold">
                            <Star size={16} className="fill-current mr-1" /> {tutor.rating}
                          </div>
                          <span className="text-slate-400">({tutor.reviews} reviews)</span>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tutor.subjects.map(sub => (
                          <span key={sub} className="bg-blue-50 dark:bg-blue-900/30 text-[#1A61F7] dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800/50">
                            {sub}
                          </span>
                        ))}
                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
                          {tutor.board}
                        </span>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mt-auto border-t border-slate-100 dark:border-slate-800 pt-5">
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <Clock size={16} />
                          </div>
                          {tutor.experience} Exp.
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <Users size={16} />
                          </div>
                          {tutor.classesConducted}+ Classes
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 col-span-2">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <BookOpen size={16} />
                          </div>
                          {tutor.classes}
                        </div>
                      </div>
                      
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No tutors found</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Try adjusting your filters or search criteria to find the perfect tutor for your needs.
                </p>
                <button 
                  onClick={clearAll}
                  className="mt-6 px-6 py-3 bg-[#1A61F7] text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
