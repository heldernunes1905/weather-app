import { LanguageOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("EN");
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    setOpen(!open);
  };

  return (
    <div className="relative">
      <div className="text-white flex items-center font-[SpaceGroteskt]">
        <button onClick={() => setOpen(!open)} className="gap-2 flex flex-row">
          <LanguageOutlined />
          <div>{currentLang}</div>
        </button>
      </div>
      {open && (
        <div className="absolute top-full z-[999] pt-3">
          <div className="bg-neutral-900/50">
            <button
              onClick={() => changeLanguage("EN")}
              className="text-white block w-full text-left px-4 py-2 hover:bg-gray-200 focus:outline-none"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("PT")}
              className="text-white block w-full text-left px-4 py-2 hover:bg-gray-200 focus:outline-none"
            >
              PT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
