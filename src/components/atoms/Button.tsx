export default function Button({ children }: { children: string }) {
  //bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)]
  //bg-gradient-to-tr from-pink-600 from-0% to-fuchsia-700 to-100%
  return <button className="text-white text-sm font-bold justify-center bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)] items-stretch self-stretch grow px-4 py-3 rounded-lg">{children}</button>;
}
