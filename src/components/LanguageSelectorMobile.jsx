import { LanguageOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelectorMobile = ({ setClose }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("EN");
  const [open, setOpen] = useState(false);

  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    setOpen(!open);
    setClose();
  };

  return (
    <div className="relative">
      <div className="text-white flex items-center ">
        <button onClick={() => setOpen(!open)} className="gap-2 flex flex-row">
          <LanguageOutlined />
          <div className="flex flex-row">
            <button
              onClick={() => changeLanguage("EN")}
              className="text-white block w-full text-left  hover:bg-gray-200 focus:outline-none"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("PT")}
              className="text-white block w-full text-left px-2 hover:bg-gray-200 focus:outline-none"
            >
              PT
            </button>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelectorMobile;
