'use client';

import Image from 'next/image';
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer id='contact'
      className="bg-[#A60000] text-white pt-12 mt-10 pb-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Crewpreneurs Logo"
                width={220}
                height={80}
                className="mb-2"
              />
            </div>
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="email@crewpreneurs"
                className="w-full px-4 py-3 pr-14 rounded-md text-gray-700 bg-white focus:outline-none text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 border-black border bg-white hover:bg-gray-800 text-black p-2 rounded transition">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-[#EFECE6]">Product</h4>
            <ul className="space-y-2 text-sm opacity-90 text-[#BABABA]">
              {['About', 'Features', 'Pricing', 'Integrations', 'FAQs'].map((link, i) => (
                <li
                  key={i}
                  className="hover:opacity-100 hover:underline cursor-pointer transition duration-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-[#EFECE6]">Company</h4>
            <ul className="space-y-2 text-sm opacity-90 text-[#BABABA]">
              {['Our Story', 'Team', 'Careers', 'Press', 'Contact Us'].map((link, i) => (
                <li
                  key={i}
                  className="hover:opacity-100 hover:underline cursor-pointer transition duration-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-[#EFECE6]">Resources</h4>
            <ul className="space-y-2 text-sm opacity-90 text-[#BABABA]">
              {['Blog', 'Webinars', 'Case Studies', 'Templates', 'Help Center'].map((link, i) => (
                <li
                  key={i}
                  className="hover:opacity-100 hover:underline cursor-pointer transition duration-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-[#EFECE6]">Legal</h4>
            <ul className="space-y-2 text-sm opacity-90 text-[#BABABA]">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Acceptable Use', 'Refund Policy'].map((link, i) => (
                <li
                  key={i}
                  className="hover:opacity-100 hover:underline cursor-pointer transition duration-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#FF7201] py-4">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-black mb-3 md:mb-0">
            ©2025 Crewpreneurs. All Rights Reserved.{' '}
            <a href="#" className="underline hover:opacity-80 transition">
              @iamhervewabo
            </a>
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Twitter, href: '#' },
              { Icon: Youtube, href: '#' },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-9 h-9 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-200 group"
              >
                <Icon 
                  size={16} 
                  className="text-white group-hover:scale-110 transition-transform duration-200" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;