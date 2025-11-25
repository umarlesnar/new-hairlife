export default function VideoGallery() {
  const videos = [
    { id: 1, title: 'Transformation Video 1' },
    { id: 2, title: 'Transformation Video 2' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">Video Gallery</h1>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">Watch our transformation videos and client testimonials</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <video
                controls
                className="w-full h-96 bg-black"
                poster="/video/thumbnail.jpg"
              >
                <source src={`/video/video${video.id}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-neutral-900">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
