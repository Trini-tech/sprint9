import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import ciberLogo from '../../public/ciberlogo.svg';
import bcnActivaLogo from '../../public/BCNActiva.png';
import FacebookLogo from '../../public/FacebookLogo.svg';
import TwitterLogo from '../../public/TwitterLogo.svg';
import InstagramLogo from '../../public/InstagramLogo.svg';

export default function Footer() {
  return (
    <div className="justify-center items-center self-stretch bg-slate-100 flex w-full flex-col px-28 py-12 max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch mt-6 max-md:max-w-full">
        {/* Newsletter form */}
        <div className="justify-between grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <div className="text-blue-950 text-2xl font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">Segueix la nostra newsletter i estigues al dia de l'oferta de cursos disponibles</div>
          <div className="w-full justify-end ">
            <form className="flex items-center">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <EnvelopeIcon className="justify-center text-gray-500 aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
                </div>
                <input type="email" id="email" className="flex text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:border-slate-600 focus:outline-none  appearance-none  w-full text-sm py-3 px-4 pl-10 p-2.5" placeholder="Introdueix el teu correu" required />
              </div>
              <button type="submit" className=" w-2/4 justify-stretch py-3 px-5  text-sm font-medium text-center text-white cursor-pointer bg-pink-600 border border-gray-300 rounded-none rounded-r-lg   ">
                Subscriu-m'hi
              </button>
            </form>
          </div>
        </div>
        <div className="justify-between items-stretch flex w-full gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="items-start flex flex-col gap-1 px-1">
            <div className="flex gap-5">
              <div className="self-stretch">
                <img src={ciberLogo} className="logo" alt="Cibernarium logo" />
              </div>
              <div>
                <img src={bcnActivaLogo} className="logo" alt="Barcelona Activa logo" />
              </div>
            </div>
            <div className="text-slate-600 text-sm self-stretch mt-7">Cibernàrium és una xarxa de centres de Barcelona on s'imparteix formació tecnològica de tots els nivells.</div>
            <div className="items-stretch self-stretch flex gap-4 mt-8 pr-20 max-md:pr-5">
              <img src={TwitterLogo} className="logo" alt="Twitter logo" />
              <img src={FacebookLogo} className="logo" alt="Facebook logo" />
              <img src={InstagramLogo} className="logo" alt="Instagram logo" />
            </div>
          </div>
          <div className="self-start max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-blue-950 text-sm font-bold leading-5 whitespace-nowrap">Cibernàrium</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Cursos</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Centres</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Instructors</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">FAQ</div>
                  <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Normes d'inscripció</div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-blue-950 text-sm font-bold leading-5 whitespace-nowrap">Termes i condicions</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Avís legal</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Privacitat</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Configuració de cookies</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Sitemap</div>
                  <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Declaració d'accessibilitat</div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-10">
                  <div className="text-blue-950 text-sm font-bold leading-5 whitespace-nowrap">Contacte</div>

                  <span className="items-center flex justify-between gap-4 mt-4">
                    <EnvelopeIcon className=" text-slate-600 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                    <div className="text-slate-600 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">info@cibernarium.cat</div>
                  </span>

                  <span className="items-center flex justify-between gap-4 mt-4">
                    <PhoneIcon className=" text-slate-600 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                    <div className="text-slate-600 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">900 533 175</div>
                  </span>
                  <div className="text-pink-600 text-xs leading-5 whitespace-nowrap mt-1">De dilluns a divendres de 9 a 18h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 shrink-0 h-px mt-16 max-md:max-w-full max-md:mt-10" />
        <div className="text-gray-700 text-sm font-medium leading-5 mt-10 max-md:max-w-full">© 2024 Barcelona Activa</div>
      </div>
    </div>
  );
}
