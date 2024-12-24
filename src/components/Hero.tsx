import React from 'react';
import { Eye } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Eye className="w-16 h-16 mx-auto text-blue-500 mb-8" />
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Object Detection</span>
            <span className="block text-blue-500">using YOLOv8</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Advanced real-time object detection powered by YOLOv8. Upload videos or use your webcam for instant analysis.
          </p>
        </div>
      </div>
    </div>
  );
}