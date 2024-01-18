import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function ButtonArrow({ children }: { children: string }) {
  //bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)]
  //bg-gradient-to-tr from-pink-600 from-0% to-fuchsia-700 to-100%
  return (
    <button className="justify-center flex gap-2.5 mt-3 px-4 py-2.5 rounded-lg items-start bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)] ">
      <div className="text-white text-sm font-bold">{children}</div>
      <ArrowRightIcon className="text-white aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full" />
    </button>
  );
}
