import { Play, X } from 'lucide-react';
import { useState } from 'react';

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    { id: 1, src: '/video/video1.mp4', title: 'Hair Fixing Transformation' },
    { id: 2, src: '/video/video2.mp4', title: 'Client Testimonial' },
    { id: 3, src: '/video/video3.mp4', title: 'Expert Consultation' }, 
    { id: 4, src: '/video/video4.mp4', title: 'Natural Look Results' }, 
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-[#202A5B] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Video Gallery</h1>
          <p className="text-sm text-gray-300">Home / Video Gallery</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div 
                className="relative aspect-square overflow-hidden bg-black shadow-lg rounded-xl"
                onClick={() => setSelectedVideo(video.src)}
              >
                {/* Since we don't have separate thumbnail images, we use the video itself as a thumbnail (muted, paused) */}
                <video 
                  src={video.src}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                  preload="metadata"
                />
                
                {/* Overlay Content similar to screenshot */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-4 h-4 text-[#E31E24] fill-[#E31E24]" />
                    </div>
                    <span className="text-white font-medium text-sm tracking-wide">Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-[#E31E24] transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}