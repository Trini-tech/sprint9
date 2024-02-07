import { useState } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker'; ////https://react-tailwindcss-datepicker.vercel.app/props#container-class
import { Filter } from '../../../types/types';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useSearch } from '../../../context/SearchContext';

interface DatepickerValue {
  startDate: Date;
  endDate: Date;
}

export default function FiltersSection({ courseFilters }: { courseFilters: Filter[] }) {
  const { checkedFilters, setCheckedFilters } = useSearch();

  const [value, setValue] = useState<DatepickerValue>({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 11)),
  });

  const handleValueChange = (value: DateValueType) => {
    setValue(value as DatepickerValue);
  };

  function handleCheckboxChange(key: string) {
    let sel = checkedFilters.selections;
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    setCheckedFilters({
      selections: sel,
    });
  }

  return (
    <>
      <div className="items-stretch grid grid-cols-1 pr-10 py-10 max-md:pr-5">
        {/*Title*/}
        <span className="justify-start items-center flex gap-5">
          <div className="text-blue-950 text-base font-bold pl-2 leading-7 mb-6">Filtrar per</div>
        </span>
        {/*Calendar*/}
        <Datepicker
          inputClassName="w-full self-center border border-solid border-gray-200 rounded-lg py-4 px-7 justify-center"
          placeholder={'Selecciona una data'}
          minDate={new Date('2024-01-01')}
          /*maxDate={new Date("2023-01-30")}*/
          asSingle={true}
          useRange={false}
          primaryColor={'pink'}
          startWeekOn="mon"
          value={value}
          onChange={handleValueChange}
          displayFormat={'DD/MM/YYYY'}
          showShortcuts={false}
        />
        {/*Filters*/}
        {courseFilters.map((coursefilter) => (
          <div key={coursefilter.title} className="border border-solid border-gray-200 flex w-full flex-col mt-6 pt-4 pb-4 px-7 rounded-lg max-md:px-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="justify-between items-stretch flex gap-5">
                    <span className="flex w-full justify-start rounded-lg text-left text-base font-bold text-blue-950 ">{coursefilter.title}</span>
                    <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-[20px] w-[20px] rounded-lg text-blue-950 font-bold`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pb-2 text-base text-zinc-800 leading-7">
                    <ul className="w-48 text-sm">
                      {coursefilter.types.map((type) => (
                        <li key={type} className="w-full">
                          <span className="items-stretch content-center flex-wrap flex gap-2.5 mt-6">
                            <input
                              id={`${type}-checkbox`}
                              type="checkbox"
                              value={`${type}`}
                              className="w-5 h-5 accent-pink-600" //es coloreja rosa
                              checked={checkedFilters.selections.includes(type)}
                              onChange={() => handleCheckboxChange(type)}
                            />
                            <label htmlFor={`${type}-checkbox`} className="text-blue-950 text-sm leading-5">
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
    </>
  );
}
