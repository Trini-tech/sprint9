import ButtonArrow from '../components/atoms/ButtonArrow';

export default function Homepage() {
  return (
    <div className="items-start bg-white flex flex-col">
      {/* Hero section */}
      <div className="justify-center items-stretch bg-white self-stretch flex w-full flex-col px-16 py-9 max-md:max-w-full max-md:px-5">
        <div className="justify-center py-12 max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&"
                className="aspect-[1.2] object-contain object-center w-full overflow-hidden my-auto max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-center self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-400 text-3xl font-medium leading-10 max-md:max-w-full">Cibernàrium | Barcelona Activa</div>
                <h1 className="self-stretch text-pink-600 text-center text-5xl font-bold leading-[56px] mt-1.5 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">Formació tecnològica a la teva mida</h1>
                <div className="self-stretch text-blue-950 text-center text-base leading-7 mt-1.5 max-md:max-w-full">Ja siguis principiant en el món digital o un professional amb anys d'experiència, tenim cursos dissenyats per a tots els nivells, amb opcions tant presencials com online.</div>
                <ButtonArrow>Explora els cursos</ButtonArrow>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&"
                className="aspect-square object-contain object-center w-full overflow-hidden my-auto max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Definition and characteristics*/}
      <div className="justify-center items-center bg-gray-50 self-stretch flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-slate-600 text-base leading-7 w-[1176px] mt-6 max-md:max-w-full">
          <span className="text-slate-600">Cibernàrium és una xarxa de centres de Barcelona on s’imparteixen un ampli ventall de cursos, tallers i seminars que aborden temes com el desenvolupament de software, la programació, la ciberseguretat, el màrqueting digital i la intel·ligència artificial entre altres. Aquests cursos estan dissenyats per ajudar a les persones a adquirir habilitats digitals i mantenir-se actualitzades en un entorn tecnològic en constant evolució.</span>
        </div>
        <div className="justify-between w-full max-w-[1176px] mt-12 mb-6 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="justify-between bg-white flex grow gap-4 w-full p-6 rounded-xl items-start max-md:mt-10 max-md:px-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2716ec3df2699d61c4c6469bdbf0001315c075b4d78532b59ac4fcd7e395bb?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-slate-950 text-base font-bold leading-7">Més de 20 centres</div> <div className="text-slate-400 text-sm mt-1">Entre centres cibernàrium i biblioteques de Barcelona</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow justify-between gap-4 w-full pl-6 pr-16 py-6 rounded-xl items-start max-md:mt-10 max-md:px-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2720c5689e532f7ada5bd31bb6abe10bf31ad6ef0f1291879244b92223e29bfb?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-slate-950 text-base font-bold leading-7 whitespace-nowrap">Formació presencial i online</div> <div className="text-slate-400 text-sm mt-1">La formació online pot ser en directe o en vídeo segons el curs</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow justify-between gap-4 w-full pl-6 pr-20 py-6 rounded-xl items-start max-md:mt-10 max-md:px-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4def79ce2d9e7c1509cccd5164599600235e3661c5b0a0d48cc5291b8cf52c8?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-slate-950 text-base font-bold leading-7 whitespace-nowrap">Cursos de tots els nivells</div> <div className="text-slate-400 text-sm mt-1">Tant de formació bàsica com de formació avançada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Principal categories */}
      <div className="text-blue-950 text-4xl font-bold leading-10 self-center mt-24 max-md:max-w-full max-md:mt-10">Categories principals</div>
      <div className="justify-between items-start self-center flex w-full max-w-[1176px] gap-5 mt-12 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="items-center self-stretch flex grow basis-[0%] flex-col px-8 py-1 max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5d815cd3cb8bf3f2f784033195a64e5ea3f122c3697dc65adee14e3c5eea963?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full" /> <div className="text-slate-950 text-lg font-bold leading-8 self-stretch whitespace-nowrap mt-2.5">Desenvolupament web</div>
        </div>
        <div className="items-center flex grow basis-[0%] flex-col px-20 self-start max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b06ebad75f8834ad7ec77084104b7173957ad862a25131ebd0d3e0be556b383?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full" /> <div className="text-slate-950 text-center text-lg font-bold leading-8 self-stretch whitespace-nowrap mt-3.5">Màrqueting</div>
        </div>
        <div className="items-center flex grow basis-[0%] flex-col px-20 self-start max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/598ba500bba4706da80877563954f1d80a332e783f299d933f5290d3ee999cb7?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full" /> <div className="text-slate-950 text-center text-lg font-bold leading-8 self-stretch whitespace-nowrap mt-3.5">Núvol/Cloud</div>
        </div>
        <div className="items-center flex grow basis-[0%] flex-col px-9 py-0.5 self-start max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82ac4ec80931a6010bdcfd431419751296f7493bc8462af7b62b12d06294bf52?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full" /> <div className="text-slate-950 text-center text-lg font-bold leading-8 self-stretch whitespace-nowrap mt-3">Big Data i Intel·ligència</div>
        </div>
      </div>
      {/* Education formats */}
      {/* -- Formació bàsica*/}
      <div className="justify-center items-center self-stretch bg-white flex w-full flex-col mt-6 px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="w-[825px] max-w-full my-11 max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&"
                className="aspect-[0.81] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="self-stretch text-blue-950 text-4xl font-bold leading-10 max-md:max-w-full">Formació bàsica</div>
                <div className="self-stretch text-gray-500 text-lg leading-8 mt-3 max-md:max-w-full">Aprèn a fer servir el correu electrònic, aplicacions del mòvil, iniciar-se a internet o demanar el certificat digital.</div>
                <ButtonArrow>Veure els cursos</ButtonArrow>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- Formació especialitzada*/}
      <div className="justify-center items-center self-stretch bg-white flex w-full flex-col pt-6 pb-12 px-16 max-md:max-w-full max-md:px-5">
        <div className="justify-between w-full max-w-[1176px] mb-11 px-20 max-md:max-w-full max-md:mb-10 max-md:px-5">
          <div className="w-[960px] max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="self-stretch text-blue-950 text-4xl font-bold leading-10 max-md:max-w-full">Formació especialitzada</div>
                  <div className="self-stretch text-gray-500 text-lg leading-8 mt-3 max-md:max-w-full">Formació d'aplicacions específiques com Excel, Illustrator, Canva, etc.</div>
                  <ButtonArrow>Veure els cursos</ButtonArrow>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&"
                  className="aspect-[1.74] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- Formació IT ACademy*/}
      <div className="justify-center items-center self-stretch bg-white flex w-full flex-col pb-12 px-16 max-md:max-w-full max-md:px-5">
        <div className="justify-between w-full max-w-[1176px] mb-11 px-20 max-md:max-w-full max-md:mb-10 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&"
                className="aspect-[1.28] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="self-stretch text-blue-950 text-4xl font-bold leading-10 max-md:max-w-full">IT Academy</div>
                <div className="self-stretch text-pink-600 text-2xl leading-10 mt-3 max-md:max-w-full">Formació especialitzada de llarga duració</div>
                <div className="self-stretch text-gray-500 text-lg leading-8 mt-3 max-md:max-w-full">Per formar a aquelles persones que vulguin fer un procés de reconversió laboral cap al sector TIC o bé reciclar-se dins d'aquest sector.</div>
                <ButtonArrow>Veure els cursos</ButtonArrow>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="justify-center items-center self-stretch bg-gray-50 flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1176px] flex-col mt-6 mb-11 max-md:max-w-full max-md:mb-10">
          <div className="text-pink-600 text-center text-lg leading-8 self-center whitespace-nowrap">FAQ</div>
          <div className="text-blue-950 text-center text-4xl font-bold leading-10 self-center whitespace-nowrap mt-2">Alguna pregunta?</div>
          <div className="items-stretch self-stretch flex w-full justify-between gap-5 mt-12 pr-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
            <div className="bg-white flex justify-between gap-5 pl-9 pr-14 py-10 rounded-xl items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23ecc2f918c0128369d794971b677429039f0690cddc0e63af821e6ee55ad237?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full" />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-blue-950 text-lg font-bold leading-8 whitespace-nowrap">Qui pot accedir a les formacions?</div>
                <div className="text-zinc-800 text-base leading-7 mt-4">Tota persona major de 16 anys i amb DNI, NIE o passaport pot inscriure's a qualsevol activitat de Cibernàrium. No cal estar en cap situació laboral específica (ocupada, en atur, etc.) ni pertànyer a cap sector professional concret.</div>
              </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd8be1e9221eda8bd180a5a19c5050a322f376610757ac779094d9e4e56bddca?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full mt-8 self-start" /> <div className="text-blue-950 text-lg font-bold leading-8 grow whitespace-nowrap mt-12 self-start max-md:mt-10">Puc inscriurem a tantes activitats com vulgui?</div>
          </div>
          <div className="justify-center items-stretch bg-white flex w-[578px] max-w-full flex-col mt-8 pl-9 pr-14 py-8 rounded-xl self-start max-md:px-5">
            <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b3b99fcefeba7fe869d45c70492e09cc986663a918080d52a8bb18de332b7c2?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full" /> <div className="text-blue-950 text-lg font-bold leading-8 self-center grow whitespace-nowrap my-auto">En quin idioma són les formacions?</div>
            </div>
          </div>
        </div>
      </div>
      {/* Other courses */}
      <div className="items-center self-stretch flex justify-between gap-5 px-28 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="items-stretch flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
          <div className="text-slate-950 text-4xl font-bold leading-10 max-md:max-w-full">També et pot interessar</div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76967d5e8b9e9bb33672ff3215eca01cce885adbc8197cc9f978817412bc94cd?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76967d5e8b9e9bb33672ff3215eca01cce885adbc8197cc9f978817412bc94cd?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76967d5e8b9e9bb33672ff3215eca01cce885adbc8197cc9f978817412bc94cd?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76967d5e8b9e9bb33672ff3215eca01cce885adbc8197cc9f978817412bc94cd?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76967d5e8b9e9bb33672ff3215eca01cce885adbc8197cc9f978817412bc94cd?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76967d5e8b9e9bb33672ff3215eca01cce885adbc8197cc9f978817412bc94cd?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76967d5e8b9e9bb33672ff3215eca01cce885adbc8197cc9f978817412bc94cd?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76967d5e8b9e9bb33672ff3215eca01cce885adbc8197cc9f978817412bc94cd?apiKey=f46cbfe603664861b277383241817b92&"
                    className="aspect-[1.4] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-slate-700 text-base font-bold leading-7 mt-3.5">Cibernàrium Nou Barris</div> <div className="text-slate-950 text-lg font-bold leading-8 mt-1">Comença a utilitzar el teu ordinador</div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60d1afa635937cb8800ed31ec0a55bb0fa809f670196e0d87fda40a5364095d7?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60d1afa635937cb8800ed31ec0a55bb0fa809f670196e0d87fda40a5364095d7?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60d1afa635937cb8800ed31ec0a55bb0fa809f670196e0d87fda40a5364095d7?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60d1afa635937cb8800ed31ec0a55bb0fa809f670196e0d87fda40a5364095d7?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60d1afa635937cb8800ed31ec0a55bb0fa809f670196e0d87fda40a5364095d7?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60d1afa635937cb8800ed31ec0a55bb0fa809f670196e0d87fda40a5364095d7?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60d1afa635937cb8800ed31ec0a55bb0fa809f670196e0d87fda40a5364095d7?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60d1afa635937cb8800ed31ec0a55bb0fa809f670196e0d87fda40a5364095d7?apiKey=f46cbfe603664861b277383241817b92&"
                    className="aspect-[1.4] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-slate-700 text-base font-bold leading-7 mt-2.5">Online - en directe</div> <div className="text-slate-950 text-lg font-bold leading-8 whitespace-nowrap mt-1">Introducció al full de càlcul</div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c4a417d77836bb8a838934d89913a04c21df3498da65679e5b65af190f9254?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c4a417d77836bb8a838934d89913a04c21df3498da65679e5b65af190f9254?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c4a417d77836bb8a838934d89913a04c21df3498da65679e5b65af190f9254?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c4a417d77836bb8a838934d89913a04c21df3498da65679e5b65af190f9254?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c4a417d77836bb8a838934d89913a04c21df3498da65679e5b65af190f9254?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c4a417d77836bb8a838934d89913a04c21df3498da65679e5b65af190f9254?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c4a417d77836bb8a838934d89913a04c21df3498da65679e5b65af190f9254?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c4a417d77836bb8a838934d89913a04c21df3498da65679e5b65af190f9254?apiKey=f46cbfe603664861b277383241817b92&"
                    className="aspect-[1.4] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-slate-700 text-base font-bold leading-7 mt-2.5">Online</div> <div className="text-slate-950 text-lg font-bold leading-8 mt-1">Creativitat: implementa idees innovadores en el teu pla de màrqueting digital</div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-7">
                  <div className="text-white text-center text-4xl font-bold leading-10 whitespace-nowrap bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)] justify-center items-stretch pt-20 pb-16 px-8 rounded-[30px] max-md:px-5">IT ACADEMY</div> <div className="text-slate-700 text-base font-bold leading-7 mt-2.5">Online</div> <div className="text-slate-950 text-lg font-bold leading-8 whitespace-nowrap mt-1">Curs en Big Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center shadow-sm flex aspect-[1.0212765957446808] flex-col justify-center my-auto">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee69b9f-be21-479c-8dea-b10564320ee8?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ee69b9f-be21-479c-8dea-b10564320ee8?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ee69b9f-be21-479c-8dea-b10564320ee8?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ee69b9f-be21-479c-8dea-b10564320ee8?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ee69b9f-be21-479c-8dea-b10564320ee8?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ee69b9f-be21-479c-8dea-b10564320ee8?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ee69b9f-be21-479c-8dea-b10564320ee8?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ee69b9f-be21-479c-8dea-b10564320ee8?apiKey=f46cbfe603664861b277383241817b92&"
            className="aspect-[1.02] object-contain object-center w-12 overflow-hidden rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
