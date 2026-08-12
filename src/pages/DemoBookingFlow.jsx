import { useState } from 'react';
import { CheckCircle, ChevronRight, ChevronLeft, Calendar, Clock, BookOpen, User, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoBookingFlow() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const stepsList = [
    { num: 1, title: 'Academic', icon: <BookOpen size={20} /> },
    { num: 2, title: 'Preferences', icon: <User size={20} /> },
    { num: 3, title: 'Availability', icon: <Calendar size={20} /> },
    { num: 4, title: 'Details', icon: <Clock size={20} /> },
    { num: 5, title: 'Verification', icon: <ShieldCheck size={20} /> }
  ];

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-20 transition-colors duration-300 relative overflow-hidden">
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-[#1A61F7]/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Book Your Free Demo</h1>
          <p className="text-slate-600 dark:text-slate-400 dark:text-slate-400 ">Tell us what you need, and we'll match you with the perfect tutor.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm z-0 rounded-full"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-0 rounded-full transition-all duration-500 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
            
            {stepsList.map((s, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  step > s.num ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg' : step === s.num ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white ring-4 ring-blue-100 dark:ring-blue-900/50 shadow-lg' : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-400'
                }`}>
                  {step > s.num ? <CheckCircle size={20} /> : s.num}
                </div>
                <span className={`mt-2 text-xs font-medium hidden sm:block ${step >= s.num ? 'text-blue-600' : 'text-slate-400'}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-slate-700 shadow-2xl p-12 text-center"
          >
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4">Booking Confirmed!</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md mx-auto">
              Your free demo session has been successfully scheduled. We have sent the meeting link and details to your email and WhatsApp.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Return to Home
            </button>
          </motion.div>
        ) : (
          /* Form Container */
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="h-2 bg-gradient-to-r from-blue-500 via-[#1A61F7] to-purple-500 w-full absolute top-0 left-0"></div>
          
          <div className="p-5 sm:p-10 min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                
                {/* STEP 1: Academic Profile */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Academic Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Country</label>
                        <select className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none bg-white dark:bg-slate-900 ">
                          <option>Select Country</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>India</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">PIN Code</label>
                        <input type="text" placeholder="Enter PIN/Zip" className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Board of Education</label>
                        <select className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none bg-white dark:bg-slate-900 ">
                          <option>Select Board</option>
                          <option>CBSE</option>
                          <option>ICSE</option>
                          <option>IGCSE</option>
                          <option>State Board</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Grade / Class</label>
                        <select className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none bg-white dark:bg-slate-900 ">
                          <option>Select Grade</option>
                          <option>Grade 9</option>
                          <option>Grade 10</option>
                          <option>Grade 11</option>
                          <option>Grade 12</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Subject(s)</label>
                        <input type="text" placeholder="e.g. Mathematics, Physics" className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Topics / Chapters</label>
                        <input type="text" placeholder="e.g. Algebra, Kinematics" className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none" />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Learning Preferences */}
                {step === 2 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Learning Preferences</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-3">Preferred Class Mode</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <label className="border-2 border-primary-600 bg-primary-50 text-primary-700 p-4 rounded-xl cursor-pointer flex items-center justify-center gap-2 font-medium">
                            <input type="radio" name="mode" className="hidden" defaultChecked />
                            <div className="w-4 h-4 rounded-full border-4 border-primary-600 bg-white dark:bg-slate-900 "></div>
                            1-on-1 Private
                          </label>
                          <label className="border-2 border-slate-200 dark:border-slate-800  text-slate-600 dark:text-slate-400 dark:text-slate-400  p-4 rounded-xl cursor-pointer flex items-center justify-center gap-2 font-medium hover:border-slate-300 dark:border-slate-700 ">
                            <input type="radio" name="mode" className="hidden" />
                            <div className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-700  bg-white dark:bg-slate-900 "></div>
                            Small Group
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Preferred Language</label>
                        <select className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none bg-white dark:bg-slate-900 ">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>Hindi</option>
                          <option>French</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Learning Style</label>
                        <select className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none bg-white dark:bg-slate-900 ">
                          <option>Visual (Images/Diagrams)</option>
                          <option>Auditory (Listening/Speaking)</option>
                          <option>Reading/Writing</option>
                          <option>Kinesthetic (Hands-on)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Learning Preferences</label>
                        <textarea rows="3" placeholder="Tell us more about your preferences..." className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Schedule Details */}
                {step === 3 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Schedule Details</h2>
                    <p className="text-slate-600 dark:text-slate-400 dark:text-slate-400  mb-6">When would you like to schedule your free trial class?</p>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-3">Select Date</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['Today', 'Tomorrow', 'Oct 14', 'Oct 15'].map((d, i) => (
                          <div key={i} className={`p-3 text-center rounded-xl border-2 cursor-pointer transition-colors ${i === 1 ? 'border-primary-600 bg-primary-50 text-primary-700 font-bold' : 'border-slate-200 dark:border-slate-800  hover:border-slate-300 dark:border-slate-700 '}`}>
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-3">Preferred Time Range</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 8 PM)', 'Night (8 PM - 10 PM)'].map((t, i) => (
                          <div key={i} className={`p-4 text-center rounded-xl border-2 cursor-pointer transition-colors ${i === 2 ? 'border-primary-600 bg-primary-50 text-primary-700 font-bold' : 'border-slate-200 dark:border-slate-800  hover:border-slate-300 dark:border-slate-700 '}`}>
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Your Details */}
                {step === 4 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Your Details</h2>
                    
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Student's Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Parent/Guardian Name (Optional)</label>
                        <input type="text" placeholder="Jane Doe" className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">Email Address</label>
                          <input type="email" placeholder="john@example.com" className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 dark:text-slate-300  mb-2">WhatsApp Number</label>
                          <input type="tel" placeholder="+1 (555) 000-0000" className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700  focus:ring-2 focus:ring-primary-500 outline-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Verification */}
                {step === 5 && (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck size={40} className="text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white  mb-2">Verify Your Account</h2>
                    <p className="text-slate-600 dark:text-slate-400 dark:text-slate-400  mb-8 max-w-md mx-auto">
                      We've sent a 4-digit verification code to your WhatsApp and Email. Please enter it below.
                    </p>

                    <div className="flex justify-center gap-4 mb-8">
                      {[1, 2, 3, 4].map(i => (
                        <input 
                          key={i}
                          type="text" 
                          maxLength="1"
                          className="w-14 h-14 text-center text-2xl font-bold rounded-xl border-2 border-slate-300 dark:border-slate-700  focus:border-primary-500 focus:ring-2 focus:ring-primary-500 outline-none"
                        />
                      ))}
                    </div>

                    <div className="text-sm text-slate-600 dark:text-slate-400 dark:text-slate-400 ">
                      Didn't receive the code? <button className="text-primary-600 font-semibold hover:underline">Resend</button>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Form Navigation */}
          <div className="p-5 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-between items-center">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-600 dark:text-slate-400 dark:text-slate-400  hover:bg-slate-200 transition-colors"
              >
                <ChevronLeft size={20} /> Back
              </button>
            ) : (
              <div></div>
            )}

            {step < totalSteps ? (
              <button 
                onClick={nextStep}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm"
              >
                Next Step <ChevronRight size={20} />
              </button>
            ) : (
              <button 
                onClick={() => setIsSubmitted(true)}
                className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-sm"
              >
                Confirm Booking <CheckCircle size={20} />
              </button>
            )}
          </div>
        </div>
        )}

      </div>
    </div>
  );
}
