import { useState, useEffect } from 'react';
import { processVideo } from '../services/videoProcessing';
import { cleanupVideoUrl } from '../services/offlineProcessing';
import type { ProcessedVideo } from '../types/detection';
import { API_CONFIG } from '../services/config';

export function useVideoProcessing() {
  const [status, setStatus] = useState<'idle' | 'processing' | 'complete' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<ProcessedVideo | null>(null);
  const [isOfflineMode, setIsOfflineMode] = useState(API_CONFIG.OFFLINE_MODE);

  useEffect(() => {
    return () => {
      // Cleanup video URL when component unmounts
      if (videoData?.processedVideoUrl) {
        cleanupVideoUrl(videoData.processedVideoUrl);
      }
    };
  }, [videoData]);

  const handleVideoUpload = async (file: File) => {
    try {
      setStatus('processing');
      setError(null);
      
      const result = await processVideo(file);
      setVideoData(result);
      setStatus('complete');
      
      if (API_CONFIG.OFFLINE_MODE) {
        setIsOfflineMode(true);
      }
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setIsOfflineMode(true);
    }
  };

  return {
    status,
    error,
    videoData,
    handleVideoUpload,
    isOfflineMode
  };
}