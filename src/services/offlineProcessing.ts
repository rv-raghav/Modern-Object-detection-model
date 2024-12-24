import { API_CONFIG } from './config';
import type { ProcessedVideo } from '../types/detection';

export async function processVideoOffline(file: File): Promise<ProcessedVideo> {
  // Create a local URL for the uploaded video
  const videoUrl = URL.createObjectURL(file);
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, API_CONFIG.MOCK_PROCESSING_DELAY));
  
  return {
    processedVideoUrl: videoUrl,
    detections: [
      { type: 'person', hasHelmet: true, confidence: 0.95 },
      { type: 'person', hasHelmet: false, confidence: 0.92 },
      { type: 'fire-extinguisher', confidence: 0.88 }
    ],
    fps: 30,
    frameShape: [1920, 1080]
  };
}

export function cleanupVideoUrl(url: string) {
  URL.revokeObjectURL(url);
}