import React from 'react';

interface Result {
  image: string;
  caption: string;
}

export function Results() {
  const results: Result[] = [
    {
      image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=800&q=80",
      caption: "YOLOv8 Results 1"
    },
    {
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      caption: "YOLOv8 Results 2"
    },
    {
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80",
      caption: "YOLOv8 Results 3"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Sample Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-800">
                <img
                  src={result.image}
                  alt={result.caption}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <p className="mt-2 text-sm text-center text-gray-300">{result.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}