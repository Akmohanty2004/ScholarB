import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Users, Headphones, DollarSign, ChevronRight, Star, CheckCircle, Monitor, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ForTeachers() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const benefits = [
    { icon: <Calendar size={28} />, title: "Set Your Own Schedule", desc: "Teach when it suits you. Full flexibility to manage your availability and work-life balance.", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
    { icon: <Monitor size={28} />, title: "Powerful Teaching Tools", desc: "Interactive whiteboard, screen sharing, session recordings, and smart assessment tools.", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
    { icon: <Users size={28} />, title: "Reach More Students", desc: "Get connected with thousands of students actively looking for expert tutors like you.", color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
    { icon: <Headphones size={28} />, title: "Dedicated Support", desc: "Get resources, training, and 24/7 support to help you deliver the best learning experience.", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" }
  ];

  const earningTiers = [
    { level: "Starter", range: "$20 - $30/hr", features: ["Up to 10 students", "Basic teaching tools", "Community access", "Email support"], color: "border-slate-200 dark:border-slate-700" },
    { level: "Professional", range: "$30 - $50/hr", features: ["Up to 30 students", "Advanced tools & analytics", "Priority listing", "Featured profile badge", "Dedicated support"], popular: true, color: "border-[#1A61F7] dark:border-blue-500" },
    { level: "Expert", range: "$50 - $80/hr", features: ["Unlimited students", "Premium tools suite", "Top listing placement", "Personal account manager", "Revenue analytics"], color: "border-slate-200 dark:border-slate-700" }
  ];

  const testimonials = [
    { name: "Dr. Kavita Rao", subject: "Mathematics Teacher", rating: 5, text: "ScholarB gave me the freedom to teach on my terms. I've grown from 5 students to 40 in just 6 months!" },
    { name: "Rahul Verma", subject: "Physics & Chemistry Tutor", rating: 5, text: "The teaching tools are incredible. Interactive whiteboards and session recordings make my classes so much more effective." },
    { name: "Sarah Mitchell", subject: "English Language Tutor", rating: 5, text: "I love the flexibility. I teach from home, set my own rates, and the platform handles all the scheduling." }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <BookOpen size={16} /> For Teachers
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                Teach Your Way,<br/><span className="text-gradient">Grow Your Impact</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Reach thousands of students, use powerful teaching tools, set your own schedule, and earn on your terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo" className="btn-primary px-8 py-4 text-lg rounded-xl">
                  Apply as Tutor <ChevronRight size={20} />
                </Link>
                <Link to="/" className="btn-outline px-8 py-4 text-lg rounded-xl">
                  Learn More
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Why Teach on ScholarB</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Everything you need to succeed as a tutor</p>
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

      {/* Earning Potential */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Earning Potential</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Grow your income as you grow your expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {earningTiers.map((tier, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className={`relative p-6 rounded-2xl border-2 ${tier.color} bg-white dark:bg-slate-800 hover:shadow-xl transition-all ${tier.popular ? 'shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A61F7] text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{tier.level}</h3>
                  <p className="text-2xl font-extrabold text-[#1A61F7] dark:text-blue-400">{tier.range}</p>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/book-demo" className={`mt-6 w-full py-2.5 text-center rounded-xl text-sm font-semibold block transition-colors ${tier.popular ? 'btn-primary' : 'btn-outline'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">How to Get Started</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Apply", desc: "Fill out a simple application with your qualifications and experience.", icon: <Award size={28} /> },
              { step: "2", title: "Get Verified", desc: "Complete our verification process to become a trusted tutor.", icon: <CheckCircle size={28} /> },
              { step: "3", title: "Start Teaching", desc: "Set your schedule, connect with students, and start earning.", icon: <TrendingUp size={28} /> }
            ].map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A61F7] to-[#7C3AED] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-purple-200 dark:shadow-purple-900/30">
                  {s.icon}
                </div>
                <div className="absolute -top-2 left-1/2 ml-6 w-8 h-8 bg-[#1A61F7] text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-slate-950">{s.step}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">What Teachers Say</h2>
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
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.subject}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#7C3AED] to-[#1A61F7] py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Join Our Growing Community of Expert Tutors</h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">Start teaching today and make a real impact on students' lives.</p>
          <Link to="/book-demo" className="inline-flex items-center gap-2 bg-white text-[#7C3AED] px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg">
            Apply Now <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
