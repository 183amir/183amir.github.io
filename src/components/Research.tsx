import React from 'react';
import { Camera, Brain, Shield, Image } from 'lucide-react';

const researchAreas = [
  {
    icon: Camera,
    title: "Computer Vision",
    description: "Expertise in face recognition, 3D head tracking, and gaze estimation with state-of-the-art deep learning approaches."
  },
  {
    icon: Shield,
    title: "Biometric Security",
    description: "Specialized in presentation attack detection and developing robust biometric systems."
  },
  {
    icon: Image,
    title: "Generative AI",
    description: "Currently focused on generating and detecting AI-generated images, particularly those containing faces and text."
  },
  {
    icon: Brain,
    title: "Domain Adaptation",
    description: "Developing novel techniques for improving model performance across different domains and conditions."
  }
];

export default function Research() {
  return (
    <section id="research" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Areas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <area.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}