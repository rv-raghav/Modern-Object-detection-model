import React from 'react';
import { Loader2 } from 'lucide-react';

interface ProcessingStatusProps {
  status: 'idle' | 'processing' | 'complete' | 'error';
  message?: string;
}

export function ProcessingStatus({ status, message }: ProcessingStatusProps) {
  return (
    <div className="text-center py-4">
      {status === 'processing' && (
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
          <span className="text-gray-300">Processing video...</span>
        </div>
      )}
      {status === 'error' && (
        <div className="text-red-500">
          {message || 'An error occurred during processing'}
        </div>
      )}
      {status === 'complete' && (
        <div className="text-green-500">
          Processing complete!
        </div>
      )}
    </div>
  );
}