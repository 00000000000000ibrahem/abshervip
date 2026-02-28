import type { RequirmentData } from "../interface/Interface";
import Data from "../components/Data";

import type { JSX } from "react";
import { FaPassport } from "react-icons/fa";
import { HiOutlineGlobeAlt, HiOutlineArrowPath, HiOutlinePencilSquare } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
const dataKeys = [
  "IssuanceDomestic",
  "IssuanceOutsideSyria",
  "Renewal",
  "Correction"
];
const Icons: { [key: string]: JSX.Element } = {
  IssuanceDomestic: <FaPassport />,
  IssuanceOutsideSyria: <HiOutlineGlobeAlt />,
  Renewal: <HiOutlineArrowPath />,
  Correction: <HiOutlinePencilSquare />
};
const Immigration = () => {
    
const { t } = useTranslation()
    const data: RequirmentData[] = dataKeys.map((key) => ({
    service: t(`immigration.${key}.service`),
    requirements: t(`immigration.${key}.requirements`, { returnObjects: true }) as string[],
    icon: Icons[key]
  }));
    return (
        <Data data={data}/>
    );
}

export default Immigration;
