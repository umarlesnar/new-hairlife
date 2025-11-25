import { Shield, Scissors, Award, Wrench, HeartHandshake, Users, Sparkles, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "100% free from any side effects",
      description: "Completely safe and natural process"
    },
    {
      icon: Scissors,
      title: "No surgery or medication required",
      description: "Non-invasive hair fixing solution"
    },
    {
      icon: Award,
      title: "Unparalleled quality",
      description: "Premium materials and craftsmanship"
    },
    {
      icon: Sparkles,
      title: "World class Technical Perfection",
      description: "Advanced Canadian technology"
    },
    {
      icon: Wrench,
      title: "Best after-service",
      description: "Ongoing support and maintenance"
    },
    {
      icon: Users,
      title: "Service for both men and women",
      description: "Inclusive solutions for everyone"
    },
    {
      icon: HeartHandshake,
      title: "Non-invasive procedure",
      description: "Painless and comfortable process"
    },
    {
      icon: Globe,
      title: "Natural Canadian technology",
      description: "International quality standards"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#202A5B] to-[#202A5B]/80 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">WHY NEW HAIR LIFE?</h2>
          <div className="w-20 h-1 bg-[#B78F59] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            when you think about hair fixing <span className="text-[#B78F59] font-semibold">'GO FOR THE BEST IN THE WORLD'</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all hover:transform hover:scale-105 border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#B78F59]/20 rounded-lg mb-4">
                <feature.icon className="w-7 h-7 text-[#B78F59]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
