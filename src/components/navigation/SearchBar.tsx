import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useSearch } from '../../context/SearchContext';

export default function SearchBar() {
  const { setSearchFilter } = useSearch();

  return (
    <div className="w-[25rem] mx-auto">
      <form className="flex items-center">
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="justify-center text-gray-500 aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
          </div>
          <input
            type="text"
            id="search"
            placeholder="Cercador de cursos"
            onChange={(e) => {
              setSearchFilter(e.target.value);
            }}
            className="bg-slate-100 text-slate-600 border border-gray-100 appearance-none block w-full text-sm rounded-lg py-3 px-4 focus:bg-gray-50 focus:border-slate-400 focus:outline-none  pl-10 p-2.5"
            required
          />
        </div>
      </form>
    </div>
  );
}
