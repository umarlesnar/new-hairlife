import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is non-surgical hair fixing?',
      answer: 'Non-surgical hair fixing is an innovative method using Canadian technology to provide natural-looking hair solutions without any surgical procedures. It is a safe, painless, and effective way to restore your hair.'
    },
    {
      question: 'How long does the hair fixing last?',
      answer: 'With proper care and maintenance, our hair fixing solutions can last for several months. Regular maintenance appointments are recommended to ensure the best results and longevity.'
    },
    {
      question: 'Is the process painful?',
      answer: 'No, the process is completely painless and non-invasive. You can resume your daily activities immediately after the procedure without any discomfort.'
    },
    {
      question: 'Can I wash my hair normally?',
      answer: 'Yes, you can wash your hair normally. We provide detailed care instructions to ensure longevity of the hair fixing and maintain its natural appearance.'
    },
    {
      question: 'What is the cost of hair fixing?',
      answer: 'The cost varies depending on the extent of hair loss and the type of solution required. Please visit our branches for a free consultation and personalized quote.'
    },
    {
      question: 'Do you offer after-care services?',
      answer: 'Yes, we provide comprehensive after-care services including maintenance, adjustments, and support throughout your journey with us.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#202A5B] mb-4">Frequently Asked Questions</h1>
          <div className="w-20 h-1 bg-[#B78F59] mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">Find answers to common questions about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#B78F59]/5 transition-colors"
              >
                <span className="text-lg font-semibold text-[#202A5B] text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#B78F59] transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#202A5B] mb-4">Still have questions?</h2>
          <p className="text-neutral-600 mb-6">Contact us for a free consultation with our experts</p>
          <Link 
            to="/contact"
            className="inline-block bg-[#B78F59] text-white px-8 py-3 rounded-md hover:bg-[#202A5B] transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}