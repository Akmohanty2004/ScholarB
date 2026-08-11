import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import TutorListing from './pages/TutorListing';
import TutorProfile from './pages/TutorProfile';
import DemoBookingFlow from './pages/DemoBookingFlow';
import ForStudents from './pages/ForStudents';
import ForParents from './pages/ForParents';
import ForTeachers from './pages/ForTeachers';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-purple-50 dark:bg-none dark:bg-[#0B1120] transition-colors duration-500">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tutors" element={<TutorListing />} />
            <Route path="/tutors/:id" element={<TutorProfile />} />
            <Route path="/book-demo" element={<DemoBookingFlow />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="/for-parents" element={<ForParents />} />
            <Route path="/for-teachers" element={<ForTeachers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
