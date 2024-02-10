import { useEffect, useState } from 'react';
import { CenterList } from '../../types/types';
import { RadioGroup } from '@headlessui/react';

export default function TabBar({ list }: { list: CenterList[] }) {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="w-full flex flex-wrap">
      <div className="flex gap-3 pr-2 self-stretch my-auto whitespace-nowrap">
        <div className="grow font-bold text-gray-500">Tots els centres</div>
        <div className="font-medium text-zinc-400">128</div>
      </div>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Centers</RadioGroup.Label>
        <div className="flex flex-wrap gap-2">
          {list.map((item) => (
            <RadioGroup.Option
              key={item.centerType}
              value={item.centerType}
              className={({ active, checked }) =>
                `${active ? '' : ''}
                        ${checked ? 'bg-gray-100 text-gray-500' : 'bg-white '}
                        px-2 py-2 flex cursor-pointer rounded-lg hover:bg-gray-50 `
              }>
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm ">
                        <RadioGroup.Label as="p" className={`flex gap-2 ${checked ? 'font-bold' : 'text-gray-500'}`}>
                          <span>{item.centerType}</span>
                          <span className="text-zinc-400">{item.centers.length}</span>
                        </RadioGroup.Label>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
