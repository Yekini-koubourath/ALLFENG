import React from "react";
import Navbar from "./Navbar";

// ✅ Définition du type des props
type UserviewProps = {
  children: React.ReactNode;
  className?: string;
};

// ✅ Composant fonctionnel Userview
const Userview = ({ children, className }: UserviewProps) => {
  return (
    <div className={className ?? ""}>
      {/* Navbar commune à toutes les pages utilisant Userview */}
      <Navbar />
      {/* Contenu spécifique à chaque page */}
      <main>{children}</main>
    </div>
  );
};

export default Userview;
