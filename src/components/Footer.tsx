import React from 'react';
import { Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2 text-gray-300">
          <span>YOLOv8 Lecture Series</span>
          <a
            href="https://www.youtube.com/channel/UC--6PuiEdiQY8nasgNluSOA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center space-x-1"
          >
            <Youtube className="w-5 h-5" />
            <span>YouTube Channel</span>
          </a>
        </div>
      </div>
    </footer>
  );
}