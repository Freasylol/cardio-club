import React from "react";
import styles from "../styles/Settings.module.css";
import HeaderText from "./HeaderText";

import exclamationMark from "../../public/images/exclamation.png";

import DescriptionText from "./DescriptionText";
import Input from "./Input";

import Image from "next/image";
import Button from "./Button";

type SubscriptionStatus = "active" | "inactive";

interface ProfileProps {
  status: SubscriptionStatus;
}

const statusLabels: Record<SubscriptionStatus, string> = {
  active: "Активна",
  inactive: "Неактивна",
};

export default function Settings() {
  return (
    <div className={styles.settings}>
      <HeaderText color="#000" className={styles.settings__header}>
        Настройки
      </HeaderText>
      <div className={styles.settings__input__wrapper}>
        <DescriptionText className={styles.settings__label}>Имя</DescriptionText>
        <Input value="Валерия" className={styles.settings__input}></Input>
      </div>
      <div className={styles.settings__input__wrapper}>
        <DescriptionText className={styles.settings__label}>Фамилия</DescriptionText>
        <Input value="Яворская" className={styles.settings__input}></Input>
      </div>
      <div className={styles.settings__input__wrapper}>
        <DescriptionText className={styles.settings__label}>E-mail</DescriptionText>
        <Input value= "yaworskayaphoto@gmail.com" disabled={true} className={styles.settings__input}></Input>
      </div>
      <Button fontSize=".9375rem">Сохранить</Button>
      <HeaderText color="#000" className={styles.password}>
        Пароль
      </HeaderText>
      <div className={styles.settings__input__wrapper}>
        <DescriptionText className={styles.settings__label}>Имя</DescriptionText>
        <Input placeholder="Старый пароль" className={styles.settings__input}></Input>
      </div>
      <div className={styles.settings__input__wrapper}>
        <DescriptionText className={styles.settings__label}>Фамилия</DescriptionText>
        <Input placeholder="Новый пароль" className={styles.settings__input}></Input>
      </div>
      <div className={styles.settings__input__wrapper}>
        <DescriptionText className={styles.settings__label}>E-mail</DescriptionText>
        <Input placeholder= "Повтор нового пароля" className={styles.settings__input}></Input>
      </div>
      <Button fontSize=".9375rem">Сохранить</Button>
    </div>
    
  );
}
