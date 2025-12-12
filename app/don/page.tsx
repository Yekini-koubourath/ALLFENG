"use client";
import Userview from "../components/Userview";

export default function DonatePage() {
  return (
    <Userview className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-white">
      {/* Navbar reste en haut si tu en as une */}
      <header>
        {/* ton code de navbar ici */}
      </header>

      {/* Contenu principal centré */}
      <main className="flex-grow flex items-center justify-center mt-24">
        <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 text-center">
          <h1 className="text-3xl font-bold text-amber-700 mb-4">
            Soutenez mon projet de Quiz 🎓
          </h1>

          <p className="text-gray-700 mb-6">
            Bonjour ! Je suis stagiaire en informatique et étudiante en anglais.
            J’ai créé un projet de Quiz interactif pour apprendre en s’amusant.
            Si mon travail vous plaît, vous pouvez m’encourager avec un petit
            don ❤️.
          </p>

          <div className="flex justify-center">
            <a
              href="https://me.fedapay.com/wlOMRxfc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-amber-700 transition"
            >
              Faire un Don 💛
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            En cliquant sur le bouton, vous serez redirigé vers FedaPay pour
            finaliser votre paiement.
          </p>
        </div>
      </main>

      {/* Footer reste en bas */}
      <footer>
        {/* ton code de footer ici */}
      </footer>
    </Userview>
  );
}
