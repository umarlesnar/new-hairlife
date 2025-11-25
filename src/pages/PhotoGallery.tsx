export default function PhotoGallery() {
  const images = [
    'img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png',
    'img7.png', 'img8.jpeg', 'img9.jpeg', 'img10.jpeg', 'img11.jpeg', 'img12.jpeg',
    'img13.jpeg', 'img14.jpeg'
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">Photo Gallery</h1>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">Explore our transformation gallery and see the results</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img
                src={`/gallery/${image}`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
