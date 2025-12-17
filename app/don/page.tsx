"use client";
import Userview from "../components/Userview";

export default function DonatePage() {
  return (
    <Userview className="min-h-screen flex flex-col ">
      {/* Navbar reste en haut si tu en as une */}
      <header>
        {/* ton code de navbar ici */}
      </header>
<h1 className="text-5xl font-bold text-white text-center bg-amber-800 pb-7">
      SOUTENEZ MON PROJET 🎓
          </h1>
      {/* Contenu principal centré */}
      <main className="flex-grow flex items-center justify-center mt-15">
        <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 text-center">
          

          <p className="text-gray-700 mb-6">
           Vous aimez le projet et souhaitez contribuer à son évolution ?
Votre don nous aide à :

Ajouter de nouvelles fonctionnalités et contenus.

Maintenir le site et garantir une expérience fluide.

Inspirer et motiver toujours plus d’apprenants.

💛 Chaque contribution, petite ou grande, fait la différence !
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
          <p>Merci pour votre soutien !</p>
        </div>
      </main>

      {/* Footer reste en bas */}
      <footer>
        {/* ton code de footer ici */}
      </footer>
    </Userview>
  );
}
