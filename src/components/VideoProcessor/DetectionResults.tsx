import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

interface Detection {
  type: 'person' | 'helmet' | 'fire-extinguisher';
  hasHelmet?: boolean;
  confidence: number;
}

interface DetectionResultsProps {
  detections: Detection[];
}

export function DetectionResults({ detections }: DetectionResultsProps) {
  const peopleCount = detections.filter(d => d.type === 'person').length;
  const helmetCount = detections.filter(d => d.type === 'person' && d.hasHelmet).length;
  const fireExtinguishers = detections.filter(d => d.type === 'fire-extinguisher').length;

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-4">
      <h3 className="text-xl font-semibold text-white mb-4">Detection Results</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-500" />
            <span className="text-white">People Detected</span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">{peopleCount}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-white">With Helmets</span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">{helmetCount}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <span className="text-white">Fire Extinguishers</span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">{fireExtinguishers}</p>
        </div>
      </div>
    </div>
  );
}