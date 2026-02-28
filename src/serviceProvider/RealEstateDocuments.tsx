import type { RequirmentData } from "../interface/Interface";
import Data from "../components/Data";
import type { JSX } from "react";
import { BsBoxArrowInDown, BsFileEarmarkText } from "react-icons/bs";
import { MdSwapHoriz } from "react-icons/md";
import { FaLock, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
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
  RealEstateRegistrationTransactions: <BsFileEarmarkText />,
  TransferOwnership: <MdSwapHoriz />,
  DrugReleaseIntoIndependentUnits: <BsBoxArrowInDown />,
  BoundaryModification: <FaMapMarkedAlt />,
  RegistrationAndClearance: <FaLock />,
  InheritanceAndTransferToHeirs: <FaUsers />
};

const RealEstateDocuments = () => {
    const { t } = useTranslation();

  const data: RequirmentData[] = dataKeys.map((key) => ({
    service: t(`realEstateDocuments.${key}.service`),
    requirements: t(`realEstateDocuments.${key}.requirements`, { returnObjects: true }) as string[],
    icon: Icons[key]
  }));

    return (
        <Data data={data}/>
    );
}

export default RealEstateDocuments;
