import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ChevronRight, CheckCircle, Target, TrendingUp } from 'lucide-react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('student');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!agreed) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }
    
    // Simulate successful signup
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-20 flex bg-transparent transition-colors duration-300">
      
      {/* Left side - Creative split screen */}
      <div className="hidden lg:flex w-1/2 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-r border-white/20 dark:border-slate-800 p-12 flex-col justify-center relative overflow-hidden">
        
        {/* Animated Liquid Gradient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, -50, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] right-[20%] w-[50%] h-[50%] rounded-full bg-emerald-400/20 dark:bg-emerald-600/20 blur-[90px] mix-blend-multiply dark:mix-blend-screen"
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
          <div className="relative h-[340px] w-full mb-12">
            
            {/* Center abstract shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-tr from-[#1A61F7] to-[#8B5CF6] rounded-full opacity-10 dark:opacity-20 blur-xl"></div>
            
            {/* Top Verification Card */}
            <div className="absolute top-4 left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white/50 dark:border-slate-700 w-52 -rotate-3 transform transition-transform hover:rotate-0 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-inner">
                  <CheckCircle size={20} className="fill-current text-white dark:text-slate-800" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Expert Tutors</div>
                  <div className="text-xs text-slate-500">100% Verified</div>
                </div>
              </div>
            </div>

            {/* Right Goal Card */}
            <div className="absolute top-24 right-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white/50 dark:border-slate-700 w-48 rotate-6 transform transition-transform hover:rotate-0 hover:-translate-y-2 z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 dark:text-orange-400 mb-3 shadow-inner">
                  <Target size={24} />
                </div>
                <div className="font-bold text-slate-900 dark:text-white mb-1">Target Score</div>
                <div className="text-xs text-slate-500">Achieve your dreams</div>
              </div>
            </div>

            {/* Bottom Chart Card */}
            <div className="absolute bottom-4 left-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white/50 dark:border-slate-700 w-64 -rotate-2 transform transition-transform hover:rotate-0 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-slate-900 dark:text-white">Your Progress</div>
                <TrendingUp size={18} className="text-[#1A61F7]" />
              </div>
              <div className="flex items-end gap-2 h-16 pt-2">
                <div className="w-1/5 bg-blue-100 dark:bg-slate-700 h-1/3 rounded-t-sm"></div>
                <div className="w-1/5 bg-blue-200 dark:bg-slate-600 h-1/2 rounded-t-sm"></div>
                <div className="w-1/5 bg-blue-300 dark:bg-slate-500 h-2/3 rounded-t-sm"></div>
                <div className="w-1/5 bg-blue-400 dark:bg-blue-900 h-4/5 rounded-t-sm"></div>
                <div className="w-1/5 bg-[#1A61F7] dark:bg-[#1A61F7] h-full rounded-t-sm"></div>
              </div>
            </div>
            
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Start your success story.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Create an account to connect with top educators, manage your learning schedule, and track your academic progress.</p>
          </div>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <img src={logo} alt="ScholarB Logo" className="h-14 sm:h-16 max-w-[240px] w-auto object-contain" />
              <span className="font-bold text-2xl text-[#0F172A] dark:text-white tracking-tight">ScholarB</span>
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Create Account</h1>
            <p className="text-slate-500 dark:text-slate-400">Join ScholarB and start learning today.</p>
          </div>

          {/* Social Signup */}
          <div className="mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase">or register with email</span>
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
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">I am a:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'student', label: 'Student' },
                  { key: 'parent', label: 'Parent' },
                  { key: 'teacher', label: 'Teacher' }
                ].map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    onClick={() => setRole(r.key)}
                    className={`py-2.5 rounded-xl text-sm font-semibold transition-all border-2 ${
                      role === r.key
                        ? 'border-[#1A61F7] bg-blue-50 dark:bg-blue-900/20 text-[#1A61F7] dark:text-blue-400'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-900'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-[#1A61F7] focus:border-[#1A61F7] transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-[#1A61F7] focus:border-[#1A61F7] transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  required
                  minLength={8}
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-[#1A61F7] focus:border-[#1A61F7] transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2.5 cursor-pointer mt-4">
              <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} required className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-[#1A61F7] focus:ring-[#1A61F7] mt-0.5" />
              <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                I agree to the <a href="#" className="text-[#1A61F7] font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-[#1A61F7] font-semibold hover:underline">Privacy Policy</a>
              </span>
            </label>

            {/* Submit */}
            <button type="submit" className="w-full btn-primary py-4 text-base rounded-xl mt-4">
              Create Account <ChevronRight size={18} />
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#1A61F7] font-bold hover:underline">
              Log in instead
            </Link>
          </p>
        </motion.div>
      </div>

    </div>
  );
}
