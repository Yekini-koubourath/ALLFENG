"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileCard() {

  const [profile, setProfile] = useState({
    name: "YEKINI Koubourath",
    age: "18",
    bio: "Passionnée par les quiz et toujours prête à apprendre quelque chose de nouveau. J’aime relever des défis, découvrir des faits insolites et tester mes connaissances. Curieuse, souriante et motivée, je suis là pour m’amuser tout en me dépassant !"
  });

  return (
    <div style={{
      maxWidth: "450px",
      background: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      textAlign: "center",
    }}>
      
      {/* Photo */}
      <div>
        <Image
          src="/ma-photo.jpg"     // Mets ta photo dans /public
          width={150}
          height={150}
          alt="Ma photo"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #eee",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            left: "30%",
            position: "relative",
          }}
        />
      </div>

      {/* Nom */}
      <h1 style={{ marginTop: "20px", color: "black", fontWeight: "bold", fontSize: "24px" }}>
        {profile.name}
      </h1>

      {/* Âge */}
      <p style={{ color: "black", fontSize: "18px", marginTop: "-5px" }}>
        {profile.age} ans
      </p>

      {/* Bio */}
      <p style={{
        marginTop: "15px",
        color: "#555",
        lineHeight: "1.6",
        fontSize: "16px"
      }}>
        {profile.bio}
      </p>
    </div>
  );
}
