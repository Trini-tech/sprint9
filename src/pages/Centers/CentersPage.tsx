import centersList from '../../data/centersList.json';
import activityList from '../../data/activityList.json';
import TabBar from '../../components/atoms/TabBar';
import CenterCard from './components/CenterCard';
import ActivityCard from './components/ActivityCard';

export default function CentersPage() {
  return (
    <div className="flex flex-col self-stretch px-5 lg:px-28">
      {/*Mapa */}
      <div className="flex flex-col items-center pt-10 pb-4 w-full max-md:px-5 max-md:max-w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.693932084572!2d2.1917425754549686!3d41.40245279506156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a33d3b71de05%3A0xbb83ff380d17f7fe!2sCibern%C3%A0rium%2022%40%20-%20Barcelona%20Activa!5e0!3m2!1sen!2ses!4v1707211482786!5m2!1sen!2ses" className="w-full h-96 border:0" loading="lazy"></iframe>
      </div>
      {/*TabBar */}
      <div className="flex flex-col justify-center items-start px-2 pt-6 w-full text-base max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 self-stretch my-auto whitespace-nowrap">
            <div className="grow font-bold text-gray-500">Tots els centres</div>
            <div className="font-medium text-zinc-400">128</div>
          </div>
          <TabBar centersList={centersList} />
        </div>
      </div>
      {/*Centers and Activities */}
      <div className="flex justify-center items-center py-6 w-full">
        <div className="w-full max-md:max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/*Center List */}
            <div className="w-full overflow-y-scroll">
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
