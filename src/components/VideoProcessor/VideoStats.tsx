import React from 'react';
import { Activity, Maximize, Eye } from 'lucide-react';

interface VideoStatsProps {
  fps?: number;
  frameShape?: [number, number];
  detectionCount: number;
}

export function VideoStats({ fps, frameShape, detectionCount }: VideoStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center space-x-2 text-blue-400 mb-2">
          <Activity className="w-5 h-5" />
          <span>FPS</span>
        </div>
        <p className="text-2xl font-bold text-white">{fps || 'N/A'}</p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center space-x-2 text-green-400 mb-2">
          <Maximize className="w-5 h-5" />
          <span>Frame Shape</span>
        </div>
        <p className="text-2xl font-bold text-white">
          {frameShape ? `${frameShape[0]}x${frameShape[1]}` : 'N/A'}
        </p>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center space-x-2 text-purple-400 mb-2">
          <Eye className="w-5 h-5" />
          <span>Detections</span>
        </div>
        <p className="text-2xl font-bold text-white">{detectionCount}</p>
      </div>
    </div>
  );
}