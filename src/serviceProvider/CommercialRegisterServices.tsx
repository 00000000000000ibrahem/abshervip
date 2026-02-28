import type { JSX } from "react";
import { FaBriefcase, FaBuilding } from "react-icons/fa";
import Data from "../components/Data"
import { HiOutlineArrowPath, HiOutlineUser, HiOutlineUsers } from 'react-icons/hi2';
import { useTranslation } from "react-i18next";
import type { RequirmentData } from "../interface/Interface";
const dataKeys = [
  "RenewalCorporateEntities",
  "RenewalSoleProprietorship",
  "CapitalCompanies",
  "PartnershipCompanies",
  "IndividualRegistration"
];
const Icons: { [key: string]: JSX.Element } = {
  RenewalCorporateEntities: <FaBriefcase />,
  RenewalSoleProprietorship: <HiOutlineArrowPath />,
  CapitalCompanies: <FaBuilding />,
  PartnershipCompanies: <HiOutlineUsers />,
  IndividualRegistration: <HiOutlineUser />
};
const CommercialRegisterServices = () => {
    const { t } = useTranslation();
     const data: RequirmentData[] = dataKeys.map((key) => ({
  service: t(`commercialRegister.${key}.service`),
  requirements: t(`commercialRegister.${key}.requirements`, { returnObjects: true }) as string[],
  icon: Icons[key]
}));
      
    return(
        <Data data={data}/>
    )
}

export default CommercialRegisterServices;
