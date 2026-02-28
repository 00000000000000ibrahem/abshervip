import type { RequirmentData } from "../interface/Interface";
import Data from "../components/Data";
import type { JSX } from "react";
import { FaIdCard, FaPlane } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { useTranslation } from "react-i18next";
const dataKeys = [
  "TravelAgencyLicense",
  "TouristGuideLicense",
  "TouristAccommodationLicense"
];
const Icons: { [key: string]: JSX.Element } = {
  TravelAgencyLicense: <FaPlane />,
  TouristGuideLicense: <FaIdCard />,
  TouristAccommodationLicense: <MdHotel />
};
    
const MinistryofTourism = () => {
  const { t } = useTranslation();

  const data: RequirmentData[] = dataKeys.map((key) => ({
    service: t(`ministryOfTourism.${key}.service`),
    requirements: t(`ministryOfTourism.${key}.requirements`, { returnObjects: true }) as string[],
    icon: Icons[key]
  }));
    return (
        <Data data={data}/>
    );
}

export default MinistryofTourism;
