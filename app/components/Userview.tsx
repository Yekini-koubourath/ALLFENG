import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Définition des props
type UserviewProps = {
  children: React.ReactNode;
  className?: string;
};

const Userview = ({ children, className }: UserviewProps) => {
  return (
    // Structure Flex pour forcer le footer en bas
    <div className={`min-h-screen flex flex-col ${className ?? ""}`}>
      
      {/* Header */}
      <Navbar />

      {/* Contenu qui prend tout l’espace disponible */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer en bas */}
      <Footer />
    </div>
  );
};

export default Userview;


