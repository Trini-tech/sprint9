import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import ciberLogo from '../assets/logos/ciberlogo.svg';
import bcnActivaLogo from '../assets/logos/BCNActiva.png';
import FacebookLogo from '../assets/logos/FacebookLogo.svg';
import TwitterLogo from '../assets/logos/TwitterLogo.svg';
import InstagramLogo from '../assets/logos/InstagramLogo.svg';

export default function Footer() {
  return (
    <div className="flex flex-col w-full bg-slate-100 px-5 md:px-28 py-12 overflow-hidden">
      <div className="flex flex-col w-full gap-10">
        {/* Newsletter form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-center">
          <div className="text-blue-950 text-2xl font-bold leading-7">Segueix la nostra newsletter i estigues al dia de l'oferta de cursos disponibles</div>
          <div className="w-full">
            <form className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
              <div className="relative flex-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <EnvelopeIcon className="text-gray-500 w-4 h-4" />
                </div>
                <input type="email" id="email" placeholder="Introdueix el teu correu" required className="w-full py-3 pl-10 pr-4 text-sm text-gray-900 border border-gray-300 sm:rounded-l-lg sm:rounded-r-none rounded-lg focus:outline-none focus:border-slate-600" />
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-white bg-pink-600 border border-gray-300 sm:rounded-l-none sm:rounded-r-lg rounded-lg hover:bg-pink-700 transition-all">
                Subscriu-m'hi
              </button>
            </form>
          </div>
        </div>

        {/* Logos i informació */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 mt-10">
          <div className="flex flex-col gap-6 md:gap-8 flex-1">
            <div className="flex gap-5 items-center">
              <img src={ciberLogo} className="h-8 w-auto" alt="Cibernarium logo" />
              <img src={bcnActivaLogo} className="h-8 w-auto" alt="Barcelona Activa logo" />
            </div>
            <div className="text-slate-600 text-sm">Cibernàrium és una xarxa de centres de Barcelona on s'imparteix formació tecnològica de tots els nivells.</div>
            <div className="flex gap-4">
              <img src={TwitterLogo} className="h-5 w-auto" alt="Twitter logo" />
              <img src={FacebookLogo} className="h-5 w-auto" alt="Facebook logo" />
              <img src={InstagramLogo} className="h-5 w-auto" alt="Instagram logo" />
            </div>
          </div>

          {/* Menú de links */}
          <div className="flex flex-1 flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-4 flex-1">
              <div className="text-blue-950 text-sm font-bold">Cibernàrium</div>
              <div className="text-slate-600 text-sm">Cursos</div>
              <div className="text-slate-600 text-sm">Centres</div>
              <div className="text-slate-600 text-sm">Instructors</div>
              <div className="text-slate-600 text-sm">FAQ</div>
              <div className="text-slate-600 text-sm">Normes d'inscripció</div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="text-blue-950 text-sm font-bold">Termes i condicions</div>
              <div className="text-slate-600 text-sm">Avís legal</div>
              <div className="text-slate-600 text-sm">Privacitat</div>
              <div className="text-slate-600 text-sm">Configuració de cookies</div>
              <div className="text-slate-600 text-sm">Sitemap</div>
              <div className="text-slate-600 text-sm">Declaració d'accessibilitat</div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="text-blue-950 text-sm font-bold">Contacte</div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="text-slate-600 w-5 h-5" />
                <span className="text-slate-600 text-sm">info@cibernarium.cat</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-slate-600 w-5 h-5" />
                <span className="text-slate-600 text-sm">900 533 175</span>
              </div>
              <div className="text-pink-600 text-xs mt-1">De dilluns a divendres de 9 a 18h</div>
            </div>
          </div>
        </div>

        {/* Separador i copyright */}
        <div className="bg-gray-200 h-px w-full mt-16" />
        <div className="text-gray-700 text-sm font-medium mt-6">© 2024 Barcelona Activa</div>
      </div>
    </div>
  );
}
