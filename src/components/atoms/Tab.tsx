import { CenterList } from '../../types/types';

export default function Tab({ item }: { item: CenterList }) {
  return (
    <div className="flex gap-1 self-stretch my-auto rounded-md px-4 py-2 hover:bg-slate-100 cursor-pointer">
      <div className="grow font-medium text-gray-500">{item.centerType}</div>
      <div className="font-medium text-zinc-400">{item.centers.length}</div>
    </div>
  );
}
