import React from 'react';
import { Zap, Maximize2, Eye } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "FPS of Video",
      description: "FPS represents the Frame Rate. GPU processing delivers higher FPS compared to CPU processing."
    },
    {
      icon: Maximize2,
      title: "Shape of Current Frame",
      description: "The resolution of the current frame is calculated in real-time."
    },
    {
      icon: Eye,
      title: "Detections in Current Frame",
      description: "Total number of objects detected in each frame is calculated and displayed."
    }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative p-6 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <div className="absolute -top-4 left-4">
                  <span className="inline-flex p-3 bg-blue-500 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}