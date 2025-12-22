import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-center text-white bg-amber-800 text-sm sm:text-base w-full">
       {/* ================= FOOTER FUN ================= */}  
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">

          {/* LIENS RAPIDES */}
          <div>
            <h3 className="font-bold text-xl mb-4 animate-pulse">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quiz" className="hover:text-black transition-colors">Quiz</Link>
              </li>
              <li>
                <Link href="/lyrics" className="hover:text-black transition-colors">Chansons</Link>
              </li>
              <li>
                <Link href="/motivation" className="hover:text-black transition-colors">Vidéos</Link>
              </li>
            </ul>
          </div>


          {/* CONTACT & MOTIVATION */}
          <div>
            <h3 className="font-bold text-xl mb-4 animate-pulse">Contact</h3>
            <p>yekinikoubou@gmail.com</p>
            <p className="mt-3 italic text-white transition-colors">
              “Apprendre l’anglais n’a jamais été aussi amusant !”
            </p>
          </div>

          {/* CALL TO ACTION */}
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 font-bold text-lg animate-bounce">Prêt à tester vos connaissances ?</p>
            <Link href="/quiz">
              <button className="bg-black text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all shadow-lg">
                Commencez le quiz
              </button>
            </Link>
          </div>

        </div>
{/* 
        <div className="text-center text-sm ">
          &copy; {new Date().getFullYear()} https://allfeng.vercel.app/ by YEKINI Koubourath.
        </div> */}
      </footer>
  );
}
