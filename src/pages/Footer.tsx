
import  { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
  "service_pdn7ka6",      // Service ID 
  "template_hq2i5vm",   // Template ID
  {
    name: "User Name",
    time: new Date().toLocaleString(),
    message: email,
    reply_to: email        
  },
  "GMnCAaLBnhoLeW0cV" // Public Key
)
.then(() => {
  alert("Email sent successfully!");
  setEmail("");
})
.catch((err) => {
  console.error(err);
  alert("Failed to send email. Please try again.");
});
  };

  return (
    <footer className="w-full bg-black/80 text-white pt-16 pb-6 px-6 md:px-20 mt-2">
      
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/20 pb-10">
        
        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <img src="/pic/logo3.png" alt="logo" className="w-[160px]" />
          <p className="text-sm text-gray-300">
           {t("footer.aboutText")}
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-2">
            <a href="" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 transition">
              <FaInstagram size={16} />
            </a>
            <a href="" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 transition">
              <FaLinkedinIn size={16} />
            </a>
            <a href="" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 transition">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h1 className="font-semibold text-lg mb-4">Contact</h1>
          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <MdPhone /> {t("footer.phone")} 
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> {t("footer.email")}
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot />{t("footer.address")}
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h1 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h1>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">{t("footer.links.home")}</li>
            <li className="hover:text-yellow-400 cursor-pointer">{t("footer.links.about")}</li>
            <li className="hover:text-yellow-400 cursor-pointer">{t("footer.links.services")}</li>
            <li className="hover:text-yellow-400 cursor-pointer">{t("footer.links.contact")}</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h1 className="font-semibold text-lg mb-4">{t("footer.services")}</h1>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>{t("footer.service1")}</li>
            <li>{t("footer.service2")}</li>
            <li>{t("footer.service3")}</li>
            <li>{t("footer.service4")}</li>
            <li>{t("footer.service5")}</li>
            <li>{t("footer.service6")}</li>
            <li>{t("footer.service7")}</li>
            <li>{t("footer.service8")}</li>
            <li>{t("footer.service9")}</li>
            <li>{t("footer.service10")}</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h1 className="font-semibold text-lg mb-4">{t("footer.newsletter")} </h1>
          <p className="text-sm text-gray-300 mb-3">
            {t("footer.newsText")}
          </p>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={t("footer.enterEmail")}
              className="p-2 rounded-lg text-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg transition"
            >
              {t("footer.send")}
            </button>
          </form>
        </div>

      </div>

      {/* MAP */}
      <div className="py-8 flex justify-center">
        <iframe
          src="https://www.google.com/maps?q=Arnous+Square+Damascus&output=embed"
          className="w-full md:w-[500px] h-[200px] rounded-2xl"
          loading="lazy"
        />
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-400 border-t border-white/20 pt-4">
        © 2026 All Rights Reserved | Absher Vip
      </div>
    </footer>
  );
};

export default Footer;