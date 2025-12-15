"use client";

import Image from "next/image";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";

export default function ProfileCard() {
  const [profile] = useState({
    name: "YEKINI Koubourath",
    email: "yekinikoubou@gmail.com",
    discord: "ALLFENG#2025",
    tel: "+229 01 50 49 58 32",
    bio: "Passionnée par la langue anglaise et toujours prête à apprendre quelque chose de nouveau. J’aime relever des défis, découvrir des faits insolites et tester mes connaissances. Curieuse, souriante et motivée, je suis là pour s’amuser tout en me dépassant !",
  });

  return (
    <div className="max-w-sm bg-white p-6 rounded-xl shadow-md mx-auto mt-12 mb-12 text-center">
      {/* Photo */}
      <div className="mx-auto w-36 h-36 relative">
        <Image
          src="/images/ma-photo.jpg"
          alt="Ma photo"
          fill
          className="rounded-full object-cover border-3 border-gray-200 shadow-md"
        />
      </div>

      {/* Nom */}
      <h1 className="mt-5 text-2xl font-bold text-black">{profile.name}</h1>
            <p className="text-gray-600"> <FaEnvelope style={{top:"22px",position:"relative"}}/>  {profile.email}</p>
            <p className="text-gray-600"><FaDiscord style={{top:"22px",position:"relative"}}/> {profile.discord}</p>
            <p className="text-gray-600"><FaPhone style={{top:"22px",position:"relative"}}/> {profile.tel}</p>

      {/* Bio */}
      <p className="mt-4 text-gray-600 leading-relaxed text-base">{profile.bio}</p>
    
    </div>
  );
}
