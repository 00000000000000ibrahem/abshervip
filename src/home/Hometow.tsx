import { FaPassport } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { FaIndustry } from "react-icons/fa";

import { MdOutlineHouse } from 'react-icons/md';

import { FaMoneyBillWave } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { RiRoadMapLine } from 'react-icons/ri';import { FaUmbrellaBeach } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const   Hometow = () => {
    const { t } = useTranslation();
    const nav= useNavigate()
    const goverments = [
  {
    gov: "hometow.immigration",
    icon: <FaPassport />,
    path: "/Immigration"
  },
  {
    gov: "hometow.internalTrade",
    icon: <FaBalanceScale />,
    path: "/commercial-register-services"
  },
  {
    gov: "hometow.civilStatus",
    icon: <HiMiniBuildingLibrary />,
    path: "/civil-status"
  },
  {
    gov: "hometow.industry",
    icon: <FaIndustry />,
    path: "/ministry-of-industry"
  },
  {
    gov: "hometow.realEstateOwnership",
    icon: <MdOutlineHouse />,
    path: "/real-estate-ownership"
  },
  {
    gov: "hometow.finance",
    icon: <FaMoneyBillWave />,
    path: "/ministry-of-finance"
  },
  {
    gov: "hometow.realEstateAffairs",
    icon: <FaBuilding />,
    path: "/real-estate-affairs"
  },
  {
    gov: "hometow.transportation",
    icon: <RiRoadMapLine />,
    path: "/ministry-of-transportation"
  },
  {
    gov: "hometow.tourism",
    icon: <FaUmbrellaBeach />,
    path: "/ministry-of-tourism"
  },
  {
    gov: "hometow.realEstateDocs",
    icon: <FaFileAlt />,
    path: "/real-Estate-documents"
  }
];
    return (
        <div className="w-full flex flex-col items-center justify-center mt-[80px] mb-[80px] gap-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center px-4 font-medium text-black/78" style={{ fontFamily: 'Vanitas' }}>{t("hometow.title")}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4   ">
            {goverments.map((goverment, index) => {
  return (
 <div
  key={index}
  className="
    group
    w-[500px] max-w-full
    h-[300px]
    mx-auto
    border-3 border-color rounded-xl
    flex flex-col items-center justify-around
    hover:bg-[#9f7729]
    transition-transform duration-300
  "
>
      <p className="text-2xl md:text-3xl lg:text-4xl text-black/50ext-4xl text-black/50 group-hover:text-white transition-colors duration-500"   >{goverment.icon}</p>
      <h2  className="text-lg md:text-xl lg:text-2xl text-center px-2 font-semibold group-hover:text-white transition-colors duration-500">{t(goverment.gov)}</h2>
      <button onClick={()=>nav(goverment.path)} className="flex items-center justify-center border 
p-2 md:p-3
rounded-xl font-semibold 
text-sm md:text-lg lg:text-2xl 
text-white bg-black/50 
w-[100px] md:w-[130px] lg:w-[150px] 
h-[40px] md:h-[50px] lg:h-[60px] group-hover:bg-white group-hover:text-[#9f7729] transition-colors duration-300">
        {t("hometow.view")}
      </button>
    </div>
  );
})}

        </div>
        </div>
    );
}

export default Hometow;
