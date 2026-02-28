import Details from "../components/Details";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Homefoure = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center ">
            <Details header={t("homefour.header")}/>
            <div className="w-[95%] md:w-[80%] lg:w-[60%] 
h-auto md:h-[260px] lg:h-[300px] 
mt-[30px] md:mt-[40px]
border border-white/30 rounded-3xl 
shadow-2xl shadow-black/20 
bg-white/80 backdrop-blur-md">  
              <div className="h-auto md:h-[35%] 
py-4 md:py-0
w-full bg-color 
flex flex-col items-center justify-center 
rounded-3xl rounded-b-none">
                    <h1 className="font-medium text-xl md:text-2xl lg:text-3xl text-white"> {t("homefour.mainBranch")}</h1>
                    <h2 className="font-bold text-sm md:text-lg lg:text-xl text-white">{t("homefour.govServices")}</h2>
                </div>
                <div className="h-[65%] w-full flex flex-col items-center justify-around">
                    <p className="font-bold text-sm md:text-lg lg:text-2xl 
text-black/50 text-center px-3">{t("homefour.address")}</p>
                    <button onClick={()=>{ window.open(
      "https://www.google.com/maps?q=ساحة+عرنوس+دمشق",
      "_blank"
    );}} className="flex items-center justify-center gap-2
border p-2 md:p-3 
rounded-xl font-semibold 
text-sm md:text-lg lg:text-2xl 
text-white bg-black/50  ">{t("homefour.locate")} <FaLocationDot />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Homefoure;
