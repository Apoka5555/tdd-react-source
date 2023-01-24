import { useTranslation } from "react-i18next";
import englandIcon from "../assets/united-kingdom.png";
import turkeyIcon from "../assets/turkey.png";

const LanguageSelector = (props) => {
  const { i18n } = useTranslation();

  return (
    <>
      <img
        src={turkeyIcon}
        title="Türkçe"
        onClick={() => i18n.changeLanguage("tr")}
        alt="Turkish Flag"
        width={24}
        height={24}
        style={{ cursor: "pointer", marginRight: "5px" }}
      />
      <img
        src={englandIcon}
        title="English"
        onClick={() => i18n.changeLanguage("en")}
        alt="Great Britain Flag"
        width={24}
        height={24}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default LanguageSelector;
