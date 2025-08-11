import React from "react";
import { useTranslation } from "react-i18next";

export default function Borrar({ namespace }) {
  const { t } = useTranslation(namespace);

  const titles = t("title");

  return <div>{titles}</div>;
}
