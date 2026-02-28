import type { RequirmentData } from "../interface/Interface";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import Whatsupp from "../whatsup/Whatsupp";

interface ImmigrationProps {
  data: Array<RequirmentData>;
}
const Immigrations = ({ data }: ImmigrationProps) => {
   const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState<RequirmentData | null>(null);
const reqRef = useRef<HTMLDivElement>(null);

    
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10">
            <div className='w-full min-h-[50vh] md:min-h-[70vh] lg:h-[600px] 
bg-[url("/pic/Pngtree.jpg")] bg-cover bg-center px-4'>  
            <div className="w-full h-[100%] flex flex-col gap-4 items-center justify-center ">
                <h1 className="p-4 rounded-xl text-white 
text-2xl md:text-3xl lg:text-5xl 
font-bold mb-4 md:mb-6 
text-center whitw/30 backdrop-blur-lg ">
            {t("immigrations.heroTitle")}
 
          </h1>
          <p className="p-4 rounded-xl text-white 
text-sm md:text-lg lg:text-2xl 
mb-4 md:mb-6 
text-center whitw/30 backdrop-blur-lg" > {t("immigrations.heroText")}</p>
          </div></div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">   
                {data.map((d,i)=>{
                return(
                    <div
  key={i}
  onClick={() => {
    setSelectedService(d);
    setTimeout(() => {
      reqRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
  className={`
    cursor-pointer
    w-[500px] max-w-full  
    h-[300px]              
    mx-auto
    border-3 rounded-xl flex flex-col items-center justify-center
    transform transition-all duration-300
    ${selectedService?.service === d.service
      ? "border-color bg-color shadow-xl"
      : "border-color hover:scale-95 hover:shadow-lg"}
  `}
><p
  className={`
    text-4xl md:text-5xl lg:text-5xl mb-3 md:mb-[25px] transition-colors duration-300
    ${selectedService?.service === d.service ? "text-white" : "text-black/50"}
  `}
>
  {d.icon}
</p>
<h1
  className={`
    text-3xl md:text-4xl lg:text-4xl font-semibold mb-3 md:mb-[25px] transition-colors duration-300 text-center
    ${selectedService?.service === d.service ? "text-white" : "text-black/50"}
  `}
>
  {d.service}
</h1>
</div>
                )
            })}
            </div>
            {selectedService && (
  <div
    ref={reqRef}
   className="w-[95%] md:w-[80%] lg:w-[70%] 
mt-10 md:mt-20 
p-4 md:p-6 
border-t-3 border-color 
rounded-xl shadow-lg bg-white 
flex flex-col gap-4"
  >
   <div className="font-semibold text-center 
  text-2xl md:text-3xl lg:text-5xl text-black/50">
  <p className="border-b-2 border-color">{selectedService.service} Requirements</p>
</div>

<ul className="list-disc pl-4 md:pl-6 flex flex-col gap-2 
  text-lg md:text-2xl lg:text-3xl text-black/80">
  {selectedService.requirements.map((req, idx) => (
    <li key={idx}>{req}</li>
  ))}
</ul>
  </div>
)}

<Whatsupp/>
        </div>
        
    );
}

export default Immigrations;
