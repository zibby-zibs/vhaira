import Navbar from "@/components/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainAppLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainAppLayout;
