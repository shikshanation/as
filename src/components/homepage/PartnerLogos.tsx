'use client';

import Image from 'next/image';

// will update with actual partner list
// these are just placeholders - client will send real logos
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
  // this infinite scroll animation is kinda janky but client approved it so ¯\_(ツ)_/¯

  return (
    <section className="bg-[#F0F1F5] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#E31336]">
            India's Best Insurers,
            <span className="text-gray-600"> all in one place</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 animate-scroll"
          >
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
