import type { RequirmentData } from "../interface/Interface";
import Data from "../components/Data";
import type { JSX } from "react";
import { FaPeopleArrows, FaUniregistry } from "react-icons/fa";
import { MdOutlineAccountTree, MdOutlineHandshake, MdOutlineLock } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { useTranslation } from "react-i18next";
const dataKeys = [
  "RealEstateRegistrationTransactions",
  "TransferOwnership",
  "DrugReleaseIntoIndependentUnits",
  "BoundaryModification",
  "RegistrationAndClearance",
  "InheritanceAndTransferToHeirs"
];
const Icons: { [key: string]: JSX.Element } = {
  RealEstateRegistrationTransactions: <FaUniregistry />,
  TransferOwnership: <MdOutlineHandshake />,
  DrugReleaseIntoIndependentUnits: <MdOutlineAccountTree />,
  BoundaryModification: <TbRulerMeasure />,
  RegistrationAndClearance: <MdOutlineLock />,
  InheritanceAndTransferToHeirs: <FaPeopleArrows />
};
const RealEstateAffairs = () => {
     const { t } = useTranslation();

  const data: RequirmentData[] = dataKeys.map((key) => ({
    service: t(`realEstateAffairs.${key}.service`),
    requirements: t(`realEstateAffairs.${key}.requirements`, { returnObjects: true }) as string[],
    icon: Icons[key]
  }));
    return (
        <Data data={data}/>
    );
}

export default RealEstateAffairs;
