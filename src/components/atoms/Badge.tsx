import { XMarkIcon } from '@heroicons/react/20/solid';
import { useSearch } from '../../context/SearchContext';

export default function Badge({ children }: { children: string }) {
  const { checkedFilters, setCheckedFilters } = useSearch();

  function removeFilter(key: string) {
    let sel = checkedFilters.selections;
    let find = sel.indexOf(key);
    sel.splice(find, 1);
    setCheckedFilters({
      selections: sel,
    });
  }
  return (
    <>
      <span className="justify-between items-stretch self-stretch border border-solid border-gray-200 flex gap-2 px-3 py-2.5 rounded-full hover:bg-gray-200 ">
        <div className="text-zinc-800 text-sm leading-5">{children}</div>
        <button onClick={() => removeFilter(children)}>
          <XMarkIcon className="text-zinc-800 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
        </button>
      </span>
    </>
  );
}
