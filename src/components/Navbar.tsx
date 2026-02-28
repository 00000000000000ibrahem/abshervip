// import  { useState } from "react";
// import { Link } from "react-router-dom";
// import { IoCloseSharp } from "react-icons/io5";
// import { PiListLight } from "react-icons/pi";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";

// const Navbar = () => {
//   const { t } = useTranslation();
//   const [open, setOpen] = useState(false);

  

//   const changeLanguage = (lang: string) => {
//     i18n.changeLanguage(lang);
//     setOpen(false); 
//   };

//   return (
//     <nav className="top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
//       <div className="flex items-center justify-between px-6 py-3">

//         {/* Logo */}
//         <img src="/pic/logo3.png" alt="logo" className="w-[90px]" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link to="/" className="text-white text-lg font-medium hover:text-gray-300">{t("navbar.home")}</Link>
//           <Link to="/services" className="text-white text-lg font-medium hover:text-gray-300">{t("navbar.services")}</Link>
//           <Link to="/about" className="text-white text-lg font-medium hover:text-gray-300">{t("navbar.about")}</Link>
//           <Link to="/contact" className="text-white text-lg font-medium hover:text-gray-300">{t("navbar.contact")}</Link>

//           {/* Language Buttons */}
//           <button onClick={() => changeLanguage("ar")} className="flex items-center justify-center gap-2
// border p-1 md:p-2 
// rounded-xl font-semibold 
// text-sm md:text-md lg:text-md 
// text-white bg-black/50 ">AR</button>
//           <button onClick={() => changeLanguage("en")} className="flex items-center justify-center gap-2
// border p-1 md:p-2 
// rounded-xl font-semibold 
// text-sm md:text-md lg:text-md 
// text-white bg-black/50 ">EN</button>

//           <button
//             className="text-white text-sm font-medium rounded-full bg-yellow-500 px-4 py-2 hover:bg-yellow-600 transition"
//             onClick={() => window.open("https://wa.me/963932156083", "_blank")}
//           >
//             WhatsApp
//           </button>
//         </div>

//         {/* Mobile Button */}
//         <div className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
//           {open ? <IoCloseSharp size={30} /> : <PiListLight size={30} />}
//         </div>

//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden transition-all duration-500 overflow-hidden 
//         ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-black/80 backdrop-blur-md`}
//       >
//         <div className="flex flex-col items-center py-6 gap-4">
//           <Link to="/" onClick={() => setOpen(false)} className="text-white text-lg">{t("navbar.home")}</Link>
//           <Link to="/services" onClick={() => setOpen(false)} className="text-white text-lg">{t("navbar.services")}</Link>
//           <Link to="/about" onClick={() => setOpen(false)} className="text-white text-lg">{t("navbar.about")}</Link>
//           <Link to="/contact" onClick={() => setOpen(false)} className="text-white text-lg">{t("navbar.contact")}</Link>

//           <div className="flex gap-2 mt-2">
//             <button onClick={() => changeLanguage("ar")} className="text-white px-3 py-1 bg-gray-700 rounded">AR</button>
//             <button onClick={() => changeLanguage("en")} className="text-white px-3 py-1 bg-gray-700 rounded">EN</button>
//           </div>

//           <button
//             className="text-white text-sm font-medium rounded-full bg-yellow-500 px-4 py-2 mt-4 hover:bg-yellow-600 transition"
//             onClick={() => window.open("https://wa.me/963932156083", "_blank")}
//           >
//             WhatsApp
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <nav className="relative top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-[90px]">
  <div className="flex items-center justify-between px-6 py-4 h-full">
    {/* Logo */}
    <div className="flex-shrink-0">
      <img src="/pic/logo3.png" alt="logo" className="w-[90px]" />
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-6 h-full">
      <Link to="/" className="text-white text-lg font-medium hover:text-gray-300">{t("navbar.home")}</Link>
      <Link to="/services" className="text-white text-lg font-medium hover:text-gray-300">{t("navbar.services")}</Link>
      <Link to="/about" className="text-white text-lg font-medium hover:text-gray-300">{t("navbar.about")}</Link>
      <Link to="/contact" className="text-white text-lg font-medium hover:text-gray-300">{t("navbar.contact")}</Link>

      {/* Language Buttons */}
      <button onClick={() => changeLanguage("ar")} className="flex items-center justify-center gap-2 border p-1 md:p-2 rounded-xl font-semibold text-sm md:text-md lg:text-md text-white bg-black/50">AR</button>
      <button onClick={() => changeLanguage("en")} className="flex items-center justify-center gap-2 border p-1 md:p-2 rounded-xl font-semibold text-sm md:text-md lg:text-md text-white bg-black/50">EN</button>

      <button className="text-white text-sm font-medium rounded-full bg-yellow-500 px-4 py-2 hover:bg-yellow-600 transition" onClick={() => window.open("https://wa.me/963932156083", "_blank")}>WhatsApp</button>
    </div>

    {/* Mobile Button */}
    <div className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
      {open ? <IoCloseSharp size={30} /> : <PiListLight size={30} />}
    </div>
  </div>

  {/* Mobile Menu */}
  <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-black/80 backdrop-blur-md z-40 overflow-hidden`}>
    <div className="flex flex-col items-center py-6 gap-4">
      <Link to="/" onClick={() => setOpen(false)} className="text-white text-lg">{t("navbar.home")}</Link>
      <Link to="/services" onClick={() => setOpen(false)} className="text-white text-lg">{t("navbar.services")}</Link>
      <Link to="/about" onClick={() => setOpen(false)} className="text-white text-lg">{t("navbar.about")}</Link>
      <Link to="/contact" onClick={() => setOpen(false)} className="text-white text-lg">{t("navbar.contact")}</Link>

      <div className="flex gap-2 mt-2">
        <button onClick={() => changeLanguage("ar")} className="text-white px-3 py-1 bg-gray-700 rounded">AR</button>
        <button onClick={() => changeLanguage("en")} className="text-white px-3 py-1 bg-gray-700 rounded">EN</button>
      </div>

      <button className="text-white text-sm font-medium rounded-full bg-yellow-500 px-4 py-2 mt-4 hover:bg-yellow-600 transition" onClick={() => window.open("https://wa.me/963932156083", "_blank")}>WhatsApp</button>
    </div>
  </div>
</nav>
  );
};

export default Navbar;