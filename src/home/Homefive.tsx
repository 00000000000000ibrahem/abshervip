import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { useTranslation } from "react-i18next"; 
const Homefive = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();
    const questions=[
  {
    q:"homefive.q1",
    r:"homefive.a1"
  },
  {
    q:"homefive.q2",
    r:"homefive.a2"
  },
  {
    q:"homefive.q3",
    r:"homefive.a3"
  },
  {
    q:"homefive.q4",
    r:"homefive.a4"
  },
  {
    q:"homefive.q5",
    r:"homefive.a5"
  },
  {
    q:"homefive.q6",
    r:"homefive.a6"
  }
] 
    return (
        <div className='w-full h-auto md:min-h-[600px] lg:h-[700px] 
bg-color mt-[40px] md:mt-[60px] 
flex flex-col md:flex-row 
p-4 md:p-6 gap-6'>
            <div className='w-full md:w-[45%] 
h-auto md:h-full 
flex flex-col items-start justify-start'>
                <h1  className="text-2xl md:text-3xl lg:text-5xl 
font-medium text-white 
m-3 md:m-6" style={{ fontFamily: 'Vanitas' }}>{t("homefive.brand")}</h1>
                <p  className="text-xl md:text-2xl lg:text-5xl 
font-medium text-white 
m-3 md:m-6" style={{ fontFamily: 'Vanitas' }}>{t("homefive.faq")}</p>
                </div>
            <div className='w-full md:w-[55%] 
flex flex-col items-start gap-2'>   
                {questions.map((question,index)=>{
                    return(
                            <div key={index} className='w-full border border-white 
p-3 md:p-5 lg:p-6'>
                <h1 className='flex items-center justify-between 
text-sm md:text-lg 
font-semibold text-white gap-2'>{t(question.q)} <CiCirclePlus onClick={()=>setOpenIndex(openIndex === index ? null : index)}/></h1>
                <p className={`
    overflow-hidden transition-all duration-500 ease-in-out text-white text-sm md:text-lg lg:text-xl
    ${openIndex === index  ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"}
  `}>{t(question.r)}</p>
                            </div>
                    )
                })}
               

            </div>
        </div>
    );
}

export default Homefive;
