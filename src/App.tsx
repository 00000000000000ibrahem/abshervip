import { useEffect } from "react";
import i18n from "i18next";
import { Outlet } from "react-router-dom";

function App() {

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;