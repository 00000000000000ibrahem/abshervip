import Homethree from '../home/Homethree';
import type { Steps } from '../interface/Interface';
import Whatsupp from '../whatsup/Whatsupp';
import { useTranslation } from 'react-i18next';
const About = () => {
    const { t } = useTranslation();
const step: Steps[] = t('about.steps', { returnObjects: true }) as Steps[];    return (
        <div className=''>
            <Homethree/>
            <div className='flex flex-col md:flex-row items-center justify-center mt-10 md:mt-15 gap-6'>
                <div className='group m-4 md:m-8 
w-[95%] sm:w-[80%] md:w-[550px] 
border-[3px] border-color rounded-xl 
flex flex-col items-center justify-around
transform transition-transform duration-400 
hover:scale-95 hover:shadow-lg hover:bg-[#9f7729] hover:backdrop-blur-lg'>
                    <h1 className='p-8 text-2xl md:text-3xl lg:text-5xl font-medium text-[#9f7729] text-center border-b-2 border-white group-hover:text-white'>{t('about.mission.title')}</h1>
                    <p className='text-sm md:text-lg lg:text-2xl
p-4 md:p-8 font-medium text-black/70 group-hover:text-white'>{t('about.mission.text')}</p>
                </div>
                <div className='group m-4 md:m-8 
w-[95%] sm:w-[80%] md:w-[550px] 
border-[3px] border-color rounded-xl 
flex flex-col items-center justify-around
transform transition-transform duration-400 
hover:scale-95 hover:shadow-lg hover:bg-[#9f7729] hover:backdrop-blur-lg'>
                    <h1 className='p-8 text-2xl md:text-3xl lg:text-5xl font-medium text-[#9f7729] text-center border-b-2 border-white group-hover:text-white'>{t('about.vision.title')}
</h1>
                    <p className='text-sm md:text-lg lg:text-2xl
p-4 md:p-8 font-medium text-black/70 group-hover:text-white'>{t('about.vision.text')}</p>
                </div>
            </div>
            <div className='w-full h-[500px] bg-color mt-[60px] mb-[60px] flex p-6 flex items-csnter justify-center '>
            <div className='w-[95%] md:w-[80%] h-auto flex flex-col items-center justify-center gap-4'>
                <h1 className='p-8 w[20px]  text-2xl md:text-3xl lg:text-5xl
p-4 md:p-8 font-medium text-white text-center border-b-2 border-white'>{t('about.leadership.title')}</h1>
                <p className='p-8 text-sm md:text-lg lg:text-xl font-medium text-white'> {t('about.leadership.text')}</p>
            </div>
            </div>
            <div>
                <h1 className='p-8 w[20px] text-2xl md:text-3xl lg:text-5xl
p-4 md:p-8 font-medium text-color text-center'>{t('about.strategic.title')}</h1>
                <div className=' flex flex-col items-center justify-start'>
                    <div className=''>
                        {step.map((s,i)=>{
                            return(
                                <div key={i} className='flex flex-col md:flex-row w-full gap-2 md:gap-4 text-2xl md:text-5xl font-bold'>
                                    <div>
                                    <span className="text-white relative">
                                        <span className="absolute inset-1 text-color -z-10">0{s.n}</span>
                                        01
                                    </span>
                                </div>
                        <p className='p-4 text-sm md:text-lg lg:text-2xl p-2 md:p-4 text-black/70'>{s.p}</p>
  	                </div>
                            )
                        })}
                   
                </div>
            </div>
        </div>
        <Whatsupp/>
        </div>
    );
}

export default About;
