import React from 'react';
import { Layout } from '../components/Layout';
import { VideoUpload } from '../components/VideoProcessor/VideoUpload';
import { ProcessingStatus } from '../components/VideoProcessor/ProcessingStatus';
import { DetectionResults } from '../components/VideoProcessor/DetectionResults';
import { VideoStats } from '../components/VideoProcessor/VideoStats';
import { OfflineIndicator } from '../components/VideoProcessor/OfflineIndicator';
import { useVideoProcessing } from '../hooks/useVideoProcessing';
import { AlertCircle } from 'lucide-react';

export function VideoDetection() {
  const {
    status,
    error,
    videoData,
    handleVideoUpload,
    isOfflineMode
  } = useVideoProcessing();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Video Object Detection</h1>
        
        {isOfflineMode && <OfflineIndicator />}
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {videoData && (
          <VideoStats 
            fps={videoData.fps}
            frameShape={videoData.frameShape}
            detectionCount={videoData.detections.length}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <VideoUpload onVideoUpload={handleVideoUpload} />
            <ProcessingStatus status={status} />
          </div>
          
          <div>
            {videoData?.processedVideoUrl && (
              <video
                src={videoData.processedVideoUrl}
                controls
                className="w-full rounded-lg"
                style={{ backgroundColor: '#1f2937' }}
              />
            )}
          </div>
        </div>

        {status === 'complete' && videoData && (
          <DetectionResults detections={videoData.detections} />
        )}
      </div>
    </Layout>
  );
}