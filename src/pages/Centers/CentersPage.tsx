import MapComponent from './MapComponent';
import centersList from '../../data/centersList.json';
import activityList from '../../data/activityList.json';
import TabBar from '../../components/atoms/TabBar';
import CenterCard from './CenterCard';
import ActivityCard from './ActivityCard';

export default function Centers() {
  return (
    <div className="flex flex-col self-stretch px-5 lg:px-28">
      <div className="flex flex-col items-center pt-10 pb-4 w-full max-md:px-5 max-md:max-w-full">
        <MapComponent />
      </div>
      <div className="flex flex-col justify-center items-start px-2 pt-6 w-full text-base max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 self-stretch my-auto whitespace-nowrap">
            <div className="grow font-bold text-gray-500">Tots els centres</div>
            <div className="font-medium text-zinc-400">128</div>
          </div>
          <TabBar centersList={centersList} />
        </div>
      </div>
      <div className="flex justify-center items-center py-6 w-full">
        <div className="w-full max-md:max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/*Center List */}
            <div className="w-full">
              <div className="flex flex-col px-2 text-sm text-gray-500 max-md:mt-10 max-md:max-w-full">
                <div className="pb-2 text-2xl font-medium whitespace-nowrap border-b border-solid border-gray-200 text-blue-950 max-md:max-w-full">Centres</div>
                {centersList.map((centerType) => (
                  <div key={centerType.centerType}>
                    {centerType.centers.map((center) => (
                      <CenterCard key={center.centerName} center={center} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/*Activity List */}
            <div className="w-full">
              <div className="flex flex-col grow pl-4 max-md:mt-10 max-md:max-w-full">
                <div className="pb-2 text-2xl font-medium border-b border-solid border-gray-200  text-blue-950 max-md:max-w-full">Properes activitats</div>
                <div className="mt-4 max-md:max-w-full">
                  <div className="grid gap-4 grid-cols-3">
                    {activityList.map((activity) => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
