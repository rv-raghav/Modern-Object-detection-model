import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface VideoUploadProps {
  onVideoUpload: (file: File) => void;
}

export function VideoUpload({ onVideoUpload }: VideoUploadProps) {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      onVideoUpload(file);
    }
  }, [onVideoUpload]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onVideoUpload(file);
    }
  }, [onVideoUpload]);

  return (
    <div
      className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
      <label className="block">
        <span className="sr-only">Choose video file</span>
        <input
          type="file"
          className="block w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          accept="video/*"
          onChange={handleChange}
        />
      </label>
      <p className="text-sm text-gray-400 mt-2">Drag and drop or click to upload video</p>
    </div>
  );
}