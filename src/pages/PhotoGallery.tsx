export default function PhotoGallery() {
  // Using the specific images available in your public/gallery folder
  const images = [
    'img1.png', 'img2.png', 'img3.png', 'img4.png', 
    'img5.png', 'img6.png', 'img7.png', 'img8.png', 
    'img9.png', 'img11.jpeg', 'img12.jpeg', 'img13.jpg', 
    'img14.jpg', 'img15.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Header similar to screenshot */}
      <div className="bg-[#202A5B] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Photo Gallery</h1>
          <p className="text-sm text-gray-300">Home / Photo Gallery</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-gray-100 aspect-[4/3] hover:shadow-lg transition-all duration-300"
            >
              <img
                src={`/gallery/${image}`}
                alt={`Transformation result ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#202A5B]/0 group-hover:bg-[#202A5B]/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}