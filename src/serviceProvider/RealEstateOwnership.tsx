import { FaFileAlt } from "react-icons/fa";
import Data from "../components/Data";
import type { RequirmentData } from "../interface/Interface";
import { useTranslation } from "react-i18next";
import type { JSX } from "react";

const dataKeys = ["PropertyOwnershipDocs"];
const Icons: { [key: string]: JSX.Element } = {
  PropertyOwnershipDocs: <FaFileAlt />
};
const RealEstateOwnership = () => {
     const { t } = useTranslation();

  const data: RequirmentData[] = dataKeys.map((key) => ({
    service: t(`realEstateOwnership.${key}.service`),
    requirements: t(`realEstateOwnership.${key}.requirements`, { returnObjects: true }) as string[],
    icon: Icons[key]
  }));
    return (
        <Data data={data}/>
    );
}

export default RealEstateOwnership;
