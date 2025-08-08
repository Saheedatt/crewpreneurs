'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = Array(9).fill('/goals.jpg');

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-[#FFE3E3] py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#A60000]">Gallery</h2>
        <p className="text-sm text-gray-700 mt-2 max-w-xl mx-auto">
          Step into the moments that made history! Explore our past events and relive the excitement through our carefully curated gallery
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-lg"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={400}
                height={250}
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-6 py-2 border-2 border-[#A60000] text-[#A60000] rounded-full font-medium hover:bg-[#A60000] hover:text-white transition-colors"
        >
          Load More
        </motion.button>
      </div>
    </section>
  );
};

export default GallerySection;
