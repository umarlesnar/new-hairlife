export default function AboutUs() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">About Us</h1>
          <div className="w-20 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              New Hair Life is a pioneering non-surgical hair fixing solution provider, dedicated to helping individuals overcome hair loss with innovative Canadian technology.
            </p>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              With years of expertise and a commitment to excellence, we have transformed the lives of thousands of clients across Tamil Nadu.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Our mission is to provide natural-looking, comfortable, and long-lasting hair solutions that restore confidence and self-esteem.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-amber-700 font-bold text-lg">✓</span>
                <span className="text-neutral-600">Advanced Canadian technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700 font-bold text-lg">✓</span>
                <span className="text-neutral-600">Experienced professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700 font-bold text-lg">✓</span>
                <span className="text-neutral-600">Natural-looking results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700 font-bold text-lg">✓</span>
                <span className="text-neutral-600">Comprehensive after-care</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700 font-bold text-lg">✓</span>
                <span className="text-neutral-600">Multiple branches across Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
