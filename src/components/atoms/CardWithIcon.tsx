export default function CardWithIcon({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="flex items-stretch max-md:w-full max-md:ml-0">
      <div className="justify-between bg-white flex grow gap-4 w-full p-6 rounded-xl items-start max-md:mt-10 max-md:px-5">
        <div>{icon}</div>
        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
          <p className="text-slate-950 font-bold leading-7">{title}</p>
          <div className="text-slate-400 text-sm mt-1">{description}</div>
        </div>
      </div>
    </div>
  );
}
