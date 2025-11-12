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
  {
    id: '7',
    name: 'Apple',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEX///8AAAC/v7/09PSioqLS0tIwMDD6+vrl5eV7e3vx8fF4eHjLy8tQUFBGRkarq6vY2NiOjo7e3t6EhIS3t7cXFxcMDAyampo+Pj5hYWHb29uwsLDs7OwgICCgoKBXV1dsbGwsLCyJiYm8vLxlZWU3NzckJCSrYnspAAAE5klEQVR4nO2d13KrQAyGg4MDbsENN1xTzvs/4okhTgyIErMrrTT67pmR/lkWrcry9KQoiqIoiqIoimKTPbUBTJj724Pn7ajNYMB04WX0qS1xnuTi3RhT2+I4vneHilVHz8sxpbbHYYaTvFZeSG2Ruyy9ItQWucuopFVMbZKzvJa08rbUNrnKS1krb01tlKNAWunHEKb4GdT9vZoFqNWA2iwneQe10pMhxBDW6oXaLicBgoYrS2q7XKQcuKesqO1yElgrr0dtl4usYa1eqe1ykoqFpfl3gCOslU9tl5PEoFYTarOcpA8vLGqz3GQAaqUZUhBQKz3ngISQVhphwUSqVXvKeXetFVZSTvrNqU1yl1VBqteA2iKHKWilcXsdOalOQ2pz3OZeKq3lNPAj1ZsG7Y0cPO8wWUT6CUwJ5j1/NjiPZlH/ue0zu2gwyYqum8nAH7d+jjXD5SCfgBkljVt4fw2UL0aJdMEisGizWdekQPtAQH8LwCI8y7GZV7vtvfjgOpnOqh/J1pfMnS08Nfh9ei88sV9fGh5JH5P3yQxqVtUv59/kQuiDPTQQ0tofKmqm0EI5ToNgvGitVIqopMTHn1x/gAW1h8YIi2kEC2yonTTE2L5UX8QiDtwJilZfCIhRoYS6HVbsc4QV/XtW+KR2tiMVtWVLnKnd7URFr6M1WJ8V/xZadmZG7W8X3lClilmfqaeoWp2p3e3GAVMr1ttVZfueHZgfpQNMrbhXzODRG9UKAnNhse9HakqeG4T/uCaeVidqVzuDeIBmn2yoGuqyAP85sWc0rQTkk/1mLw0hoON7i6WVgIWF9y1kH2JhJkipPTUA2pYlobhqvQJ9g3myIQVLKwlvIZpYEr6Fcyyx3qg9NUCv2U0z8D/qIJbsJezvaLks1sWvb1q1RJpAQpsRmljUjprgrGK1By3nQO2oCdDE4p9RRhRLwkU+aOdoCffoo23wEoJStNAhofbUAPDFOxaQkPtDO+5IuIgTrxBG7akB0FI0EnZ4vGbSEbWr3cEr3kt4D/HEKo4KM+SCJpaAkgVaCC+hMQQvdhBwgzDO8GoG+9YQ1Gkwamc7gzmJcqZ2titoeYcr3MMHvMnoK8wvWNmjisV98B5XrJh35QIt/ydBLcxIK4VzoQd12jCF87kHrRz2A+PhMLQraH555dtUgy+W5x2pnX6Upiv+rBAzrSTiVS3y8Dz8EInFM2WDOX5/B7XbjwH+5MQ6XCv6GwqxuDYwU2zxfG9nIxCL7/09qFf3ZFC73AF0rThPPiHesZLBOWWKnajh3VSDvLQ4ZwCxlxbvhYXa9cB7x0pB1IrzpzADMYyndtUA5b8VWoJp3i8HVnGa76nwnor/2JuGa7qhAMp11Px39wyMLGBM7aQxEBqQJEwefmO9LMa4Gl3C9qmHf8vyPZavauNbtwexGj8ImA3LYzGQ51r9qsHaD8MEjO+UsBZtse6QrMJS56SQY04RK7GpuM39hoWMPN+iaiPGG2skRe4lDP/jSbRWLQoY23XS6+92/V4yazxRSrhMspa6nPw2KRT+Qr/ujwWcO99bsr9UKAX3Nz5HFbnDE/vCVyuAc2J8rHF9B00v8mwdfYBh/qu4mjX+kamXH5z6FL9b3RMsv3fvw0fScrRynow+r+fLf9uI+TDmIwRhyLuRQ1EURVEURTHCf8eYSCcC+BLCAAAAAElFTkSuQmCC',
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
              animation: 'scroll 30s linear infinite',
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
