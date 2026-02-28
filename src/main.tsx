// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home.tsx'
// import Immigration from './serviceProvider/Immigration.tsx'
// import CommercialRegisterServices from './serviceProvider/CommercialRegisterServices.tsx'
// import CivilStatus from './serviceProvider/CivilStatus.tsx'
// import MinistryofIndustry from './serviceProvider/MinistryofIndustry.tsx'
// import RealEstateOwnership from './serviceProvider/RealEstateOwnership.tsx'
// import MinistryofFinance from './serviceProvider/MinistryofFinance.tsx'
// import RealEstateAffairs from './serviceProvider/RealEstateAffairs.tsx'
// import MinistryofTransportation from './serviceProvider/MinistryofTransportation.tsx'
// import MinistryofTourism from './serviceProvider/MinistryofTourism.tsx'
// import RealEstateDocuments from './serviceProvider/RealEstateDocuments.tsx'
// import About from './about/About.tsx'
// import Contact from './contact/Contact.tsx'
// import Services from './pages/Services.tsx'
// import Layout from './layout/Layout.tsx'
// import "./i18n";
// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,   
//     children: [
//       { index: true, element: <Home /> },
//       { path: "services", element: <Services /> },
//       { path: "immigration", element: <Immigration /> },
//       { path: "commercial-register-services", element: <CommercialRegisterServices /> },
//       { path: "civil-status", element: <CivilStatus /> },
//       { path: "ministry-of-industry", element: <MinistryofIndustry /> },
//       { path: "real-estate-ownership", element: <RealEstateOwnership /> },
//       { path: "ministry-of-finance", element: <MinistryofFinance /> },
//       { path: "real-estate-affairs", element: <RealEstateAffairs /> },
//       { path: "ministry-of-transportation", element: <MinistryofTransportation /> },
//       { path: "ministry-of-tourism", element: <MinistryofTourism /> },
//       { path: "real-estate-documents", element: <RealEstateDocuments /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={route}/>
//   </StrictMode>
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './layout/Layout.tsx'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import Immigration from './serviceProvider/Immigration.tsx'
import CommercialRegisterServices from './serviceProvider/CommercialRegisterServices.tsx'
import CivilStatus from './serviceProvider/CivilStatus.tsx'
import MinistryofIndustry from './serviceProvider/MinistryofIndustry.tsx'
import RealEstateOwnership from './serviceProvider/RealEstateOwnership.tsx'
import MinistryofFinance from './serviceProvider/MinistryofFinance.tsx'
import RealEstateAffairs from './serviceProvider/RealEstateAffairs.tsx'
import MinistryofTransportation from './serviceProvider/MinistryofTransportation.tsx'
import MinistryofTourism from './serviceProvider/MinistryofTourism.tsx'
import RealEstateDocuments from './serviceProvider/RealEstateDocuments.tsx'
import About from './about/About.tsx'
import Contact from './contact/Contact.tsx'
import "./i18n";

// تعريف الرواتر باستخدام HashRouter
const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'immigration', element: <Immigration /> },
      { path: 'commercial-register-services', element: <CommercialRegisterServices /> },
      { path: 'civil-status', element: <CivilStatus /> },
      { path: 'ministry-of-industry', element: <MinistryofIndustry /> },
      { path: 'real-estate-ownership', element: <RealEstateOwnership /> },
      { path: 'ministry-of-finance', element: <MinistryofFinance /> },
      { path: 'real-estate-affairs', element: <RealEstateAffairs /> },
      { path: 'ministry-of-transportation', element: <MinistryofTransportation /> },
      { path: 'ministry-of-tourism', element: <MinistryofTourism /> },
      { path: 'real-estate-documents', element: <RealEstateDocuments /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);