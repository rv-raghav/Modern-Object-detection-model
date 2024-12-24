import React from 'react';
import { WifiOff } from 'lucide-react';

export function OfflineIndicator() {
  return (
    <div className="bg-yellow-500/10 border border-yellow-500 rounded-lg p-4 mb-6 flex items-center space-x-2">
      <WifiOff className="w-5 h-5 text-yellow-500" />
      <p className="text-yellow-500">
        Running in offline mode. Some features may be limited.
      </p>
    </div>
  );
}