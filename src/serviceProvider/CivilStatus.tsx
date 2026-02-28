import { useTranslation } from "react-i18next";import Data from "../components/Data"
import type { RequirmentData } from '../interface/Interface';
import { FaBaby, FaExchangeAlt, FaFileAlt, FaIdCard, FaUserFriends, FaUsers } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineUsers } from 'react-icons/hi2';
import { MdAssignment, MdBadge, MdChildCare, MdDone, MdFamilyRestroom, MdMenuBook, MdPerson, MdPersonOff } from 'react-icons/md';
import type { JSX } from "react";
 const Icons: { [key: string]: JSX.Element } = {
  IdentityCard: <FaIdCard />,
  FamilyRegister: <MdMenuBook />,
  BirthRegistration: <FaBaby />,
  MarriageRegistration: <FaUserFriends />,
  IndividualCivilRegistryExtract: <HiOutlineDocumentText />,
  FamilyCivilRegistryExtract: <FaUsers />,
  ResidencyTransfer: <FaExchangeAlt />,
  RegistrationOfBirth: <MdChildCare />,
  RegistrationOfMarriage: <MdFamilyRestroom />,
  RegistrationOfDivorce: <HiOutlineUsers />,
  RegistrationOfDeath: <MdPersonOff />,
  CivilRecordsAndDocuments: <FaFileAlt />,
  FamilyCivilStatusExtract: <MdBadge />,
  BirthMarriageDivorceDeathCertificate: <MdAssignment />,
  TransferOfCivilRegistrationEntry: <MdPerson />,
  RegistrationOfSyrianNationality: <MdDone />
};
const dataKeys = [
  "IdentityCard",
  "FamilyRegister",
  "BirthRegistration",
  "MarriageRegistration",
  "IndividualCivilRegistryExtract",
  "FamilyCivilRegistryExtract",
  "ResidencyTransfer",
  "RegistrationOfBirth",
  "RegistrationOfMarriage",
  "RegistrationOfDivorce",
  "RegistrationOfDeath",
  "CivilRecordsAndDocuments",
  "FamilyCivilStatusExtract",
  "BirthMarriageDivorceDeathCertificate",
  "TransferOfCivilRegistrationEntry",
  "RegistrationOfSyrianNationality"
];
const CivilStatus = () => {
    const { t } = useTranslation();
  const data: RequirmentData[] = dataKeys.map((key) => ({
  service: t(`civilStatus.${key}.service`),
  requirements: t(`civilStatus.${key}.requirements`, { returnObjects: true }) as string[],
  icon: Icons[key]
}));
      
    return(
        <Data data={data}/>
    )
}

export default CivilStatus;
