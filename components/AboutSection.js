'use client';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 -mt-20 px-4 md:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-end py-10">
        
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-white border border-yellow-300 rounded-xl p-6 shadow-sm w-full md:w-[25%] min-h-[300px] md:min-h-[340px] flex flex-col justify-between"
        >
          <div>
            <h3 className="font-semibold mb-2 mt-6 text-[24px] text-black">Mission Statement:</h3>
            <p className="text-sm mb-4 text-black leading-[23px]">
              We aim to build a global network of skilled professionals that help the growth process of brands through structured collaboration, bringing clarity, innovative ideas, creativity, and execution into every business idea.
            </p>
          </div>
          <button className="border border-yellow-500 px-4 py-2 rounded text-sm text-black self-start hover:bg-yellow-50 transition-colors mb-6">
            Read More
          </button>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-[#A60000] text-white rounded-xl p-8 shadow-xl w-full md:w-[30%] min-h-[340px] md:min-h-[430px] flex flex-col justify-between transform md:scale-105"
        >
          <div>
            <h3 className="font-semibold mb-4 text-[26px] mt-10">Who We Are:</h3>
            <p className="text-sm mb-4 leading-[23px]">
              Oriental Events and Logistics is a premier event planning and management brand based in Nigeria. We specialize in creating seamless, unforgettable experiences by handling all aspects of event coordination, from logistics to execution.
            </p>
          </div>
          <button className="bg-[#FF7201] text-white px-4 py-2 rounded text-sm self-start hover:bg-[#e6650a] transition-colors mb-6">
            Read More
          </button>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-white border border-yellow-300 rounded-xl p-6 shadow-sm w-full md:w-[25%] min-h-[300px] md:min-h-[340px] flex flex-col justify-between"
        >
          <div>
            <h3 className="font-semibold mb-4 mt-6 text-[24px] text-black">Vision Statement:</h3>
            <p className="text-sm mb-6 text-black leading-[23px]">
              Our vision is to create a system that supports business growth, enables builders to collaborate, and work together without thinking of how they would get jobs.
            </p>
          </div>
          <button className="border border-yellow-500 px-4 py-2 rounded text-sm text-black self-start hover:bg-yellow-50 transition-colors mb-6">
            Read More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;