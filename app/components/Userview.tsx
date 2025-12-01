import React from "react";
import Navbar from "./Navbar";

// ✅ Définition du type des props
type UserviewProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // <-- ajouté pour supporter style inline
};

// ✅ Composant fonctionnel Userview
const Userview = ({ children, className, style }: UserviewProps) => {
  return (
    <div className={className ?? ""} style={style}>
      {/* Navbar commune à toutes les pages utilisant Userview */}
      <Navbar />
      {/* Contenu spécifique à chaque page */}
      <main>{children}</main>
    </div>
  );
};

export default Userview;
