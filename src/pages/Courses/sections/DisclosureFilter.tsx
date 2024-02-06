import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Filter } from '../../../types/types';
import { useState } from 'react';

export default function DisclosureFilterCheckbox({ coursefilter }: { coursefilter: Filter }) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]); // Estado para mantener los elementos marcados

  // Controlador de eventos para manejar el cambio en el estado de la casilla de verificación
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (event.target.checked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, value]); // Agrega el valor si está marcado
    } else {
      setCheckedItems((prevCheckedItems) => prevCheckedItems.filter((item) => item !== value)); // Elimina el valor si se desmarca
    }
    console.log(checkedItems);
  };
  return (
    <>
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
                          className="w-5 h-5 accent-pink-600"
                          onChange={handleCheckboxChange} // Agrega el controlador de eventos onChange
                          checked={checkedItems.includes(type)} // Marca la casilla de verificación si está en el estado de elementos marcados
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
    </>
  );
}
