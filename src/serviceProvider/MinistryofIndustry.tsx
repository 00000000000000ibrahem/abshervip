import type { RequirmentData } from "../interface/Interface";
import Data from "../components/Data";
import type { JSX } from "react";
import { FaLandmark, FaProjectDiagram, FaIndustry, FaFileAlt, FaCheck, FaCog,  FaPen, FaBuilding } from "react-icons/fa";
import {MdFactory,MdAssignment} from "react-icons/md"
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
const dataKeys = [
  "MinistryFacilities2025",
  "LicensingDecisionForInvestmentProject",
  "RegulationOfIndustrialRegisterFees",
  "IssuanceOfNewIndustrialLicense",
  "IndustrialLicenseDecreeInvestment",
  "RegulationOfIndustrialRegisterProcess",
  "EstablishmentOfNewIndustrialFacility",
  "CertificateOfOrigin",
  "RegisterAmendment",
  "IndustrialRegister",
  "FacilityLicensingGeneral"
];
const Icons: { [key: string]: JSX.Element } = {
  MinistryFacilities2025: <FaLandmark />,
  LicensingDecisionForInvestmentProject: <FaProjectDiagram />,
  RegulationOfIndustrialRegisterFees: <FaIndustry />,
  IssuanceOfNewIndustrialLicense: <FaFileAlt />,
  IndustrialLicenseDecreeInvestment: <FaCheck />,
  RegulationOfIndustrialRegisterProcess: <FaCog />,
  EstablishmentOfNewIndustrialFacility: <MdFactory />,
  CertificateOfOrigin: <HiOutlineGlobeAlt />,
  RegisterAmendment: <FaPen />,
  IndustrialRegister: <MdAssignment />,
  FacilityLicensingGeneral: <FaBuilding />
};
const MinistryofIndustry = () => {
    const { t } = useTranslation();
  const data: RequirmentData[] = dataKeys.map((key) => ({
    service: t(`ministryOfIndustry.${key}.service`),
    requirements: t(`ministryOfIndustry.${key}.requirements`, { returnObjects: true }) as string[],
    icon: Icons[key]
  }));
    return (
        <Data data={data}/>
    );
}



export default MinistryofIndustry;
