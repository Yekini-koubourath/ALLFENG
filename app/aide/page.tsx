"use client";
import Userview from "@/app/components/Userview";
import {
  FaQuestionCircle,
  FaUser,
  FaGamepad,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

export default function HelpPage() {
  return (
    <Userview>
      <div className="justify-center flex items-center flex-col p-8 max-w-4xl mx-auto space-y-8">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-purple-600 mb-6 flex items-center gap-3">
          <FaQuestionCircle /> Aide & Support
        </h1>

        {/* Section 1 */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500">
            Comment fonctionne le quiz ?
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Chaque lot contient 5 questions.</li>
            <li>Tu dois choisir la bonne réponse parmi 4 propositions.</li>
            <li>À la fin d'un lot, tu vois ton score.</li>
            <li>Si tu fais un score parfait, tu as une animation 🎉</li>
            <li>Après chaque lot, tu peux passer au suivant.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500 flex items-center gap-2">
            <FaUser /> Gestion du profil
          </h2>
          <p className="text-gray-700">
            Dans la page <strong>Profil</strong>, tu peux voir :
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
            <li>Ton avatar</li>
            <li>Tes scores</li>
            <li>Ton niveau</li>
            <li>Ta progression générale en anglais</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500 flex items-center gap-2">
            <FaBook /> Page Lyrics
          </h2>
          <p className="text-gray-700">
            Dans la page <strong>Lyrics</strong>, tu peux regarder des vidéos
            YouTube et lire les paroles en anglais et français pour apprendre
            plus facilement avec la musique.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500 flex items-center gap-2">
            <FaGamepad /> Problèmes fréquents
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
            <li>
              <strong>La vidéo ne s’affiche pas :</strong> vérifie l’ID YouTube.
            </li>
            <li>
              <strong>L’avatar ne s’affiche pas :</strong> assure-toi que
              l’image est dans <code>/public/images</code>.
            </li>
            <li>
              <strong>Le quiz recommence :</strong> pas de backend → les scores
              sont temporaires.
            </li>
          </ul>
        </section>

        {/* Section Contact */}
        <section className="bg-purple-100 border-l-4 border-purple-500 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-purple-600">
            <FaEnvelope /> Besoin d’aide supplémentaire ?
          </h2>
          <p className="text-gray-700 mb-4">Tu peux me contacter :</p>

          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Email :</strong> support@allfeng.com
            </p>
            <p>
              <strong>Discord :</strong> ALLFENG#2025
            </p>
            <p>
              <strong>FAQ :</strong> bientôt disponible
            </p>
          </div>
        </section>
      </div>
    </Userview>
  );
}
