import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ChevronRight, BookOpen, Users, Star } from 'lucide-react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    
    // Simulate successful login
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-20 flex bg-transparent transition-colors duration-300">
      
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-8">
              <img src={logo} alt="ScholarB Logo" className="h-14 sm:h-16 max-w-[240px] w-auto object-contain" />
              <span className="font-bold text-2xl text-[#0F172A] dark:text-white tracking-tight">ScholarB</span>
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
            <p className="text-slate-500 dark:text-slate-400">Please enter your details to sign in.</p>
          </div>

          {/* Social Login */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Log in with Google
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase">or email</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 text-sm font-medium flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-[#1A61F7] focus:border-[#1A61F7] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-[#1A61F7] focus:border-[#1A61F7] transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="w-4 h-4 rounded border-slate-300 text-[#1A61F7] focus:ring-[#1A61F7]" />
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Remember me</span>
              </label>
              <a href="#" className="text-sm font-semibold text-[#1A61F7] hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full btn-primary py-4 text-base rounded-xl mt-2">
              Log In <ChevronRight size={18} />
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#1A61F7] font-bold hover:underline">
              Sign up for free
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right side - Creative split screen */}
      <div className="hidden lg:flex w-1/2 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-l border-white/20 dark:border-slate-800 p-12 flex-col justify-center relative overflow-hidden">
        
        {/* Animated Liquid Gradient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] left-[20%] w-[50%] h-[50%] rounded-full bg-pink-400/20 dark:bg-pink-600/20 blur-[90px] mix-blend-multiply dark:mix-blend-screen"
          />
        </div>
        
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 dark:opacity-10 z-0"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-lg mx-auto"
        >
          {/* Main graphic composed of UI cards */}
          <div className="relative h-80 w-full mb-12">
            
            {/* Center abstract shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#1A61F7] to-[#8B5CF6] rounded-3xl rotate-12 opacity-10 dark:opacity-20 blur-md"></div>
            
            {/* Top Stat Card */}
            <div className="absolute top-0 right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 w-48 rotate-3 transform transition-transform hover:rotate-0 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Star size={20} className="fill-current" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">4.9/5</div>
                  <div className="text-xs text-slate-500">Tutor Rating</div>
                </div>
              </div>
            </div>

            {/* Left Subject Card */}
            <div className="absolute bottom-10 left-0 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 w-52 -rotate-6 transform transition-transform hover:rotate-0 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Mathematics</div>
                  <div className="text-xs text-slate-500">Advanced Calculus</div>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Right Community Card */}
            <div className="absolute bottom-0 right-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white/50 dark:border-slate-700 w-56 rotate-6 transform transition-transform hover:rotate-0 hover:-translate-y-2 z-10">
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-slate-900 dark:text-white">Active Learners</div>
                <Users size={18} className="text-emerald-500" />
              </div>
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover" alt="User" />
                <img src="https://i.pravatar.cc/150?img=32" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover" alt="User" />
                <img src="https://i.pravatar.cc/150?img=44" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover" alt="User" />
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                  +10k
                </div>
              </div>
            </div>
            
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Empower your learning journey.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Join the thousands of students improving their grades and achieving their goals with world-class personalized tutoring.</p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
