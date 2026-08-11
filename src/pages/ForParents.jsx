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
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
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
                <Link to="/book-demo" className="btn-primary px-8 py-4 text-lg rounded-xl">
                  Book Free Demo <ChevronRight size={20} />
                </Link>
                <Link to="/tutors" className="btn-outline px-8 py-4 text-lg rounded-xl">
                  Find a Tutor
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Why Parents Choose ScholarB</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Peace of mind for your child's education</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 rounded-xl ${b.color} flex items-center justify-center mb-4`}>{b.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{b.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Parent Dashboard Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Parent Dashboard</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Everything you need to stay informed</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dashboardFeatures.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-[#1A61F7] dark:text-blue-400 flex items-center justify-center flex-shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Safety & Trust</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Your child's safety is our top priority</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <ShieldCheck size={24} />, title: "Verified Tutors", desc: "All tutors go through strict verification and background checks." },
              { icon: <Eye size={24} />, title: "Session Recordings", desc: "All sessions can be recorded for parent review and transparency." },
              { icon: <Lock size={24} />, title: "Secure Platform", desc: "End-to-end encryption and data protection for all users." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">What Parents Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className={j < t.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300 dark:text-slate-600"} />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.relation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1A61F7] to-[#2563EB] py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Give Your Child the Best Learning Experience</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join thousands of parents who trust ScholarB for their children's education.</p>
          <Link to="/book-demo" className="inline-flex items-center gap-2 bg-white text-[#1A61F7] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
            Book a Free Demo <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
