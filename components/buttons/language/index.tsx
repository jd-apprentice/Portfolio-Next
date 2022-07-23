import React from "react";
import setLanguage from "next-translate/setLanguage";
import { useRouter } from "next/router";

const ChangeLanguage = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={async () =>
          await setLanguage(router.locale === "en" ? "es" : "en")
        }
      >
        {router.locale === "en" ? "es".toUpperCase() : "en".toUpperCase()}
      </button>
    </>
  );
}

export default ChangeLanguage;
