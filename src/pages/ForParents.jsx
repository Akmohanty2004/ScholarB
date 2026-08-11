import { Link } from 'react-router-dom';
import { Users, ShieldCheck, BarChart3, Clock, Eye, FileText, MessageCircle, ChevronRight, Star, CheckCircle, Lock, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ForParents() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const benefits = [
    { icon: <ShieldCheck size={28} />, title: "Verified & Safe Tutors", desc: "Every tutor undergoes background checks and identity verification. Your child's safety is our priority.", color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
    { icon: <BarChart3 size={28} />, title: "Track Progress in Real-Time", desc: "Monitor your child's performance, attendance, and improvement with detailed reports and analytics.", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
    { icon: <Clock size={28} />, title: "Flexible Scheduling", desc: "Choose class timings that fit your child's routine. Reschedule anytime without penalties.", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
    { icon: <FileText size={28} />, title: "Transparent Pricing", desc: "No hidden fees. See exactly what you're paying for with clear, affordable pricing plans.", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" }
  ];

  const dashboardFeatures = [
    { icon: <BarChart3 size={20} />, title: "Progress Reports", desc: "Weekly and monthly reports on your child's academic progress" },
    { icon: <MessageCircle size={20} />, title: "Tutor Communication", desc: "Direct messaging with your child's tutor anytime" },
    { icon: <Eye size={20} />, title: "Session Recordings", desc: "Review past sessions and track what's being taught" },
    { icon: <Bell size={20} />, title: "Real-time Notifications", desc: "Get alerts for sessions, reports, and milestones" }
  ];

  const testimonials = [
    { name: "Meera Gupta", relation: "Mother of Aarav, Grade 8", rating: 5, text: "I can finally see exactly how my son is doing in school. The progress reports are detailed and the tutor communicates regularly." },
    { name: "Rajesh Kumar", relation: "Father of Sneha, Grade 11", rating: 5, text: "My daughter's grades improved significantly in just 3 months. The tutors are patient and truly care about the student's success." },
    { name: "Anita Desai", relation: "Mother of Rohan, Grade 10", rating: 5, text: "The flexibility is wonderful. We can schedule classes around my son's cricket practice without any issues." }
  ];

  return (
    <div className="bg-transparent min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="relative overflow-hidden bg-transparent">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[20%] left-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-green-400/20 dark:bg-green-600/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-400/20 dark:bg-[#1A61F7]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users size={16} /> For Parents
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                Your Child's Success<br/><span className="text-gradient">Starts Here</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Monitor your child's progress, communicate with tutors, and ensure they get the best personalized education — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo" className="btn-primary px-8 py-4 text-lg rounded-xl shadow-[0_0_20px_rgba(26,97,247,0.4)]">
                  Book Free Demo <ChevronRight size={20} />
                </Link>
                <Link to="/tutors" className="btn-outline px-8 py-4 text-lg rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                  Find a Tutor
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose */}
      <section className="py-20 bg-transparent transition-colors relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Why Parents Choose ScholarB</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Peace of mind for your child's education</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }} className="p-8 rounded-3xl border border-white/60 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${b.color} flex items-center justify-center mb-6 shadow-sm`}>{b.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{b.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Parent Dashboard Preview */}
      <section className="py-20 bg-transparent border-t border-white/20 dark:border-slate-800 transition-colors relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Parent Dashboard</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Everything you need to stay informed</p>
          </div>
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-slate-700 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {dashboardFeatures.map((f, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-[#1A61F7] dark:text-blue-400 flex items-center justify-center flex-shrink-0 shadow-sm">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-transparent transition-colors relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Safety & Trust</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Your child's safety is our top priority</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <ShieldCheck size={28} />, title: "Verified Tutors", desc: "All tutors go through strict verification and background checks." },
              { icon: <Eye size={28} />, title: "Session Recordings", desc: "All sessions can be recorded for parent review and transparency." },
              { icon: <Lock size={28} />, title: "Secure Platform", desc: "End-to-end encryption and data protection for all users." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-green-50/80 dark:bg-green-900/20 backdrop-blur-md border border-green-200/50 dark:border-green-800/30 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-5 shadow-sm">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-transparent border-t border-white/20 dark:border-slate-800 transition-colors relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">What Parents Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="p-8 rounded-3xl border border-white/60 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="flex gap-1 mb-4 relative z-10">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className={j < t.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300 dark:text-slate-600"} />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed italic relative z-10">"{t.text}"</p>
                <div className="relative z-10">
                  <p className="font-bold text-slate-900 dark:text-white text-base">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.relation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1A61F7] to-[#2563EB] py-20 animate-gradient bg-[length:200%_auto]">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-20 h-20 border border-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-[20%] right-[15%] w-16 h-16 border border-white/10 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">Give Your Child the Best Learning Experience</h2>
          <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-medium">Join thousands of parents who trust ScholarB for their children's education.</p>
          <Link to="/book-demo" className="inline-flex items-center gap-2 bg-white text-[#1A61F7] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1">
            Book a Free Demo <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
