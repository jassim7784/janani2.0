import Navbar from "@/components/Navbar";
import Link from "next/link";

const faqs = [
  {
    question: "Who is JANANI 2026 for?",
    answer: "JANANI 2026 is an inclusive movement designed for every woman. Whether you are young or old, from a rural village or a bustling city, a working professional, an entrepreneur, a homemaker, or a student—this conference is for you. We believe that true empowerment happens when women from all walks of life come together."
  },
  {
    question: "I don't have a professional or corporate background. Can I still attend?",
    answer: "Absolutely! JANANI is not just a professional networking event. It is a celebration of womanhood in all its forms. Your life experiences, your resilience, and your unique perspective are what make you an essential part of this gathering. You belong here, regardless of your career status or financial background."
  },
  {
    question: "Is there an age limit to participate?",
    answer: "No, there is no age limit! We welcome young students full of dreams just as warmly as we welcome grandmothers rich with wisdom. Cross-generational conversations and learning are a core part of the JANANI vision."
  },
  {
    question: "What can I expect to gain from attending?",
    answer: "You will find a supportive community, inspiring stories from distinguished guests who have overcome extraordinary challenges, and practical insights on personal growth and empowerment. Most importantly, you will leave feeling inspired, heard, and connected to a powerful sisterhood."
  },
  {
    question: "How do I register?",
    answer: "You can easily register by filling out the form at the bottom of our home page. We have made the process as simple as possible to ensure that every woman can easily secure her spot."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.2em] text-gray-400 mb-4 uppercase">JANANI 2026</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
            FREQUENTLY ASKED<br />
            <span className="text-gray-400">QUESTIONS</span>
          </h1>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20 pb-8">
              <h3 className="text-2xl font-bold mb-4">{faq.question}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center text-sm tracking-widest uppercase text-gray-500">
          <span>JANANI 2026</span>
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
            <span>Back to home</span>
            <span aria-hidden="true">↙</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
