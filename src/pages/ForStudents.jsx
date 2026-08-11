import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Monitor, BarChart3, Target, Clock, CheckCircle, Star, ChevronRight, Laptop, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ForStudents() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const benefits = [
    { icon: <Clock size={28} />, title: "Learn Anytime, Anywhere", desc: "Flexible schedules and online classes that fit your routine. Study from the comfort of your home.", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
    { icon: <CheckCircle size={28} />, title: "Expert Verified Tutors", desc: "Every tutor is verified, experienced, and background-checked for quality teaching.", color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
    { icon: <Monitor size={28} />, title: "1-to-1 & Group Classes", desc: "Choose personalized 1-to-1 sessions or interactive group classes based on your preference.", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
    { icon: <Globe size={28} />, title: "All Subjects & Boards", desc: "CBSE, ICSE, IGCSE, IB, A Levels, State Boards and more — we cover everything.", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" },
    { icon: <BarChart3 size={28} />, title: "Track Your Progress", desc: "Get detailed performance analytics, progress reports, and improvement insights.", color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400" },
    { icon: <Target size={28} />, title: "Practice & Improve", desc: "Practice tests, doubt solving, and targeted exercises to strengthen weak areas.", color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400" }
  ];

  const testimonials = [
    { name: "Priya Sharma", grade: "Grade 12, CBSE", rating: 5, text: "ScholarB helped me improve my Math score from 72 to 95! My tutor explains concepts so clearly and makes learning fun." },
    { name: "Arjun Patel", grade: "Grade 10, ICSE", rating: 5, text: "The 1-to-1 sessions are amazing. I can ask questions freely and my tutor adjusts the pace according to my understanding." },
    { name: "Sara Khan", grade: "A Levels, IGCSE", rating: 4, text: "Flexible scheduling is a lifesaver. I balance my sports practice and studies easily with ScholarB tutors." }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-[#1A61F7] dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <GraduationCap size={16} /> For Students
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                Personalized Learning<br/>for <span className="text-gradient">Every Student</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect with expert tutors who understand your learning style. Get personalized attention, flexible scheduling, and real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tutors" className="btn-primary px-8 py-4 text-lg rounded-xl">
                  Find a Tutor <ChevronRight size={20} />
                </Link>
                <Link to="/book-demo" className="btn-outline px-8 py-4 text-lg rounded-xl">
                  Book Free Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Why Students Love ScholarB</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Everything you need to excel in your studies</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* How It Works */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">How It Works</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Get started in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Choose Your Subject", desc: "Select what you want to learn and your preferred board or exam.", icon: <BookOpen size={28} /> },
              { step: "2", title: "Pick the Perfect Tutor", desc: "Browse verified tutors, check reviews, and find the right match.", icon: <Users size={28} /> },
              { step: "3", title: "Start Learning", desc: "Book a free demo, then begin your personalized learning journey.", icon: <Laptop size={28} /> }
            ].map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A61F7] to-[#2563EB] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-200 dark:shadow-blue-900/30">
                  {s.icon}
                </div>
                <div className="absolute -top-2 left-1/2 ml-6 w-8 h-8 bg-[#1A61F7] text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-slate-900">{s.step}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">What Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className={j < t.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300 dark:text-slate-600"} />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1A61F7] to-[#2563EB] py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start Your Learning Journey Today</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join thousands of students who are already achieving their academic goals with ScholarB.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo" className="inline-flex items-center justify-center gap-2 bg-white text-[#1A61F7] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Book a Free Demo <ChevronRight size={20} />
            </Link>
            <Link to="/tutors" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Browse Tutors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
