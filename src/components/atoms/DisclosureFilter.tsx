import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function DisclosureFilter({ title, filters }: { title: string; filters: string }) {
  return (
    <div className="bg-white flex flex-wrap gap-2 pl-8 pr-12 py-5 rounded-xl items-start">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center">
              <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-[40px] w-[40px] mr-2 p-2 rounded-lg bg-pink-100 text-pink-600`} />
              <span className="flex w-full pl-2 justify-start rounded-lg text-left text-base font-bold text-zinc-800">{title}</span>
            </Disclosure.Button>
            <Disclosure.Panel className=" pb-2 pt-4 pl-14 text-base text-zinc-800 leading-7">{filters}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
