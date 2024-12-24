export interface Detection {
  type: 'person' | 'helmet' | 'fire-extinguisher';
  hasHelmet?: boolean;
  confidence: number;
  bbox?: [number, number, number, number];
}

export interface ProcessedVideo {
  processedVideoUrl: string;
  detections: Detection[];
  fps?: number;
  frameShape?: [number, number];
}