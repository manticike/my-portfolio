"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageItem = {
  url: string;
  title: string;
  description: string;
  role: string;
  clientLink: string;
  projectDate: string;
  technologies?: string[];
};

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: ImageItem[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const closeDescription = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div
      className={cn(
        "min-h-[40rem] w-full overflow-y-auto",
        className
      )}
      ref={gridRef}
    >
      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeDescription}
        >
          <div 
            className="bg-gray-900 border border-gray-700 rounded-lg max-w-4xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeDescription}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>
            
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="w-full md:w-1/2">
                <img
                  src={selectedImage.url}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                  alt={selectedImage.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                  }}
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedImage.projectDate}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Role</h4>
                  <p className="text-white">{selectedImage.role}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Client</h4>
                  <a 
                    href={selectedImage.clientLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline inline-flex items-center"
                  >
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                {selectedImage.technologies && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedImage.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Description</h4>
              <p className="text-gray-300 whitespace-pre-line">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {/* Column 1 */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              onClick={() => handleImageClick(el)}
              className="cursor-pointer group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={el.url}
                  className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  alt={el.title}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {el.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div 
              style={{ y: translateSecond }} 
              key={"grid-2" + idx}
              onClick={() => handleImageClick(el)}
              className="cursor-pointer group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={el.url}
                  className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  alt={el.title}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {el.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div 
              style={{ y: translateThird }} 
              key={"grid-3" + idx}
              onClick={() => handleImageClick(el)}
              className="cursor-pointer group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={el.url}
                  className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  alt={el.title}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {el.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};