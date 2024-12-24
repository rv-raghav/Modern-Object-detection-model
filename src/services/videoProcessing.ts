import { API_CONFIG } from './config';
import { processVideoOffline } from './offlineProcessing';
import { processVideoOnline } from './onlineProcessing';
import type { ProcessedVideo } from '../types/detection';

export async function processVideo(file: File): Promise<ProcessedVideo> {
  try {
    if (API_CONFIG.OFFLINE_MODE) {
      return await processVideoOffline(file);
    }
    return await processVideoOnline(file);
  } catch (error) {
    console.error('Video processing error:', error);
    // Fallback to offline mode if online processing fails
    return await processVideoOffline(file);
  }
}