
import  { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Homeone = () => {
  const { t } = useTranslation();
  const wordsArray = t("homeone.words", { returnObjects: true }) as string[];
  const [index, setIndex] = useState(0);

  
  const texts = [
    "ALL GOVERMENTSERVICES UNDER ONE ROOF",
    "All the papers in Damascus",
    "Remotely with complete confidence…",
    "We must handle official documents in Damascus from anywhere in the world quickly and reliably."
  ];

  const prevText = () => {
    setIndex((prev) => (prev === 0 ? texts.length - 1 : prev - 1));
  };

  const nextText = () => {
    setIndex((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='relative'>
      <div className='w-full min-h-[70vh] md:min-h-[90vh] lg:min-h-[100vh] 
bg-[url("/pic/dama301.png")] bg-cover bg-center 
flex items-center justify-center px-4'>
        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
          <button onClick={prevText} className="px-4 flex items-center py-2 bg-whitw/30 backdrop-blur-lg  text-white rounded">
            <FaArrowAltCircleLeft  className='mr-[10px]'/>
            {t("homeone.prev")} 
          </button>

         <h1 className="p-4 md:p-6 lg:p-8 rounded-xl 
text-white text-xl md:text-3xl lg:text-4xl 
text-center whitw/30 backdrop-blur-lg ">
            {t(`homeone.texts.${index}`)}
          </h1>

          <button onClick={nextText} className="px-4 py-2 flex items-center  bg-whitw/30 backdrop-blur-lg  text-white rounded">
            {t("homeone.next")}
            <FaArrowAltCircleRight className='ml-[10px]'/>
          </button>
        </div>
      </div>

    {/* الشريط الدائري */}
      <div className="w-full flex justify-center">
        <div className="w-[95%] md:w-[90%] 
        h-[120px] md:h-[200px] lg:h-[300px]
        bg-white border-2 border-color rounded-4xl overflow-hidden 
        flex items-center 
        mt-[-60px] md:mt-[-80px] lg:mt-[-100px] 
        z-[100]">
          
          <div
            className="flex whitespace-nowrap 
            text-color text-sm md:text-lg lg:text-2xl 
            font-semibold animate-marquee w-max
            hover:[animation-play-state:paused]"
          >
            {[...wordsArray, ...wordsArray].map((word, i) => (
    <span key={i} className="px-4">{word}</span>
  ))}
          </div>

        </div>
      </div>
  </div>

  );
};

export default Homeone;
