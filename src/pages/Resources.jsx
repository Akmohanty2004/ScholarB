import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, PenTool, Compass, Users, ChevronDown, ChevronUp, ChevronRight, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Resources() {
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState('');

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const categories = [
    { icon: <BookOpen size={28} />, title: "Study Guides", desc: "Comprehensive notes and summaries for all subjects and boards.", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
    { icon: <FileText size={28} />, title: "Practice Tests", desc: "Mock exams and sample papers to test your knowledge.", color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
    { icon: <Video size={28} />, title: "Video Tutorials", desc: "Recorded lessons and concept explanations by expert tutors.", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
    { icon: <PenTool size={28} />, title: "Blog Articles", desc: "Tips, strategies, and advice for better learning outcomes.", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" },
    { icon: <Compass size={28} />, title: "Career Guidance", desc: "Future planning, course selection, and career path guidance.", color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400" },
    { icon: <Users size={28} />, title: "Community Forum", desc: "Connect with peers, ask questions, and share knowledge.", color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400" }
  ];

  const articles = [
    { category: "Study Tips", title: "10 Proven Study Techniques for Better Results", desc: "Discover scientifically-backed methods to improve your study habits and retain information better.", readTime: "5 min read" },
    { category: "Exam Prep", title: "How to Prepare for Board Exams: A Complete Guide", desc: "Step-by-step guide to ace your board exams with effective time management and revision strategies.", readTime: "8 min read" },
    { category: "Career", title: "Choosing the Right Stream After Grade 10", desc: "A comprehensive guide to help you decide between Science, Commerce, and Arts streams.", readTime: "6 min read" },
    { category: "Learning", title: "Benefits of 1-to-1 Online Tutoring", desc: "Why personalized online tutoring outperforms traditional classroom learning.", readTime: "4 min read" }
  ];

  const faqs = [
    { q: "How does ScholarB work?", a: "ScholarB connects students with verified expert tutors. Simply browse tutors, book a free demo class, and start learning. You can choose between 1-to-1 or group classes, select your preferred schedule, and track your progress through our dashboard." },
    { q: "How are tutors verified?", a: "All tutors go through a rigorous verification process including identity verification, qualification checks, background screening, and a demo teaching session evaluated by our team. Only the top candidates are accepted." },
    { q: "What is the pricing?", a: "Pricing varies by tutor experience and subject. Tutors set their own rates, typically ranging from $20-$80/hr. You can filter tutors by price range, and your first demo class is always free." },
    { q: "Can I try before subscribing?", a: "Absolutely! Every student gets a free demo class with their chosen tutor. This helps you evaluate the teaching style and decide if it's the right fit before committing." },
    { q: "Which boards and exams do you support?", a: "We support CBSE, ICSE, IGCSE, GCSE, IB, A Levels, AP, State Boards, and competitive exams like NEET, JEE, IELTS, NTSE, and Olympiads." },
    { q: "How do I track my child's progress?", a: "Parents get access to a dedicated dashboard with detailed progress reports, session recordings, attendance tracking, and direct communication with the tutor." }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <BookOpen size={16} /> Resources
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                Learning Resources &<br/><span className="text-gradient">Study Materials</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Free study guides, practice tests, video tutorials, and more to help you excel in your learning journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Explore Resources</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Everything you need to succeed in your studies</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-14 h-14 rounded-xl ${c.color} flex items-center justify-center mb-4`}>{c.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#1A61F7] dark:group-hover:text-blue-400 transition-colors">{c.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                <div className="mt-4 text-[#1A61F7] dark:text-blue-400 text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Featured Articles</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Latest tips and strategies for academic success</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {articles.map((a, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-[#1A61F7] dark:text-blue-400 text-xs font-bold rounded-full">{a.category}</span>
                  <span className="text-xs text-slate-400">{a.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#1A61F7] dark:group-hover:text-blue-400 transition-colors">{a.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{a.desc}</p>
                <span className="text-[#1A61F7] dark:text-blue-400 text-sm font-semibold flex items-center gap-1">
                  Read More <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Got questions? We've got answers</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} className="text-[#1A61F7] flex-shrink-0" /> : <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white dark:bg-slate-950 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[#1A61F7] to-[#2563EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Get Study Tips & Updates</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Subscribe to our newsletter for weekly study tips, exam strategies, and learning resources.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl text-slate-900 outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-[#1A61F7] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
