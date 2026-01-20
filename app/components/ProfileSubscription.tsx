import React from "react";
import styles from "../styles/ProfileSubscription.module.css";
import HeaderText from "./HeaderText";

import checkMark from "../../public/images/check.png";
import exclamationMark from "../../public/images/exclamation.png";

import DescriptionText from "./DescriptionText";
import Input from "./Input";
import Image from "next/image";
import Button from "./Button";
import Rates from "./Rates";

import ProfileAside from "./ProfileAside";

type SubscriptionStatus = "active" | "inactive";

interface ProfileProps {
  status: SubscriptionStatus;
}

const statusLabels: Record<SubscriptionStatus, string> = {
  active: "Активна",
  inactive: "Неактивна",
};

export default function ProfileSubscription({ status }: ProfileProps) {
  return (
    
    <Rates status={status}></Rates>
          
        
  );
}
