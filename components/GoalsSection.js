'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInFrom = (direction = 'left') => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
};

const GoalsSection = () => {
  return (
    <section className="bg-[#A60000] py-16 px-4 md:px-20 text-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Goals</h2>

      {/* Top Row: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <motion.div
          variants={fadeInFrom('left')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2"
        >
          <Image
            src="/goals.jpg"
            alt="Jets formation 1"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />
        </motion.div>

        <motion.ul
          variants={fadeInFrom('right')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 list-disc pl-6 text-lg space-y-4"
        >
          <li>To build a vibrant, trusted community of builders across Africa and globally.</li>
          <li>To simplify the execution and growth journey of businesses from idea to scale.</li>
        </motion.ul>
      </div>

      {/* Bottom Row: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        <motion.div
          variants={fadeInFrom('right')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2"
        >
          <Image
            src="/goals.jpg"
            alt="Jets formation 2"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />
        </motion.div>

        <motion.ul
          variants={fadeInFrom('left')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 list-disc pl-6 text-lg space-y-4"
        >
          <li>To create a sustainable business development ecosystem across different industries.</li>
          <li>We aim to become the #1 business development network for brands across Africa.</li>
        </motion.ul>
      </div>
    </section>
  );
};

export default GoalsSection;

