import ciberLogo from '/ciberlogo.svg';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  return (
    <nav className="border-b border-slate-50 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500">
      <div className="justify-between items-stretch self-stretch shadow-sm bg-white flex w-full gap-5 px-28 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="items-stretch flex justify-between gap-6 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-center self-center my-auto">
            <Link to="/">
              <img src={ciberLogo} className="logo" alt="Cibernarium logo" />
            </Link>
          </div>
          <div className="text-slate-600 text-sm font-medium self-center my-auto">
            <Link to="/centres">Centres</Link>
          </div>
          <div className="text-slate-600 text-sm font-medium self-center my-auto">
            <Link to="/cursos">Cursos</Link>
          </div>

          <div className="bg-gray-100 flex gap-2.5 p-3.5 rounded-xl items-start w-[30rem]">
            <MagnifyingGlassIcon className="justify-center text-gray-500 aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
            <div className="text-gray-500 text-sm font-medium items-start">Cercador de cursos</div>
          </div>
        </div>
        <div className="items-center self-center flex justify-between gap-5">
          <div className="justify-center self-center text-slate-600 text-sm font-medium my-auto">Accedeix</div>
          <div className="text-white text-sm font-bold justify-center items-stretch bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)] self-stretch grow px-4 py-3 rounded-lg">Registre</div>
          <div className="items-stretch flex gap-1 my-auto">
            <div className="text-slate-600 text-sm font-medium">cat</div>
            <ChevronDownIcon className="text-slate-600 aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
          </div>
        </div>
      </div>
    </nav>
  );
}
