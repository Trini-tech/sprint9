import { CenterList } from '../../types/types';

export default function Tab({ center }: { center: CenterList }) {
  return (
    <div className="flex gap-1 self-stretch my-auto rounded-md px-4 py-2 hover:bg-slate-100 cursor-pointer">
      <div className="grow font-bold text-gray-500">{center.centerType}</div>
      <div className="font-medium text-zinc-400">{center.centers.length}</div>
    </div>
  );
}
