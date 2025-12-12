"use client";

import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    // Script principal Botpress
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Script spécifique à ton bot
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/12/10/10/20251210100920-7Q34BL10.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      if (script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, []);

  return null;
}
