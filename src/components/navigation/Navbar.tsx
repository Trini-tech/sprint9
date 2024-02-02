import ciberLogo from '/ciberlogo.svg';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import SearchBar from './SearchBar';
import LanguageDropdown from './LangDropdown';

const navigation = [
  { name: 'Centres', href: '/centres', current: false },
  { name: 'Cursos', href: '/cursos', current: false },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar(): JSX.Element {
  return (
    <Disclosure as="nav" className="bg-white border-b border-slate-100 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Hamburguer mobile*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-600  hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              {/* Open menu with logo, pages and search bar */}
              <div className="flex flex-1 items-center md:items-stretch justify-start">
                <div className="self-center my-auto">
                  <Link to="/">
                    <img src={ciberLogo} className="logo" alt="Cibernarium logo" />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className={classNames(item.current ? ' text-slate-600' : 'text-slate-600 hover:text-pink-600', 'rounded-md px-3 py-2 text-sm font-medium')} aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </a>
                    ))}
                    {/* -- searchbar: https://tailwindcomponents.com/component/voice-search*/}
                    <SearchBar />
                  </div>
                </div>
              </div>

              {/*Login, Signup, Languages */}
              <div className="hidden lg:flex absolute inset-y-0 right-0 items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="items-center self-center flex justify-between gap-5">
                  <Link to="/login" className="justify-center self-center text-slate-600 hover:text-pink-600 text-sm font-medium my-auto">
                    Accedeix
                  </Link>
                  <Button styles="bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)]">Registre</Button>
                </div>
                <LanguageDropdown />
              </div>
            </div>
          </div>

          {/* Collapse Menu*/}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Centres i cursos dropdown */}
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames('text-slate-600 hover:text-pink-600 block rounded-md px-3 py-2 text-sm')} aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
              {/*Accedeix i registre */}
              <Disclosure.Button className={'text-slate-600 hover:text-pink-600 block rounded-md px-3 py-2 text-sm'}>Accedeix</Disclosure.Button>
              <Disclosure.Button className={'text-slate-600 hover:text-pink-600 block rounded-md px-3 py-2 text-sm'}>Registre</Disclosure.Button>
              <LanguageDropdown />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}