import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, CheckCircle, MapPin, Globe, Clock, Users, Video, Calendar as CalendarIcon, ChevronRight } from 'lucide-react';

export default function TutorProfile() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const dates = [
    { day: 'Mon', date: '12 Oct' },
    { day: 'Tue', date: '13 Oct' },
    { day: 'Wed', date: '14 Oct' },
    { day: 'Thu', date: '15 Oct' }
  ];

  const slots = ['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'];

  return (
    <div className="bg-transparent min-h-screen pb-20 pt-24 transition-colors duration-300 relative">
      
      {/* Social Media Style Cover Photo Banner */}
      <div className="absolute top-0 left-0 w-full h-64 md:h-80 lg:h-96 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 dark:bg-slate-900/50 z-10 backdrop-blur-sm"></div>
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop" alt="Cover" className="w-full h-full object-cover scale-105 opacity-90 dark:opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50/90 dark:from-[#0B1120] via-slate-50/50 dark:via-[#0B1120]/50 to-transparent z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight size={14} />
          <Link to="/tutors" className="hover:text-primary-600">Tutors</Link>
          <ChevronRight size={14} />
          <span className="text-slate-800 dark:text-slate-200 font-medium">Dr. Sarah Jenkins</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-slate-700 p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-32 h-32 flex-shrink-0 rounded-2xl relative shadow-inner border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Dr. Sarah Jenkins" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                        Dr. Sarah Jenkins
                        <CheckCircle size={22} className="text-blue-500" />
                      </h1>
                      <p className="text-xl text-primary-600 font-medium mb-4">Mathematics & Physics Expert</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-950 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-slate-900 dark:text-white font-bold text-lg">
                        <Star size={16} className="fill-yellow-500 text-yellow-500" /> 4.9
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">124 Reviews</div>
                    </div>
                    <div className="text-center border-l border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-slate-900 dark:text-white font-bold text-lg">
                        <Users size={16} className="text-primary-500" /> 500+
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Students Taught</div>
                    </div>
                    <div className="text-center border-l border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-slate-900 dark:text-white font-bold text-lg">
                        <Video size={16} className="text-secondary-500" /> 850
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Classes</div>
                    </div>
                    <div className="text-center border-l border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-center gap-1 text-slate-900 dark:text-white font-bold text-lg">
                        <Clock size={16} className="text-green-500" /> 8 Yrs
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-slate-700 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">About the Tutor</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Hello! I am Dr. Sarah Jenkins, an enthusiastic and dedicated educator with over 8 years of experience teaching Mathematics and Physics to high school and college students. I hold a Ph.D. in Physics from Stanford University.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                My teaching philosophy revolves around making complex concepts intuitive. I believe every student has the potential to excel if guided with the right methodology. I use real-world examples, interactive tools, and a patient approach to ensure my students not only score well but truly understand the subject.
              </p>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Subjects Taught</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Advanced Mathematics', 'Physics', 'Calculus', 'Algebra', 'AP Physics'].map((sub, i) => (
                  <span key={i} className="px-4 py-2 bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400 rounded-lg text-sm font-medium border border-primary-100 dark:border-primary-900/30">
                    {sub}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 mt-8">Qualifications</h3>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-2 mb-8">
                <li>Ph.D. in Physics - Stanford University (2018)</li>
                <li>M.Sc. in Applied Mathematics - MIT (2014)</li>
                <li>B.Sc. in Mathematics and Physics - UC Berkeley (2012)</li>
                <li>Certified Online Educator - Global Teaching Council</li>
              </ul>
            </div>

            {/* Gallery Section */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="aspect-[4/3] rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + item}?q=80&w=400&auto=format&fit=crop`} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400/50 z-0">
                      <Video size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Student Reviews</h2>
                <div className="flex items-center gap-2">
                  <Star size={24} className="fill-yellow-500 text-yellow-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">4.9</span>
                  <span className="text-slate-500 dark:text-slate-400">(124 reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?img=${i + 12}`} alt="Student" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white">Alex M.</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Grade 11 Student</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-yellow-500 text-yellow-500" />)}
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      "Dr. Jenkins is an amazing tutor! She completely changed my perspective on Physics. Her explanations are crystal clear, and she's extremely patient. Highly recommend!"
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Booking Widget */}
          <div className="lg:w-1/3">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-slate-700 p-6 shadow-2xl sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">$45<span className="text-lg text-slate-500 dark:text-slate-400 font-normal">/hour</span></div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wider">1. Select Class Type</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-2.5 border-2 border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-xl font-medium">1-on-1 Class</button>
                  <button className="py-2.5 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-xl font-medium hover:border-slate-300 dark:hover:border-slate-600">Group Class</button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wider flex items-center justify-between">
                  2. Choose a Date
                  <CalendarIcon size={16} className="text-slate-400" />
                </h3>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                  {dates.map((d, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedDate(i)}
                      className={`flex-shrink-0 w-16 py-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                        selectedDate === i 
                          ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400' 
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <span className="text-xs font-semibold mb-1">{d.day}</span>
                      <span className="text-lg font-bold">{d.date.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wider">3. Available Slots</h3>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((slot, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedSlot(i)}
                      className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedSlot === i 
                          ? 'border-primary-600 bg-primary-600 text-white' 
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <Link to="/book-demo" className="block w-full bg-primary-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book Free Demo
              </Link>
              
              <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                No credit card required for the trial class.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
