import ciberLogo from '/ciberlogo.svg';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import Button from './atoms/Button';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Centres', href: '/centres', current: false },
  { name: 'Cursos', href: '/cursos', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar(): JSX.Element {
  return (
    <nav className="border-b border-slate-100 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500">
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button hamburguer*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-600  hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
                {/* Open menu with logo, pages and search bar */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="justify-center self-center my-auto">
                    <Link to="/">
                      <img src={ciberLogo} className="logo" alt="Cibernarium logo" />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex items-center space-x-4">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className={classNames(item.current ? ' text-slate-600' : 'text-slate-600 hover:text-pink-600', 'rounded-md px-3 py-2 text-sm font-medium')} aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </a>
                      ))}
                      {/* -- searchbar: https://tailwindcomponents.com/component/voice-search*/}
                      <div className="w-[25rem] mx-auto">
                        <form className="flex items-center">
                          <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <MagnifyingGlassIcon className="justify-center text-gray-500 aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <input type="text" id="search" className="bg-gray-50 text-slate-600 border border-gray-100 appearance-none block w-full text-sm rounded-lg py-3 px-4 focus:border-slate-600 focus:outline-none  pl-10 p-2.5" placeholder="Cercador de cursos" required />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Login, Signup, Languages */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="items-center self-center flex justify-between gap-5">
                    <button className="justify-center self-center text-slate-600 text-sm font-medium my-auto">Accedeix</button>
                    <Button>Registre</Button>
                  </div>
                  {/* -- Language dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <Menu.Button className="">
                      <div className="items-stretch flex gap-1 my-auto">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open language dropdown</span>
                        <div className="text-slate-600 text-sm font-medium">cat</div>
                        <ChevronDownIcon className="text-slate-600 aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
                      </div>
                    </Menu.Button>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                              català
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                              castellà
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                              anglès
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            {/* Dropdown menu when collapsed */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-slate-600 hover:text-pink-600', 'block rounded-md px-3 py-2 text-base font-medium')} aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  );
}