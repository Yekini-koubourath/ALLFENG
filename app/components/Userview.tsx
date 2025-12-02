import React from "react";
import Navbar from "./Navbar";

// ✅ Définition des props
type UserviewProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // 👈 ajout ici
};

// 🚀 Composant Userview
const Userview = ({ children, className, style }: UserviewProps) => {
  return (
    <div className={className ?? ""} style={style}>  {/* 👈 ajout ici */}
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Userview;

