import type { RequirmentData } from "../interface/Interface";
import Data from "../components/Data";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const dataKeys = ["DocumentingCommercialLeaseAgreement"];
const Icons: { [key: string]: React.ReactElement } = {
  DocumentingCommercialLeaseAgreement: <HiOutlineDocumentText />
};

const MinistryofFinance = () => {
  const { t } = useTranslation();

  const data: RequirmentData[] = dataKeys.map((key) => ({
    service: t(`ministryOfFinance.${key}.service`),
    requirements: t(`ministryOfFinance.${key}.requirements`, { returnObjects: true }) as string[],
    icon: Icons[key]
  }));

  return <Data data={data} />;
};

export default MinistryofFinance;