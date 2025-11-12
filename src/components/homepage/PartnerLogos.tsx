'use client';

import Image from 'next/image';

const partners = [
  {
    id: '1',
    name: 'Accenture',
    logo: 'https://logo.clearbit.com/accenture.com',
  },
  {
    id: '2',
    name: 'Deloitte',
    logo: 'https://logo.clearbit.com/deloitte.com',
  },
  {
    id: '3',
    name: 'IBM',
    logo: 'https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg',
  },
  {
    id: '4',
    name: 'Microsoft',
    logo: 'https://logo.clearbit.com/microsoft.com',
  },
  {
    id: '5',
    name: 'Google',
    logo: 'https://logo.clearbit.com/google.com',
  },
  {
    id: '6',
    name: 'Amazon',
    logo: 'https://logo.clearbit.com/amazon.com',
  },
];

export default function PartnerLogos() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            India's Best Insurers, all in one place
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by leading organizations worldwide
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-[#FF6B35] hover:shadow-lg"
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

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl">
            <span>Get a 100% Free Plan</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
