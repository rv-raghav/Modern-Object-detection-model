import React from 'react';
import { Camera, Home, Video } from 'lucide-react';

export function Navigation() {
  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/video', label: 'Video', icon: Video },
    { href: '/webcam', label: 'Live Webcam', icon: Camera },
  ];

  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">Drishti IRIS</span>
          </div>
          <div className="flex space-x-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}