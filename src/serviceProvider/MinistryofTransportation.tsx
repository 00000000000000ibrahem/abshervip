import type { RequirmentData } from "../interface/Interface";
import Data from "../components/Data";
import type { JSX } from "react";
import { FaCar, FaCarSide, FaClipboardList, FaIdCard, FaLock, FaTaxi } from "react-icons/fa";
import { MdAutorenew, MdBuild, MdOutlineAttachMoney, MdOutlineFactCheck,  MdSwapHoriz, MdSyncAlt } from "react-icons/md";
import { BsCardList, BsClipboardCheck, BsFileEarmarkText, BsGear } from "react-icons/bs";
import { IoRefresh } from "react-icons/io5";
import { useTranslation } from "react-i18next";
const dataKeys = [
  "NewVehicleRegistration",
  "TransferVehicleOwnership",
  "AnnualLicenseRenewal",
  "ReplacementLicensePlates",
  "ReplacementLostRegistration",
  "VehicleTechnicalInspection",
  "MortgagePlacementRemoval",
  "VehicleSpecsChange",
  "VehicleRegistrationStatement",
  "PublicTransportTransactions",
  "VehicleOwnershipTransactions",
  "VehicleLicensePlateTransactions",
  "MortgageAndLienTransactions",
  "VehicleTechnicalInspectionDetails",
  "DocumentAndRecordTransactions",
  "CategorySpecificTransactions",
  "VehicleSpecificationsModification",
  "ReplacementLostDocuments"
];
const Icons: { [key: string]: JSX.Element } = {
  NewVehicleRegistration: <FaCarSide />,
  TransferVehicleOwnership: <FaCar />,
  AnnualLicenseRenewal: <MdAutorenew />,
  ReplacementLicensePlates: <MdSyncAlt />,
  ReplacementLostRegistration: <FaIdCard />,
  VehicleTechnicalInspection: <MdOutlineFactCheck />,
  MortgagePlacementRemoval: <MdOutlineAttachMoney />,
  VehicleSpecsChange: <MdBuild />,
  VehicleRegistrationStatement: <BsFileEarmarkText />,
  PublicTransportTransactions: <FaTaxi />,
  VehicleOwnershipTransactions: <MdSwapHoriz />,
  VehicleLicensePlateTransactions: <BsFileEarmarkText />,
  MortgageAndLienTransactions: <FaLock />,
  VehicleTechnicalInspectionDetails: <BsCardList />,
  DocumentAndRecordTransactions: <FaClipboardList />,
  CategorySpecificTransactions: <BsClipboardCheck />,
  VehicleSpecificationsModification: <BsGear />,
  ReplacementLostDocuments: <IoRefresh />
};
const MinistryofTransportation = () => {
    const { t } = useTranslation();

  const data: RequirmentData[] = dataKeys.map((key) => ({
    service: t(`ministryOfTransportation.${key}.service`),
    requirements: t(`ministryOfTransportation.${key}.requirements`, { returnObjects: true }) as string[],
    icon: Icons[key]
  }));
    return (
        <Data data={data}/>
    );
}

export default MinistryofTransportation;
