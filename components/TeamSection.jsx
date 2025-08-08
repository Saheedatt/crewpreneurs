'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const teamMembers = [
  {
    name: 'Chinedu Okafor',
    role: 'Manager',
    image: '/member.jpg',
  },
  {
    name: 'Aisha Bello',
    role: 'Content Creator',
    image: '/member.jpg',
  },
  {
    name: 'Tunde Adigun',
    role: 'Social Media Management',
    image: '/member.jpg',
  },
  {
    name: 'Ngozi Nwosu',
    role: 'Creative Designer',
    image: '/member.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-20 md:py-18 text-center relative">
      <h2 className="text-3xl md:text-5xl lg:text-8xl font-extrabold text-gray-200 absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        Our Team
      </h2>
      <h3 className="relative text-2xl md:text-4xl font-bold text-[#FF7201] z-10 mb-12">
        Our Team
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto z-10 relative">
        {teamMembers.map((member, index) => (
          <FadeUpCard key={index} delay={index * 0.2}>
            <div
              className={`flex flex-col items-center text-center rounded-xl p-4 transition-transform duration-300 hover:scale-105 ${
                index % 2 === 1 ? 'md:mt-12' : ''
              }`}
            >
              <div className="w-full h-[280px] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-black">
                {member.name}
              </h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </FadeUpCard>
        ))}
      </div>
    </section>
  );
}
function FadeUpCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
