import React from 'react';
import { FileText, BookOpen, Award } from 'lucide-react';

const publications = [
  {
    title:
      'Prepended domain transformer: Heterogeneous face recognition without bells and whistles',
    authors: 'George, A., Mohammadi, A., Marcel, S.',
    journal: 'IEEE Transactions on Information Forensics and Security',
    year: 2022,
    type: 'journal',
    highlight: true,
    link: '#',
  },
  {
    title:
      'Deeply vulnerable: a study of the robustness of face recognition to presentation attacks',
    authors: 'Mohammadi, A., Bhattacharjee, S., Marcel, S.',
    journal: 'IET Biometrics',
    year: 2018,
    type: 'journal',
    highlight: true,
    link: '#',
  },
  {
    title:
      'Eigenvoice speaker adaptation with minimal data for statistical speech synthesis systems using a MAP approach and nearest-neighbors',
    authors: 'Mohammadi, A., Sarfjoo, S.S., Demiroglu, C.',
    journal: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing',
    year: 2014,
    type: 'journal',
    highlight: true,
    link: '#',
  },
  {
    title:
      'Domain Adaptation For Generalization Of Face Presentation Attack Detection In Mobile Settings With Minimal Information',
    authors: 'Mohammadi, A., Bhattacharjee, S., Marcel, S.',
    conference: 'ICASSP',
    year: 2020,
    type: 'conference',
    link: '#',
  },
  {
    title:
      'Trustworthy Face Recognition: Improving Generalization of Deep Face Presentation Attack Detection',
    authors: 'Mohammadi, A.',
    type: 'thesis',
    institution: 'École polytechnique fédérale de Lausanne',
    year: 2020,
    highlight: true,
    link: '#',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Selected Publications
        </h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg ${
                pub.highlight
                  ? 'border-l-4 border-indigo-500 shadow-md'
                  : 'shadow-sm'
              } hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start space-x-4">
                {pub.type === 'journal' ? (
                  <BookOpen className="h-6 w-6 text-indigo-600 mt-1" />
                ) : pub.type === 'thesis' ? (
                  <Award className="h-6 w-6 text-indigo-600 mt-1" />
                ) : (
                  <FileText className="h-6 w-6 text-indigo-600 mt-1" />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{pub.authors}</p>
                  <p className="text-gray-500 mt-1">
                    {pub.journal || pub.conference || pub.institution} •{' '}
                    {pub.year}
                  </p>
                  <a
                    href={pub.link}
                    className="text-indigo-600 hover:text-indigo-700 mt-2 inline-block"
                  >
                    Read paper →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://scholar.google.com/citations?user=lv3UX84AAAAJ"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            View all publications on Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
}
