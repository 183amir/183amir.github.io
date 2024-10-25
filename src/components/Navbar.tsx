import React from 'react';
import { Brain, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold text-xl">Amir Mohammadi</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#research" className="text-gray-700 hover:text-indigo-600">
              Research
            </a>
            <a
              href="#publications"
              className="text-gray-700 hover:text-indigo-600"
            >
              Publications
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/183amir"
              className="text-gray-500 hover:text-gray-700"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="http://www.linkedin.com/in/amirmohammadi"
              className="text-gray-500 hover:text-gray-700"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
