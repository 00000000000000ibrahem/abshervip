import { FaWhatsapp } from "react-icons/fa";

export default function Whatsupp() {
  const phoneNumber = "+963932156083"; // حط رقمك هنا
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("مرحبا، لدي استفسار")}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 
        bg-green-500 hover:bg-green-600 
        text-white p-4 rounded-full 
        shadow-lg flex items-center justify-center 
        transition-all duration-300 transform hover:scale-110
        z-50
      "
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
