'use client';

import Image from 'next/image';

const partners = [
  {
    id: '1',
    name: 'Accenture',
    logo: '/accenture.webp',
  },
  {
    id: '2',
    name: 'Deloitte',
    logo: '/deloitte.webp',
  },
  {
    id: '3',
    name: 'IBM',
    logo: '/ibm-logo-2.webp',
  },
  {
    id: '4',
    name: 'Microsoft',
    logo: '/microsoft.webp',
  },
  {
    id: '5',
    name: 'Google',
    logo: '/google.webp',
  },
  {
    id: '6',
    name: 'Amazon',
    logo: '/amazon.webp',
  },
  {
    id: '7',
    name: 'Apple',
    logo: '/apple.png',
  },
];

export default function PartnerLogos() {
  return (
    <section className="bg-[#F0F1F5] px-4 py-16 sm:px-6 lg:px-8">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#E31336]">
            India's Best Insurers, 
            <span className="text-gray-600"> all in one place</span>
          </h2>
        </div>

        {/* Partner Logos Carousel */}
        <div className="relative overflow-hidden">
          {/* Carousel Track */}
          <div 
            className="flex gap-8 hover:pause"
            style={{
              animation: 'scroll 20s linear infinite',
            }}
          >
            {/* First set of logos */}
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-[#FF6B35] hover:shadow-lg shrink-0 w-48"
              >
                <div className="relative h-12 w-32 grayscale transition-all group-hover:grayscale-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`${partner.id}-duplicate`}
                className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-[#FF6B35] hover:shadow-lg shrink-0 w-48"
              >
                <div className="relative h-12 w-32 grayscale transition-all group-hover:grayscale-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
