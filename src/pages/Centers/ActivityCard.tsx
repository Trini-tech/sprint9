import { Activity } from '../../types/types';

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full ">
      <div className="flex flex-col grow px-3 justify-items-stretch pt-3 pb-12 rounded-xl border border-solid border-gray-200  max-md:mt-2">
        <div className="flex gap-2 justify-start align-middle items-center">
          <div className="text-base text-pink-600">{activity.date} </div>
          <div className="text-sm text-gray-400">{activity.hours}</div>
        </div>
        <div className="mt-2 text-sm text-gray-500">{activity.title}</div>
      </div>
    </div>
  );
}
