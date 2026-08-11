import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, TrendingUp, GraduationCap, Users, BookOpen, Target, CheckCircle, Star, MonitorPlay, Clock, Sparkles, X, Award, Quote, Video, BrainCircuit, MessageCircle, BarChart3, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import createVideo from '../assets/create_a_video.mp4';

export default function LandingPage() {
  const [activeRole, setActiveRole] = useState('students');

  const roleContent = {
    students: [
      { title: "Learn Anytime, Anywhere", desc: "Flexible schedules and online classes that fit your routine" },
      { title: "Revise With Experts", desc: "Connect with expert tutors and personalized learning" },
      { title: "Practice & Improve", desc: "Practice by targeting weak areas and track improvement" }
    ],
    parents: [
      { title: "Track Progress With Confidence", desc: "Monitor your child's learning, performance and improvement" },
      { title: "Personalized Learning That Works", desc: "Help your child understand concepts deeply and build strong foundations" },
      { title: "Better Results, Brighter Future", desc: "Monitor progress and help your child achieve academic goals" },
      { title: "Stay Informed, Stay Involved", desc: "Receive regular updates and communicate with tutors" }
    ],
    teachers: [
      { title: "Teach Your Way", desc: "Manage your schedule and choose how you teach" },
      { title: "Powerful Teaching Tools", desc: "Access tools for classes, doubt solving and performance tracking" },
      { title: "Grow Your Impact", desc: "Reach more students and make a bigger difference" },
      { title: "Support That Empowers", desc: "Get dedicated support and resources" }
    ]
  };

  const boards = ['CBSE', 'ICSE', 'IGCSE', 'GCSE', 'IB', 'A Levels', 'AP', 'State Boards', 'AS', 'O Level', 'IELTS', 'NTSE', 'NEET', 'Olympiads'];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const topTutors = [
    { name: "Dr. Sarah Jenkins", subject: "Advanced Mathematics", rating: "4.9", students: "1.2k+", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80", color: "from-blue-500 to-cyan-400" },
    { name: "Prof. Michael Chen", subject: "Physics & Chemistry", rating: "4.8", students: "950+", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80", color: "from-purple-500 to-pink-500" },
    { name: "Emma Thompson", subject: "English Literature", rating: "5.0", students: "2.1k+", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80", color: "from-orange-400 to-red-500" },
    { name: "David Rodriguez", subject: "Computer Science", rating: "4.9", students: "1.5k+", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80", color: "from-green-400 to-emerald-600" }
  ];

  const testimonials = [
    { text: "My daughter's math grades went from a C to an A in just 3 months. The tutors are incredibly patient and skilled.", author: "Priya M.", role: "Parent" },
    { text: "The interactive whiteboards and 1-on-1 attention made learning Physics actually fun. Highly recommended!", author: "Rahul K.", role: "Student, Grade 11" },
    { text: "As a teacher, I love the flexibility and the platform's tools. It lets me focus entirely on teaching.", author: "Ananya S.", role: "Tutor" },
    { text: "We tried local tuitions but nothing compares to the quality of educators on ScholarB.", author: "Vikram R.", role: "Parent" },
    { text: "I cracked my Olympiad thanks to the rigorous practice sessions and expert guidance here.", author: "Sneha P.", role: "Student, Grade 9" }
  ];

  return (
    <div className="bg-transparent min-h-screen font-sans overflow-x-hidden transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-transparent">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          
          {/* DAY MODE: Vibrant Mesh Gradient Orbs */}
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/40 via-purple-300/40 to-pink-300/30 dark:hidden rounded-full blur-[120px] animate-float-slow"></div>
          <div className="absolute top-[20%] -left-[20%] w-[700px] h-[700px] bg-gradient-to-tr from-cyan-300/40 via-blue-300/30 to-transparent dark:hidden rounded-full blur-[120px] animate-float-reverse"></div>
          <div className="absolute -bottom-[10%] right-[10%] w-[600px] h-[600px] bg-gradient-to-tl from-yellow-300/30 via-orange-300/20 to-transparent dark:hidden rounded-full blur-[100px] animate-pulse-slow"></div>

          {/* DARK MODE: Subtle Neon Orbs */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] hidden dark:block bg-gradient-to-bl from-[#1A61F7]/20 via-purple-900/20 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] hidden dark:block bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl animate-float-reverse"></div>
          
          {/* Floating particles */}
          <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-[#1A61F7]/50 dark:bg-blue-400/30 animate-particle"></div>
          <div className="absolute top-[40%] right-[8%] w-2 h-2 rounded-full bg-purple-500/50 dark:bg-purple-400/30 animate-particle" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-[60%] left-[15%] w-2.5 h-2.5 rounded-full bg-blue-300/25 animate-particle" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-[25%] right-[35%] w-2 h-2 rounded-full bg-pink-400/20 animate-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-[25%] left-[40%] w-1.5 h-1.5 rounded-full bg-yellow-400/30 animate-particle" style={{animationDelay: '3s'}}></div>
          
          {/* Decorative rotating ring */}
          <div className="absolute top-[10%] right-[30%] w-16 h-16 border-2 border-dashed border-blue-200/30 dark:border-blue-800/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-[30%] left-[8%] w-12 h-12 border-2 border-dashed border-purple-200/25 dark:border-purple-800/15 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
          
          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" className="fill-blue-50/60 dark:fill-blue-950/20"/>
              <path d="M0,80 C360,20 720,100 1080,50 C1260,30 1380,60 1440,40 L1440,120 L0,120 Z" className="fill-blue-50/40 dark:fill-blue-950/10"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="w-full lg:w-[48%]"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-100 dark:border-blue-800 text-[#1A61F7] dark:text-blue-400 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm animate-pulse-glow">
                  <Sparkles size={16} className="text-yellow-500" /> Better Learning. Brighter Future.
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={fadeInUp} className="text-[42px] sm:text-[52px] lg:text-[60px] xl:text-[68px] font-extrabold leading-[1.08] tracking-tight mb-6">
                <span className="text-slate-900 dark:text-white">Find the Right</span><br/>
                <span className="text-slate-900 dark:text-white">Tutor.</span><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A61F7] via-purple-600 to-pink-500 animate-gradient bg-[length:200%_auto]">Achieve Your Goals.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-[440px] leading-relaxed">
                Connect with verified expert tutors for 1-to-1 or group classes. Personalized learning that helps you excel — anytime, anywhere.
              </motion.p>
              
              {/* CTA */}
              <motion.div variants={fadeInUp} className="mb-10">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link to="/book-demo" className="btn-primary px-8 py-4 text-lg rounded-xl animate-pulse-glow">
                    Join Now for Free <ChevronRight size={20} />
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Trust badges */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                {[
                  { icon: <CheckCircle size={18} />, text: ["Verified &", "experienced tutors"] },
                  { icon: <Calendar size={18} />, text: ["Flexible", "learning modes"] },
                  { icon: <TrendingUp size={18} />, text: ["Better results", "you can see"] }
                ].map((badge, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05, y: -2 }} className="flex items-center gap-2.5 cursor-default">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-[#1A61F7] dark:text-blue-400">{badge.icon}</span>
                    </div>
                    <span>{badge.text[0]}<br/>{badge.text[1]}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right - Hero Illustration with 3D effects */}
            <motion.div 
              initial={{ opacity: 0, x: 80, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full lg:w-[52%] relative perspective-1000"
            >
              {/* Floating stat: Happy Students */}
              <motion.div 
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                className="absolute -top-6 lg:-top-10 left-[2%] lg:left-[5%] z-20 animate-float"
              >
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg border border-white/50 dark:border-slate-700 flex items-center gap-3 card-3d">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">10,000+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Happy Students</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat: Rating */}
              <motion.div 
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                className="absolute -top-6 lg:-top-10 right-[2%] lg:right-[15%] z-20 animate-float-slow"
              >
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg border border-white/50 dark:border-slate-700 flex items-center gap-3 card-3d">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-md">
                    <Star size={20} className="text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">4.9/5</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Average Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating feature badges */}
              <div className="hidden xl:flex flex-col gap-3 absolute -right-4 top-[28%] z-20">
                {[
                  { icon: <MonitorPlay size={16} />, label: "1-to-1 Classes", delay: 1.1 },
                  { icon: <Users size={16} />, label: "Group Classes", delay: 1.25 },
                  { icon: <BookOpen size={16} />, label: "All Subjects", delay: 1.4 },
                  { icon: <Clock size={16} />, label: "Learn Anytime", delay: 1.55 }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 40, rotateY: -20 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: item.delay, duration: 0.5, type: "spring" }}
                    className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-md border border-white/50 dark:border-slate-700 flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 card-3d ${idx % 2 === 0 ? 'animate-float' : 'animate-float-slow'}`}
                    style={{ animationDelay: `${idx * 0.5}s` }}
                  >
                    <span className="text-[#1A61F7] dark:text-blue-400">{item.icon}</span>
                    {item.label}
                  </motion.div>
                ))}
              </div>

              {/* Main Video with Premium App Window Wrapper */}
              <div className="relative mt-12 lg:mt-8 perspective-1000 group z-10">
                
                {/* 3D Floating Elements around the video */}
                <motion.div
                  animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -left-12 z-20 hidden md:flex items-center justify-center w-24 h-24 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/60 dark:border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(37,99,235,0.2)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform -rotate-12"
                >
                  <BookOpen size={40} className="text-[#1A61F7] dark:text-blue-400 drop-shadow-lg" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -right-8 z-30 hidden md:flex items-center justify-center w-20 h-20 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/60 dark:border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(236,72,153,0.2)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform rotate-12"
                >
                  <GraduationCap size={32} className="text-pink-500 dark:text-pink-400 drop-shadow-lg" />
                </motion.div>

                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 -right-16 z-20 hidden lg:flex items-center justify-center w-16 h-16 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/60 dark:border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(234,179,8,0.2)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform rotate-45"
                >
                  <Star size={24} className="text-yellow-500 fill-yellow-500 drop-shadow-lg" />
                </motion.div>
                <motion.div 
                  whileHover={{ rotateY: -2, rotateX: 2, scale: 1.02 }} 
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }} 
                  className="relative mx-auto w-full max-w-[640px] rounded-2xl p-2 bg-gradient-to-b from-white/40 to-white/10 dark:from-slate-800/50 dark:to-slate-800/10 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-2xl shadow-blue-900/20 dark:shadow-black/50"
                >
                  <div className="rounded-xl overflow-hidden bg-slate-900 shadow-inner relative flex flex-col h-full">
                    {/* Mockup Title Bar */}
                    <div className="bg-slate-800/80 backdrop-blur-md px-4 py-3 flex items-center gap-2 border-b border-slate-700/50 z-10">
                      <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm shadow-red-400/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm shadow-green-400/50"></div>
                    </div>
                    {/* Video Content */}
                    <div className="relative w-full aspect-video bg-black overflow-hidden">
                      <video 
                        src={createVideo} 
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      />
                    </div>
                  </div>
                </motion.div>
                {/* Intense Glow behind the window */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-[80px] rounded-full scale-90 animate-pulse-slow"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="relative z-10 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-4 mt-4 border-t border-blue-100/60 dark:border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 text-center">
            <p className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
              Join thousands of learners who are already achieving their dreams with <Link to="/" className="text-[#1A61F7] dark:text-blue-400 font-bold hover:underline">ScholarB</Link> <span className="text-red-500">❤️</span>
            </p>
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="bg-white dark:bg-slate-950 py-20 transition-colors duration-300">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">I want to join as a:</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Choose your role to see how ScholarB helps you</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-5 mb-14 max-w-3xl mx-auto perspective-1000">
            {[
              { key: 'students', icon: <GraduationCap size={30} />, label: 'Students', gradient: 'from-blue-500 to-blue-600' },
              { key: 'parents', icon: <Users size={30} />, label: 'Parents', gradient: 'from-green-500 to-emerald-600' },
              { key: 'teachers', icon: <BookOpen size={30} />, label: 'Teachers', gradient: 'from-purple-500 to-violet-600' },
            ].map(role => (
              <motion.div 
                key={role.key}
                whileHover={{ y: -8, rotateX: 5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveRole(role.key)}
                className={`flex-1 flex flex-col items-center justify-center p-7 rounded-2xl border-2 cursor-pointer transition-all duration-300 card-3d relative overflow-hidden ${
                  activeRole === role.key 
                    ? 'border-[#1A61F7] bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900 shadow-xl shadow-blue-500/20 dark:shadow-blue-500/10 ring-2 ring-[#1A61F7]/20' 
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg'
                }`}
              >
                {/* Active Highlight Glow */}
                {activeRole === role.key && <div className="absolute -inset-2 bg-blue-400/20 blur-2xl z-0 pointer-events-none"></div>}
                
                <div className={`relative z-10 p-3.5 rounded-full mb-3 transition-all duration-300 ${
                  activeRole === role.key 
                    ? `bg-gradient-to-br ${role.gradient} text-white shadow-lg scale-110` 
                    : 'bg-blue-50 dark:bg-slate-800 text-[#1A61F7] dark:text-blue-400 group-hover:scale-105'
                }`}>
                  {role.icon}
                </div>
                <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-white transition-colors">{role.label}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-sm min-h-[280px] transition-colors">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {roleContent[activeRole].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group flex gap-4 p-5 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-[#1A61F7]/50 dark:hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-sm">
                          <CheckCircle className="text-white" size={18} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* Top Tutors Carousel */}
      <section className="relative bg-transparent py-24 overflow-hidden border-t border-white/20 dark:border-slate-800 transition-colors">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-slate-900/50 dark:to-transparent pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-900/50 border border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400 font-bold text-sm tracking-wide uppercase shadow-sm">
                <Award size={16} /> Top Rated
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
                <span className="text-slate-900 dark:text-white">Learn from the </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A61F7] to-purple-600">Best</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl font-medium">Connect with highly vetted, world-class educators.</p>
            </div>
            <Link to="/tutors" className="hidden sm:inline-flex items-center gap-2 font-bold text-[#1A61F7] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group">
              View all tutors <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topTutors.map((tutor, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group relative perspective-1000"
              >
                <div className="h-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/50 dark:border-slate-700 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
                  {/* Subtle Background Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tutor.color} opacity-10 dark:opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-[3px] border-white dark:border-slate-800 shadow-md group-hover:border-[#1A61F7] dark:group-hover:border-blue-500 transition-colors">
                      <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/80 dark:bg-blue-900/30 rounded-xl text-xs font-bold text-[#1A61F7] dark:text-blue-400 mb-4 border border-blue-100 dark:border-blue-800/50 group-hover:bg-[#1A61F7] group-hover:text-white transition-colors">
                      <BookOpen size={14} /> {tutor.subject}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tutor.name}</h3>
                    
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" /> {tutor.rating}
                      </div>
                      <div className="flex items-center gap-1.5 font-medium text-slate-500 dark:text-slate-400 text-sm">
                        <Users size={16} /> {tutor.students} students
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/tutors" className="inline-flex items-center gap-2 font-bold text-[#1A61F7] dark:text-blue-400 hover:text-blue-700 transition-colors">
              View all tutors <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">How It Works</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Get started in just 5 simple steps</p>
          </motion.div>

          <div className="relative">
            {/* Animated Glowing Journey Line */}
            <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-1.5 bg-slate-200 dark:bg-slate-800/50 z-0 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="h-full bg-gradient-to-r from-blue-400 via-[#1A61F7] to-orange-400 shadow-[0_0_15px_rgba(26,97,247,0.5)]"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { icon: <Target size={28} />, title: "Choose Your Goal", desc: "Select what you want to learn.", color: "from-blue-400 to-blue-600" },
                { icon: <Users size={28} />, title: "Pick a Tutor", desc: "Find the perfect match.", color: "from-purple-400 to-purple-600" },
                { icon: <Calendar size={28} />, title: "Book a Free Demo", desc: "Try before you commit.", color: "from-green-400 to-green-600" },
                { icon: <MonitorPlay size={28} />, title: "Start Learning", desc: "Engage in live sessions.", color: "from-[#1A61F7] to-[#2563EB]", active: true },
                { icon: <TrendingUp size={28} />, title: "Track Progress", desc: "See your improvement.", color: "from-orange-400 to-orange-600" }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.05, rotateY: 5 }}
                  className="flex flex-col items-center text-center relative perspective-1000"
                >
                  <div className={`w-[88px] h-[88px] rounded-full flex items-center justify-center mb-5 relative bg-gradient-to-br ${step.color} text-white shadow-lg ${step.active ? 'animate-pulse-glow scale-110' : ''} transition-all`}>
                    {step.icon}
                    <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center font-bold text-xs border-[3px] border-white dark:border-slate-900 shadow-sm">{idx + 1}</div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Bento Box */}
      <section className="bg-white dark:bg-slate-950 py-24 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-purple-100/50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 font-bold text-sm tracking-wide uppercase">
              <Sparkles size={16} /> Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Everything you need to succeed</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">A powerful, all-in-one platform designed to accelerate your learning.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
            {/* Main Feature - Large */}
            <motion.div 
              variants={scaleIn}
              className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-end hover:border-[#1A61F7] dark:hover:border-blue-500 transition-colors"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-700 z-0"></div>
              
              {/* Graphic/Image for the card */}
              <div className="absolute top-8 left-8 right-28 bottom-40 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-inner group-hover:scale-[1.02] transition-transform duration-500 z-0 bg-slate-200 dark:bg-slate-800">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Live Class" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                {/* Floating UI elements overlay */}
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold flex items-center gap-1.5 shadow-lg border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> LIVE
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 z-10">
                <Video size={32} className="text-[#1A61F7] dark:text-blue-400" />
              </div>
              <div className="relative z-10 mt-auto pt-40">
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">Live Interactive Classes</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md">Experience high-quality, seamless 1-on-1 video sessions with interactive whiteboards and real-time collaboration.</p>
              </div>
            </motion.div>

            {/* AI Feature - Wide */}
            <motion.div 
              variants={scaleIn}
              className="md:col-span-1 lg:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 hover:border-purple-500 transition-colors flex items-center gap-6"
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:-translate-y-2 transition-transform duration-300">
                <BrainCircuit size={28} className="text-purple-600 dark:text-purple-400" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI-Powered Notes</h3>
                <p className="text-slate-500 dark:text-slate-400">Smart summaries generated automatically after every class.</p>
              </div>
            </motion.div>

            {/* Support Feature - Square */}
            <motion.div 
              variants={scaleIn}
              className="md:col-span-1 lg:col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:border-green-500 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">24/7 Doubt Solving</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-auto">Get answers anytime with our integrated chat.</p>
            </motion.div>

            {/* Tracking Feature - Square */}
            <motion.div 
              variants={scaleIn}
              className="md:col-span-1 lg:col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:border-orange-500 transition-colors"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Detailed Analytics</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-auto">Track your performance and mastery over time.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Boards Section */}
      <section className="relative bg-slate-50 dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800 transition-colors overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 dark:opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-[#1A61F7] dark:text-blue-400 font-bold text-sm tracking-wide uppercase">Curriculum</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">What are you learning?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">We support all major educational boards and top competitive exams worldwide.</p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {boards.map((board, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ scale: 1.1, y: -4, rotateZ: 2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-800 border-2 border-slate-200/60 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#1A61F7] dark:hover:border-blue-500 hover:text-[#1A61F7] dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
              >
                {board}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Global Impact Section */}
      <section className="relative py-24 overflow-hidden bg-[#0B1120]">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-tr from-[#1A61F7]/20 via-purple-600/20 to-pink-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-400 font-bold text-sm tracking-wide uppercase"
          >
            <Globe size={16} /> Global Impact
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-16 tracking-tight"
          >
            Empowering students <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">worldwide.</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "50K+", label: "Active Students", icon: <Users size={32} /> },
              { number: "98%", label: "Satisfaction Rate", icon: <Star size={32} className="fill-blue-400" /> },
              { number: "2000+", label: "Expert Tutors", icon: <Award size={32} /> },
              { number: "1M+", label: "Live Classes", icon: <MonitorPlay size={32} /> }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  {stat.icon}
                </div>
                <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2">{stat.number}</div>
                <div className="text-slate-400 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee Section */}
      <section className="bg-white dark:bg-slate-950 py-24 overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-pink-100/50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-400 font-bold text-sm tracking-wide uppercase">
            <Star size={16} className="fill-pink-500" /> Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Loved by Students & Parents</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">Don't just take our word for it. Here's what our community has to say about learning with ScholarB.</p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full flex overflow-hidden">
          {/* Gradient masks for smooth fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-slate-950 dark:to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-slate-950 dark:to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Content */}
          <div className="flex animate-marquee gap-6 py-4 whitespace-nowrap min-w-full">
            {/* Render array twice for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[350px] sm:w-[450px] flex-shrink-0 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 card-3d whitespace-normal relative overflow-hidden group"
              >
                <Quote size={80} className="absolute -top-4 -left-4 text-blue-500/5 dark:text-blue-500/10 group-hover:scale-125 transition-transform duration-500" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed mb-8 italic relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-[#1A61F7] text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{testimonial.author}</h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1A61F7] to-[#2563EB] py-16 animate-gradient bg-[length:200%_auto]">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-20 h-20 border border-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-[20%] right-[15%] w-16 h-16 border border-white/10 rounded-full animate-float-slow"></div>
          <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-white/20 rounded-full animate-particle"></div>
          <div className="absolute top-[60%] left-[25%] w-2 h-2 bg-white/15 rounded-full animate-particle" style={{animationDelay: '2s'}}></div>
        </div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join ScholarB today and connect with expert tutors who will help you achieve your academic goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link to="/book-demo" className="inline-flex items-center gap-2 bg-white text-[#1A61F7] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl">
                Book a Free Demo <ChevronRight size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link to="/tutors" className="inline-flex items-center gap-2 border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Find Tutors
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
