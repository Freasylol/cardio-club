import React from "react";
import styles from "../styles/ProfileSubscription.module.css";

import Rates from "./Rates";

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
