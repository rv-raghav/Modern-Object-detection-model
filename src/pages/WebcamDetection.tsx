import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Layout } from '../components/Layout';
import { Camera, Video } from 'lucide-react';
import { DetectionResults } from '../components/VideoProcessor/DetectionResults';

export function WebcamDetection() {
  const webcamRef = useRef<Webcam>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detections, setDetections] = useState([]);

  const startDetection = useCallback(() => {
    setIsDetecting(true);
    // In a real implementation, this would connect to your Python backend
    // and start processing the webcam feed
  }, []);

  const stopDetection = useCallback(() => {
    setIsDetecting(false);
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Live Webcam Detection</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <Webcam
              ref={webcamRef}
              className="w-full rounded-lg"
              screenshotFormat="image/jpeg"
            />
            
            <div className="flex justify-center space-x-4 mt-4">
              {!isDetecting ? (
                <button
                  onClick={startDetection}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Camera className="w-5 h-5" />
                  <span>Start Detection</span>
                </button>
              ) : (
                <button
                  onClick={stopDetection}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Video className="w-5 h-5" />
                  <span>Stop Detection</span>
                </button>
              )}
            </div>
          </div>
          
          <div>
            <DetectionResults detections={detections} />
          </div>
        </div>
      </div>
    </Layout>
  );
}