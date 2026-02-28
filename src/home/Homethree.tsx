import { useTranslation } from "react-i18next";
const Homethree = () => {
  const { t } = useTranslation();
    return (
        <div className='w-full min-h-[70vh] md:min-h-[90vh] lg:min-h-[100vh] 
bg-[url("/pic/reseption.jpg")] bg-cover bg-center 
flex relative px-4'>
<div className="w-full md:w-[60%] lg:w-[40%] 
h-auto md:h-full
bg-white/30 rounded-3xl 
flex flex-col items-start justify-center 
relative md:absolute top-0 left-0 
backdrop-blur-xl 
p-4 md:p-6 lg:p-8">

  <h1 className='text-black/80 my-4 md:my-6 
  text-xl md:text-2xl lg:text-3xl 
  font-bold'>{t("homethree.title")}</h1>

  <h1 className="my-4 md:my-6 
  text-xl md:text-2xl lg:text-3xl 
  font-semibold text-color px-2 py-1 drop-shadow-4xl">
   {t("homethree.subtitle")} 
  </h1>

  <p className='text-black/80 
  w-full max-w-full md:max-w-[90%] lg:max-w-[600px]
  my-4 md:my-6 
  text-sm md:text-lg lg:text-2xl 
  font-semibold'>
    {t("homethree.description")}
  </p>

</div>
        </div>
    );
}

export default Homethree;
<div className="w-full md:w-[60%] lg:w-[40%] 
h-auto md:h-full
bg-white/30 rounded-3xl 
flex flex-col items-start justify-center 
relative md:absolute top-0 left-0 
backdrop-blur-xl 
p-4 md:p-6 lg:p-8">

  <h1 className='text-black/80 my-4 md:my-6 
  text-xl md:text-2xl lg:text-3xl 
  font-bold'>Who We Are</h1>

  <h1 className="my-4 md:my-6 
  text-xl md:text-2xl lg:text-3xl 
  font-semibold text-color px-2 py-1 drop-shadow-4xl">
    About Our Company
  </h1>

  <p className='text-black/80 
  w-full max-w-full md:max-w-[90%] lg:max-w-[600px]
  my-4 md:my-6 
  text-sm md:text-lg lg:text-2xl 
  font-semibold'>
    Absher Service is a company specializing in paperwork and administrative transactions in Syria, enabling individuals and businesses to complete official procedures remotely from anywhere in the world.

    Our goal is to become the leading company in this field, providing clear, reliable, and efficient solutions that save time and effort, eliminating the need for travel.
  </p>

</div>