import ciberLogo from '/ciberlogo.svg';

export default function Footer() {
  return (
    <div className="justify-center items-center self-stretch bg-gray-50 flex w-full flex-col px-28 py-12 max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch mt-6 max-md:max-w-full">
        <div className="justify-between items-center flex gap-0 max-md:max-w-full max-md:flex-wrap">
          <div className="text-blue-950 text-2xl font-bold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
            Segueix la nostra newsletter <br />i estigues al dia de l’oferta de cursos disponibles
          </div>
          <div className="justify-center border border-[color:var(--Gris200,#D7D7D7)] bg-white self-stretch flex grow basis-[0%] flex-col pl-16 pr-4 py-3 rounded-xl border-solid items-end max-md:max-w-full max-md:pl-5">
            <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap justify-center items-stretch bg-pink-600 px-7 py-2 rounded-lg max-md:px-5">Subscriu-m’hi</div>
          </div>
        </div>
        <div className="justify-between items-stretch flex w-full gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="items-start flex flex-col">
            <div className="self-stretch">
              <img src={ciberLogo} className="logo" alt="Cibernarium logo" />
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e75e39e276a66db2b729d8ad4379240a4a4ef9fc14e38233f5fcf7e3b9f77a1?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e75e39e276a66db2b729d8ad4379240a4a4ef9fc14e38233f5fcf7e3b9f77a1?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e75e39e276a66db2b729d8ad4379240a4a4ef9fc14e38233f5fcf7e3b9f77a1?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e75e39e276a66db2b729d8ad4379240a4a4ef9fc14e38233f5fcf7e3b9f77a1?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e75e39e276a66db2b729d8ad4379240a4a4ef9fc14e38233f5fcf7e3b9f77a1?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e75e39e276a66db2b729d8ad4379240a4a4ef9fc14e38233f5fcf7e3b9f77a1?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e75e39e276a66db2b729d8ad4379240a4a4ef9fc14e38233f5fcf7e3b9f77a1?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e75e39e276a66db2b729d8ad4379240a4a4ef9fc14e38233f5fcf7e3b9f77a1?apiKey=f46cbfe603664861b277383241817b92&"
              className="aspect-[3.48] object-contain object-center w-[101px] overflow-hidden max-w-full mt-7 self-start"
            />
            <div className="text-slate-600 text-sm self-stretch mt-7">Cibernàrium és una xarxa de centres de Barcelona on s’imparteix formació tecnològica de tots els nivells.</div>
            <div className="items-stretch self-stretch flex gap-4 mt-8 pr-20 max-md:pr-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93c4e7c009fd3733cbd059bcdb63f9765115027d50b88b6cfaa0d77420b3b61?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/653ee5e5b4e688a1d5b8757b02c3f0f0a8d1dfd348c115c30e0cacca01725f59?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ac003f4a3d677c6cd943ba5043cd2c4b4058870cbde4c08cb8af6e3b76b0e43?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" />
            </div>
          </div>
          <div className="self-start max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-blue-950 text-sm font-bold leading-5 whitespace-nowrap">Cibernàrium</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Cursos</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Centres</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Instructors</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">FAQ</div>
                  <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Normes d’inscripció</div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-blue-950 text-sm font-bold leading-5 whitespace-nowrap">Termes i condicions</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Avís legal</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Privacitat</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Configuració de cookies</div> <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Sitemap</div>
                  <div className="text-slate-600 text-sm font-medium leading-5 whitespace-nowrap mt-4">Declaració d’accessibilitat</div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-10">
                  <div className="text-blue-950 text-sm font-bold leading-5 whitespace-nowrap">Contacte</div>
                  <div className="items-center flex justify-between gap-4 mt-4">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ebca3e3b11cd568311a9028b2eb310459aa2dbae6685ae92c3ec7bf61c9704a?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto" /> <div className="text-slate-600 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">info@cibernarium.cat</div>
                  </div>
                  <div className="items-center flex justify-between gap-4 mt-4">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8161261a455ab67fbc26599380212b17a822918d9b43ca0144269946773e3369?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto" /> <div className="text-slate-600 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">900 533 175</div>
                  </div>
                  <div className="text-pink-600 text-xs leading-5 whitespace-nowrap mt-1">De dilluns a divendres de 9 a 18h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 shrink-0 h-px mt-16 max-md:max-w-full max-md:mt-10" /> <div className="text-gray-700 text-sm font-medium leading-5 mt-10 max-md:max-w-full">© 2024 Barcelona Activa</div>
      </div>
    </div>
  );
}
