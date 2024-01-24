import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Badge({ children }: { children: string }) {
  return (
    <>
      <span className="justify-between items-stretch self-stretch border border-solid border-gray-200 flex gap-2 px-3 py-2.5 rounded-full hover:bg-gray-200 ">
        <div className="text-zinc-800 text-sm leading-5">{children}</div>
        <XMarkIcon className="text-zinc-800 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
      </span>
    </>
  );
}
