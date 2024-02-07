import Badge from '../../../components/atoms/Badge';
/* import { ChevronDownIcon } from '@heroicons/react/20/solid';*/
import { useSearch } from '../../../context/SearchContext';

export default function CoursesHeading() {
  const { checkedFilters, setCheckedFilters, searchFilter, setSearchFilter, coursesToShowLength } = useSearch();
  function handleClearFilters() {
    setCheckedFilters({ selections: [] });
    setSearchFilter('');
  }

  return (
    <>
      {/*Results */}
      <div className="text-gray-500 text-base max-md:max-w-full">
        {coursesToShowLength} Resultat/s {searchFilter.length > 0 && `de "${searchFilter}"`}
      </div>
      <div className="justify-start items-stretch flex w-full gap-5 mt-4 border-b border-gray-200 pb-6 max-md:max-w-full max-md:flex-wrap">
        {/*Badges*/}
        {checkedFilters.selections.length > 0 && (
          <span className="items-center flex gap-2 flex-wrap">
            {checkedFilters.selections.map((fil) => (
              <Badge key={fil}>{fil}</Badge>
            ))}
          </span>
        )}
        {(checkedFilters.selections.length > 0 || searchFilter.length > 0) && (
          <button className="text-gray-500 text-sm my-auto hover:text-pink-600" onClick={handleClearFilters}>
            Netejar búsqueda
          </button>
        )}
        {/*Order*/}
        {/*         <span className="flex items-stretch gap-2.5 my-auto">
          <div className="text-gray-500 text-base leading-7 ">Ordenar per:</div>
          <span className="items-stretch flex justify-between gap-1">
            <div className="text-gray-500 text-base font-bold leading-7">Popularitat</div>
            <ChevronDownIcon className="h-[20px] w-[20px] self-center pb-1 rounded-lg text-gray-500 font-bold" />
          </span>
        </span> */}
      </div>
    </>
  );
}
