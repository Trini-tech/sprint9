import { Filter } from '../../../types/types';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useSearch } from '../../../context/SearchContext';

export default function FiltersSection({ courseFilters }: { courseFilters: Filter[] }) {
  const { checkedFilters, setCheckedFilters } = useSearch();

  function handleCheckboxChange(key: string) {
    let sel = checkedFilters.selections;
    const find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    setCheckedFilters({ selections: sel });
  }

  return (
    <div className="w-full max-md:w-full items-stretch grid grid-cols-1 pr-10 max-md:pr-5 py-10">
      {/* Títol */}
      <span className="justify-start items-center flex gap-5">
        <div className="text-blue-950 text-base font-bold pl-2 leading-7 mb-6">Filtrar per</div>
      </span>

      {/* Llista de filtres */}
      {courseFilters.map((coursefilter) => (
        <div key={coursefilter.title} className="border border-solid border-gray-200 min-w-fit flex w-full flex-col mt-6 pt-4 pb-4 px-7 rounded-lg">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="justify-between items-stretch flex gap-5">
                  <span className="flex w-full justify-start rounded-lg text-left text-base font-bold text-blue-950">{coursefilter.title}</span>
                  <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-[20px] w-[20px] rounded-lg text-blue-950 font-bold`} />
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-base text-zinc-800 w-full">
                  <ul className="w-full text-sm">
                    {coursefilter.types.map((type) => (
                      <li key={type} className="w-full">
                        <span className="items-stretch content-center flex-wrap flex gap-2.5 mt-6">
                          <input id={`${type}-checkbox`} type="checkbox" value={`${type}`} className="w-5 h-5 accent-pink-600" checked={checkedFilters.selections.includes(type)} onChange={() => handleCheckboxChange(type)} />
                          <label htmlFor={`${type}-checkbox`} className="text-blue-950 text-sm leading-5 cursor-pointer">
                            {type}
                          </label>
                        </span>
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
