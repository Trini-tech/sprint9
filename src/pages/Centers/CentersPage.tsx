import MapComponent from './MapComponent';
import centersList from '../../data/centersList.json';
import TabBar from '../../components/atoms/TabBar';
import CenterCard from './CenterCard';

export default function Centers() {
  return (
    <div className="flex flex-col self-stretch px-28">
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
      <div className="flex justify-center items-center py-6 w-full   max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1232px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-2 text-sm leading-5 text-gray-500 max-md:mt-10 max-md:max-w-full">
                <div className="pb-2 text-2xl font-medium leading-10 whitespace-nowrap border-b border-solid border-b-[color:var(--Gris-150,#E7E7E9)] text-blue-950 max-md:max-w-full">Centres</div>
                {centersList.map((centerType) => (
                  <div key={centerType.centerType}>
                    {centerType.centers.map((center) => (
                      <CenterCard key={center.centerName} center={center} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pl-4 max-md:mt-10 max-md:max-w-full">
                <div className="pb-2 text-2xl font-medium leading-10 border-b border-solid border-b-[color:var(--Gris-150,#E7E7E9)] text-blue-950 max-md:max-w-full">Properes activitats</div>
                <div className="mt-4 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-12 mx-auto w-full whitespace-nowrap   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] leading-[130.8%] max-md:mt-2">
                        <div className="flex gap-2 justify-between">
                          <div className="text-base text-pink-600">17 gen </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">Coneix el certificat ACTIC</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="grow text-base text-pink-600">18 gen </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="grow text-base text-pink-600">19 gen </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="grow text-base text-pink-600">20 gen </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="text-base text-pink-600">31 gen </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="text-base text-pink-600">01 feb </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="text-base text-pink-600">01 feb </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="text-base text-pink-600">01 feb </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="text-base text-pink-600">01 feb </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="text-base text-pink-600">01 feb </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="text-base text-pink-600">01 feb </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-4 pt-3 pb-5 mx-auto w-full   rounded-xl border border-solid border-[color:var(--Gris-150,#E7E7E9)] max-md:mt-2">
                        <div className="flex gap-2 justify-between whitespace-nowrap leading-[130.8%]">
                          <div className="text-base text-pink-600">01 feb </div>
                          <div className="flex-auto text-sm text-gray-400">11:30-13:30</div>
                        </div>
                        <div className="mt-2 text-sm leading-5 text-gray-500">T2.2 Com configurar i protegir el teu smartphone o tauleta</div>
                      </div>
                    </div>
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
