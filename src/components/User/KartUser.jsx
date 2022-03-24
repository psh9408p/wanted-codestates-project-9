import React from "react";
import Profile from "./Profile";
import Stats from "./Stats";
import VsBar from "./VsBar";

export default function KartUser() {
  return (
    <div>
      <Profile />
      <VsBar />
      <Stats />
    </div>
  );
}
