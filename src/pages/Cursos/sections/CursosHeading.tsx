import Badge from '../../../components/atoms/Badge';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function CursosHeading() {
  return (
    <>
      {/*Results */}
      <div className="text-gray-500 text-base leading-7 max-md:max-w-full">200+ Resultats de “UX UI”</div>

      <div className="justify-between items-stretch flex w-full gap-5 mt-6 border-b border-gray-200 pb-6 max-md:max-w-full max-md:flex-wrap">
        {/*Badges*/}
        <span className="items-center flex gap-2">
          <Badge>Exemple filtre</Badge>
          <Badge>Exemple filtre 2</Badge>
          <button className="text-gray-500 text-sm leading-5  my-auto hover:text-pink-600">Borrar filtres</button>
        </span>
        {/*Order*/}
        <span className="items-stretch self-center flex gap-2.5 my-auto">
          <div className="text-gray-500 text-base leading-7 ">Ordenar per:</div>
          <span className="items-stretch flex justify-between gap-1">
            <div className="text-gray-500 text-base font-bold leading-7">Popularitat</div>
            <ChevronDownIcon className="h-[20px] w-[20px] self-center pb-1 rounded-lg text-gray-500 font-bold" />
          </span>
        </span>
      </div>
    </>
  );
}
