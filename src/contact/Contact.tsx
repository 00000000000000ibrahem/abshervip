import { useState, type ChangeEvent } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Homefoure from "../home/Homefoure";
import Whatsupp from "../whatsup/Whatsupp";

const Contact = () => {
const { t } = useTranslation();
const [formData, setFormData] = useState({
  first: "",
  last: "",
  phone: "",
  email: "",
  message: "",
});

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();

  const { first, last, phone, email, message } = formData;

  const text = `
الاسم الاول: ${first}
الاسم الاخر:${last}
الرقم:${phone}
الايميل: ${email}
الرسالة: ${message}
  `;

  const whatsappNumber = "963932156083";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

return (
<div>
<div className="w-full h-[80vh] relative">
<div className="w-full h-full bg-[url('/pic/dama88.jpg')] bg-cover bg-center flex items-center justify-center"style={{ filter: 'brightness(0.8)' }}></div>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<h1 className="p-8 rounded-xl text-white/90 text-5xl font-bold mb-6">
{t("contact.title")}
</h1>
</div>
</div>

<div className="relative flex flex-col md:flex-row -mt-52 w-[95%] md:w-[70%] mx-auto h-auto md:h-[500px] border-[3px] border-color rounded-4xl
items-center justify-around
bg-white backdrop-blur-sm shadow-lg
transform transition-transform duration-400 hover:shadow-xl overflow-hidden gap-4 md:gap-0">

<div className="w-full md:w-[50%] h-auto md:h-[100%]  bg-black/10">
<h1 className="text-center text-2xl md:text-4xl  font-semibold p-4">{t("contact.title")}</h1>
<p className="text-sm md:text-2xl font-semibold p-4 text-black/70">{t("contact.description")}</p>

<div className="bg-gray/10">

<div className="flex items-center gap-4 p-6 ">
<span className="w-[40px] h-[40px] bg-color flex items-center justify-center rounded-full">
<FiMapPin className="text-3xl text-white" />
</span>
<div>
<h2 className="font-semibold text-2xl" >{t("contact.headOffice")}</h2>
<a 
href="https://www.google.com/maps?q=ساحة+عرنوس+دمشق" 
target="_blank" 
rel="noopener noreferrer"
className="text-xl text-black/70"
>{t("contact.place")}</a>
</div>
</div>

<div className="flex items-center gap-4 p-6 h-[60px]">
<span className="w-[40px] h-[40px] bg-color flex items-center justify-center rounded-full">
<FiMail className="text-3xl text-white" />
</span>
<div>
<h2 className="font-semibold text-2xl">{t("contact.emailUs")}</h2>
<a href="mailto:abshervip27@gmail.com" className="text-xl text-black/70">
{t("contact.email")}
</a>
</div>
</div>

<div className="flex items-center gap-4 p-6 h-[60px]">
<span className="w-[40px] h-[40px] bg-color flex items-center justify-center rounded-full">
<FiPhone className="text-3xl text-white" />
</span>
<div>
<h2 className="font-semibold text-2xl">{t("contact.callUs")}</h2>
<a href="tel:+963932156083" className="text-xl text-black/70 hover:text-gold">
{t("contact.phone")}
</a>
</div>
</div>

</div>
</div>

<div className="w-[50%] h-[100%] bg-white">
<h1 className="text-center text-4xl font-semibold p-8">{t("contact.title")}</h1>

<form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>

<div className="flex">
<input type="text" placeholder={t("contact.form.first")} name="first"
value={formData.first}
onChange={handleChange}
className="bg-gray-200 text-center text-gray-800 m-2 h-[40px] w-[90%] md:w-[70%] text-base md:text-xl"/>

<input type="text" placeholder={t("contact.form.last")} name="last"
value={formData.last}
onChange={handleChange}
className="bg-gray-200 text-center text-gray-800 m-2 h-[40px] w-[90%] md:w-[70%] text-base md:text-xl"/>
</div>

<div className="flex">
<input type="text" placeholder={t("contact.form.phone")}  name="phone"
value={formData.phone}
onChange={handleChange}
className="bg-gray-200 text-center text-gray-800 m-2 h-[40px] w-[90%] md:w-[70%] text-base md:text-xl"/>

<input type="text" placeholder={t("contact.form.email")} name="email"
value={formData.email}
onChange={handleChange}
className="bg-gray-200 text-center text-gray-800 m-2 h-[40px] w-[90%] md:w-[70%] text-base md:text-xl"/>
</div>

<input type="text" placeholder={t("contact.form.message")} name="message"
value={formData.message}
onChange={handleChange}
className="h-[80px] bg-gray-200 text-center text-gray-800 m-2 w-[90%] md:w-[70%] text-base md:text-xl"/>

<input type="submit" value={t("contact.form.submit")}
className="bg-color text-center text-white m-2 h-[40px] w-[90%] md:w-[70%] text-base md:text-xl w-[70%] h-[40px] rounded-full"/>

</form>
</div>

</div>

<Homefoure/>
<Whatsupp/>
</div>
);
};

export default Contact;