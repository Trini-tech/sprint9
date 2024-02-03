import { Center } from '../../types/types';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function CenterCard({ center }: { center: Center }) {
  return (
    <div className="flex flex-col items-start py-3 px-4 mt-4 rounded-xl border border-solid border-gray-200 max-md:pr-5 max-md:max-w-full">
      <div className="text-base leading-6 text-blue-950">{center.centerName}</div>
      <div className="flex gap-1.5 mt-1.5 tracking-normal whitespace-nowrap">
        <MapPinIcon className="w-5 aspect-square" />
        <div className="grow">{center.address}</div>
      </div>
      <div className="flex gap-1.5 mt-1.5 tracking-normal">
        <ClockIcon className="w-5 aspect-square" />
        <div className="flex-auto">{center.openHours}</div>
      </div>
    </div>
  );
}
