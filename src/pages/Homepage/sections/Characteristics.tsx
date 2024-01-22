export default function Characteristics() {
  return (
    <div className="justify-center items-center bg-slate-100 self-stretch flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
      <p className="text-slate-600 leading-7 mt-6 max-md:max-w-full">Cibernàrium és una xarxa de centres de Barcelona on s'imparteixen un ampli ventall de cursos, tallers i seminars que aborden temes com el desenvolupament de software, la programació, la ciberseguretat, el màrqueting digital i la intel·ligència artificial entre altres. Aquests cursos estan dissenyats per ajudar a les persones a adquirir habilitats digitals i mantenir-se actualitzades en un entorn tecnològic en constant evolució.</p>
      <div className="justify-between w-full mt-12 mb-6 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 grid grid-cols-1 md:grid-cols-3 max-md:items-stretch max-md:gap-0">
          <div className="flex items-stretch max-md:w-full max-md:ml-0">
            <div className="justify-between bg-white flex grow gap-4 w-full p-6 rounded-xl items-start max-md:mt-10 max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2716ec3df2699d61c4c6469bdbf0001315c075b4d78532b59ac4fcd7e395bb?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <p className="text-slate-950 font-bold leading-7">Més de 20 centres</p>
                <div className="text-slate-400 text-sm mt-1">Entre centres cibernàrium i biblioteques de Barcelona</div>
              </div>
            </div>
          </div>
          <div className="flex items-stretch max-md:w-full max-md:ml-0">
            <div className="justify-between bg-white flex grow gap-4 w-full p-6 rounded-xl items-start max-md:mt-10 max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2720c5689e532f7ada5bd31bb6abe10bf31ad6ef0f1291879244b92223e29bfb?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <p className="text-slate-950 font-bold leading-7">Formació presencial i online</p>
                <div className="text-slate-400 text-sm mt-1">La formació online pot ser en directe o en vídeo segons el curs</div>
              </div>
            </div>
          </div>
          <div className="flex items-stretch max-md:w-full max-md:ml-0">
            <div className="justify-between bg-white flex grow gap-4 w-full p-6 rounded-xl items-start max-md:mt-10 max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4def79ce2d9e7c1509cccd5164599600235e3661c5b0a0d48cc5291b8cf52c8?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <p className="text-slate-950 font-bold leading-7">Cursos de tots els nivells</p>
                <div className="text-slate-400 text-sm mt-1">Tant de formació bàsica com de formació avançada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
