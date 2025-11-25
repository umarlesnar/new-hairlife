import { Users, Award, TrendingUp } from 'lucide-react';

export default function Welcome() {
  const stats = [
    { icon: TrendingUp, value: "20+", label: "Years of Experience" },
    { icon: Users, value: "24K+", label: "Happy Clients" },
    { icon: Award, value: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#B78F59] font-semibold mb-2">WELCOME TO</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#202A5B] mb-6">
              New Hair Life<br />Hair Fixing
            </h2>
            <div className="w-20 h-1 bg-[#B78F59] mb-6"></div>
            <p className="text-neutral-700 text-lg leading-relaxed mb-6">
              New Hair Life offers innovative methods to overcome baldness through a completely
              natural method using Canadian technology. With the help of this technology, natural-looking
              hair is weaved meticulously onto an artificially created polymer skin base.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Such patches made of simulated hair look absolutely natural, fit you snugly, and match
              your countenance perfectly. Experience the transformation that thousands have trusted.
            </p>
            <button className="mt-8 bg-[#202A5B] text-white px-8 py-3 rounded-md hover:bg-[#B78F59] transition-colors font-medium">
              Discover More
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hair fixing result"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold text-[#B78F59]">100%</p>
              <p className="text-[#939598] font-medium">Natural Look</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B78F59]/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-[#202A5B]" />
              </div>
              <p className="text-5xl font-bold text-[#202A5B] mb-2">{stat.value}</p>
              <p className="text-[#939598] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
