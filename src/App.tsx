import React from 'react';
import Navbar from './components/Navbar';
import Research from './components/Research';
import Publications from './components/Publications';
import { Mail, MapPin, Phone, Globe, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Amir Mohammadi
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">
                Research Associate
                <span className="block text-indigo-600 mt-1">Idiap Research Institute</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Expert in computer vision, biometrics, and deep learning with a focus on face recognition,
                presentation attack detection, and generative AI. Currently working on generating and 
                detecting AI-generated images at Idiap Research Institute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Contact Me
                </a>
                <a href="#publications" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  View Publications
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Research />
      <Publications />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">amir.mohammadi@bluewin.ch</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">+41 77 951 6981</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">Martigny, Switzerland</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">Swiss C permit</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                <a href="https://scholar.google.com/citations?user=lv3UX84AAAAJ" 
                   className="text-indigo-600 hover:text-indigo-700">
                  Google Scholar Profile
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                I'm always interested in collaborating on challenging computer vision and machine learning projects. 
                Feel free to reach out to discuss potential opportunities or research collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;