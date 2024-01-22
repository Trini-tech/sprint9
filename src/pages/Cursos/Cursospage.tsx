import FiltersMenu from './Filters';

export default function Cursospage() {
  return (
    <div className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="justify-center items-center flex w-full flex-col pb-10 max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <div className="pb-10 max-md:max-w-full">
            <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="hidden lg:flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                <FiltersMenu />
              </div>
              <div className="flex flex-col items-stretch w-full lg:w-[72%]">
                <span className="items-stretch self-stretch flex grow flex-col py-10 max-md:max-w-full">
                  <div className="text-gray-500 text-base leading-7 max-md:max-w-full">200+ Resultats de “UX UI”</div>
                  <div className="justify-between items-stretch flex w-full gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                    <span className="items-center flex gap-2">
                      <span className="justify-between items-stretch self-stretch border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex gap-2 px-3 py-2.5 rounded-[100px] border-solid">
                        <div className="text-zinc-800 text-sm leading-5 grow whitespace-nowrap">Nivell bàsic</div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb3434c8d151029135520835a31453ff361223aca659cd498c0cb57fb67237e?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                      </span>
                      <span className="justify-between items-stretch border border-[color:var(--Gris-150,#E7E7E9)] bg-white self-stretch flex gap-2 px-3 py-1.5 rounded-[100px] border-solid">
                        <div className="text-zinc-800 text-sm leading-7 grow whitespace-nowrap">Nivell bàsic</div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb3434c8d151029135520835a31453ff361223aca659cd498c0cb57fb67237e?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto" />
                      </span>
                      <div className="text-zinc-800 text-sm leading-5 grow whitespace-nowrap my-auto">Borrar filtres</div>
                    </span>
                    <span className="items-stretch self-center flex gap-2.5 my-auto">
                      <div className="text-gray-500 text-base leading-7 grow whitespace-nowrap">Ordenar per:</div>
                      <span className="items-stretch flex justify-between gap-1">
                        <div className="text-gray-500 text-base font-bold leading-7 grow whitespace-nowrap">Popularitat</div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ffd07c6597c031742b7fab1dcf8eb2152fb120e729916e0634845f1aa398a9?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto" />
                      </span>
                    </span>
                  </div>
                  <div className="bg-gray-200 shrink-0 h-px mt-6 max-md:max-w-full" />
                  <div className="mt-6 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                        <div className="justify-center items-center border border-[color:var(--gray-200,#E5E7EB)] flex flex-col w-full my-auto rounded-xl border-solid max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&"
                            className="aspect-[1.45] object-contain object-center w-[215px] overflow-hidden"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                        <span className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                          <div className="text-pink-600 text-sm leading-5 max-md:max-w-full">Cibernàrium-Nou Barris</div>
                          <div className="text-blue-950 text-2xl font-bold leading-7 mt-3 max-md:max-w-full">Iniciació als fitxers digitals i a l'emmagatzematge</div> <div className="text-gray-500 text-sm leading-5 mt-3 max-md:max-w-full">Tens un telèfon intel·ligent o una tauleta i vols treure¿n el màxim profit? Aprendràs com utilitzar-los i descobriràs les opcions bàsiques que t¿ofereixen per facilitar el teu dia a dia. Treballaràs i aprendràs amb el teu dispositiu, no te l’oblidis.</div>{' '}
                          <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                            <div className="justify-end flex grow basis-[0%] flex-col pt-5 items-start max-md:max-w-full">
                              <span className="items-stretch flex gap-2">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e176035f15564017ed0b6b8df3b822bfea05d7ebb2dba5b931ef75e8da58ecd6?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" /> <div className="text-gray-500 text-sm leading-5 grow whitespace-nowrap">Nivell Bàsic</div>
                              </span>{' '}
                              <span className="items-stretch self-stretch flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/520015c99eb80b3761295913cdbb3eef5995c3176db50af9a0c705b0fa7f29b8?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" /> <div className="text-gray-500 text-sm leading-5 grow max-md:max-w-full">Del dt. 16/01/24 al dt. 23/01/24 (11:30-13:30h) - Durada: 3 sessions</div>
                              </span>
                            </div>{' '}
                            <span className="justify-end items-stretch flex basis-[0%] flex-col">
                              <div className="text-gray-400 text-sm leading-5 whitespace-nowrap">Places No disponibles</div> <span className="text-white text-sm font-bold whitespace-nowrap justify-center items-stretch bg-zinc-200 mt-2 px-4 py-3 rounded-lg self-end">Inscriure’m</span>
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>{' '}
                  <div className="bg-gray-200 shrink-0 h-px mt-6 max-md:max-w-full" />{' '}
                  <div className="mt-6 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                        <div className="justify-center items-center border border-[color:var(--gray-200,#E5E7EB)] flex flex-col w-full my-auto rounded-xl border-solid max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60a74484ee1a2d0be651e5cf1fae99a10e3706b130207c6492059e1021100a7c?apiKey=f46cbfe603664861b277383241817b92&"
                            className="aspect-[1.45] object-contain object-center w-[215px] overflow-hidden"
                          />
                        </div>
                      </div>{' '}
                      <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                        <span className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                          <div className="text-pink-600 text-sm leading-5 max-md:max-w-full">Cibernàrium-Nou Barris</div> <div className="text-blue-950 text-2xl font-bold leading-7 mt-3 max-md:max-w-full">Iniciació als fitxers digitals i a l'emmagatzematge</div>
                          <div className="text-gray-500 text-sm leading-5 mt-3 max-md:max-w-full">Tens un telèfon intel·ligent o una tauleta i vols treure¿n el màxim profit? Aprendràs com utilitzar-los i descobriràs les opcions bàsiques que t¿ofereixen per facilitar el teu dia a dia. Treballaràs i aprendràs amb el teu dispositiu, no te l’oblidis.</div>
                          <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                            <div className="justify-end flex grow basis-[0%] flex-col pt-5 items-start max-md:max-w-full">
                              <span className="items-stretch flex gap-2">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e176035f15564017ed0b6b8df3b822bfea05d7ebb2dba5b931ef75e8da58ecd6?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-gray-500 text-sm leading-5 grow whitespace-nowrap">Nivell Bàsic</div>
                              </span>
                              <span className="items-stretch self-stretch flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/520015c99eb80b3761295913cdbb3eef5995c3176db50af9a0c705b0fa7f29b8?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-gray-500 text-sm leading-5 grow max-md:max-w-full">Del dt. 16/01/24 al dt. 23/01/24 (11:30-13:30h) - Durada: 3 sessions</div>
                              </span>
                            </div>
                            <span className="justify-end items-stretch flex basis-[0%] flex-col">
                              <div className="text-slate-950 text-sm leading-5 whitespace-nowrap">Places disponibles</div>
                              <span className="text-white text-sm font-bold whitespace-nowrap justify-center items-stretch bg-teal-500 ml-3 mt-2 px-4 py-3 rounded-lg self-start max-md:ml-2.5">Inscriure’m</span>
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-200 shrink-0 h-px mt-6 max-md:max-w-full" />
                  <div className="mt-6 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                        <div className="items-center border border-[color:var(--gray-200,#E5E7EB)] flex flex-col justify-center w-full my-auto rounded-xl border-solid max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5319603d0ffdef68a477a3cb0e40cd9a5b145fad24e730e914034d7ae124eed6?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5319603d0ffdef68a477a3cb0e40cd9a5b145fad24e730e914034d7ae124eed6?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5319603d0ffdef68a477a3cb0e40cd9a5b145fad24e730e914034d7ae124eed6?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5319603d0ffdef68a477a3cb0e40cd9a5b145fad24e730e914034d7ae124eed6?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5319603d0ffdef68a477a3cb0e40cd9a5b145fad24e730e914034d7ae124eed6?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5319603d0ffdef68a477a3cb0e40cd9a5b145fad24e730e914034d7ae124eed6?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5319603d0ffdef68a477a3cb0e40cd9a5b145fad24e730e914034d7ae124eed6?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5319603d0ffdef68a477a3cb0e40cd9a5b145fad24e730e914034d7ae124eed6?apiKey=f46cbfe603664861b277383241817b92&"
                            className="aspect-[1.45] object-contain object-center w-[215px] overflow-hidden"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                        <span className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                          <div className="text-pink-600 text-sm leading-5 max-md:max-w-full">Cibernàrium-Nou Barris</div>
                          <div className="text-blue-950 text-2xl font-bold leading-7 mt-3 max-md:max-w-full">Iniciació als fitxers digitals i a l'emmagatzematge</div> <div className="text-gray-500 text-sm leading-5 mt-3 max-md:max-w-full">Tens un telèfon intel·ligent o una tauleta i vols treure¿n el màxim profit? Aprendràs com utilitzar-los i descobriràs les opcions bàsiques que t¿ofereixen per facilitar el teu dia a dia. Treballaràs i aprendràs amb el teu dispositiu, no te l’oblidis.</div>{' '}
                          <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                            <div className="justify-end flex grow basis-[0%] flex-col pt-5 items-start max-md:max-w-full">
                              <span className="items-stretch flex gap-2">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e176035f15564017ed0b6b8df3b822bfea05d7ebb2dba5b931ef75e8da58ecd6?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" /> <div className="text-gray-500 text-sm leading-5 grow whitespace-nowrap">Nivell Bàsic</div>
                              </span>{' '}
                              <span className="items-stretch self-stretch flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/520015c99eb80b3761295913cdbb3eef5995c3176db50af9a0c705b0fa7f29b8?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" /> <div className="text-gray-500 text-sm leading-5 grow max-md:max-w-full">Del dt. 16/01/24 al dt. 23/01/24 (11:30-13:30h) - Durada: 3 sessions</div>
                              </span>
                            </div>{' '}
                            <span className="justify-end items-stretch flex basis-[0%] flex-col">
                              <div className="text-pink-600 text-sm leading-5 whitespace-nowrap">Places disponibles</div> <span className="text-white text-sm font-bold whitespace-nowrap justify-center items-stretch bg-teal-500 ml-3 mt-2 px-4 py-3 rounded-lg self-start max-md:ml-2.5">Inscriure’m</span>
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>{' '}
                  <div className="bg-gray-200 shrink-0 h-px mt-6 max-md:max-w-full" />{' '}
                  <div className="mt-6 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                        <div className="justify-center items-center border border-[color:var(--gray-200,#E5E7EB)] flex flex-col w-full my-auto rounded-xl border-solid max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5303172f99186ccbe09a3f5eba983b99ad0c9d92642f0f7f3b250b4b24bcc?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5303172f99186ccbe09a3f5eba983b99ad0c9d92642f0f7f3b250b4b24bcc?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5303172f99186ccbe09a3f5eba983b99ad0c9d92642f0f7f3b250b4b24bcc?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5303172f99186ccbe09a3f5eba983b99ad0c9d92642f0f7f3b250b4b24bcc?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5303172f99186ccbe09a3f5eba983b99ad0c9d92642f0f7f3b250b4b24bcc?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5303172f99186ccbe09a3f5eba983b99ad0c9d92642f0f7f3b250b4b24bcc?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5303172f99186ccbe09a3f5eba983b99ad0c9d92642f0f7f3b250b4b24bcc?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5303172f99186ccbe09a3f5eba983b99ad0c9d92642f0f7f3b250b4b24bcc?apiKey=f46cbfe603664861b277383241817b92&"
                            className="aspect-[1.45] object-contain object-center w-[215px] overflow-hidden"
                          />
                        </div>
                      </div>{' '}
                      <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                        <span className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                          <div className="text-pink-600 text-sm leading-5 max-md:max-w-full">Cibernàrium-Nou Barris</div> <div className="text-blue-950 text-2xl font-bold leading-7 mt-3 max-md:max-w-full">Iniciació als fitxers digitals i a l'emmagatzematge</div>
                          <div className="text-gray-500 text-sm leading-5 mt-3 max-md:max-w-full">Tens un telèfon intel·ligent o una tauleta i vols treure¿n el màxim profit? Aprendràs com utilitzar-los i descobriràs les opcions bàsiques que t¿ofereixen per facilitar el teu dia a dia. Treballaràs i aprendràs amb el teu dispositiu, no te l’oblidis.</div>
                          <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                            <div className="justify-end flex grow basis-[0%] flex-col pt-5 items-start max-md:max-w-full">
                              <span className="items-stretch flex gap-2">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e176035f15564017ed0b6b8df3b822bfea05d7ebb2dba5b931ef75e8da58ecd6?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-gray-500 text-sm leading-5 grow whitespace-nowrap">Nivell Bàsic</div>
                              </span>
                              <span className="items-stretch self-stretch flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/520015c99eb80b3761295913cdbb3eef5995c3176db50af9a0c705b0fa7f29b8?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-gray-500 text-sm leading-5 grow max-md:max-w-full">Del dt. 16/01/24 al dt. 23/01/24 (11:30-13:30h) - Durada: 3 sessions</div>
                              </span>
                            </div>
                            <span className="justify-end items-stretch flex basis-[0%] flex-col">
                              <div className="text-pink-600 text-sm leading-5 whitespace-nowrap">Places disponibles</div>
                              <span className="text-white text-sm font-bold whitespace-nowrap justify-center items-stretch bg-teal-500 ml-3 mt-2 px-4 py-3 rounded-lg self-start max-md:ml-2.5">Inscriure’m</span>
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-200 shrink-0 h-px mt-6 max-md:max-w-full" />
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[color:var(--Gris-150,#E7E7E9)] bg-white self-center flex w-[268px] max-w-full flex-col justify-center items-stretch p-3 rounded-xl border-solid">
            <div className="items-stretch flex gap-2">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d6428f8cbab1de650e1fcfef5f2028228bdd56b9479fdbf059443d6f75ddce?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full" />
              <span className="text-white text-center text-base leading-5 whitespace-nowrap justify-center items-center bg-teal-500 aspect-square h-[34px] px-3.5 rounded-md">1</span>
              <span className="text-gray-500 text-center text-base leading-5 whitespace-nowrap justify-center items-center border border-[color:var(--Gris-150,#E7E7E9)] bg-white aspect-square h-[34px] px-3 rounded-md border-solid">2</span>
              <span className="text-gray-500 text-center text-base leading-5 whitespace-nowrap justify-center items-center border border-[color:var(--Gris-150,#E7E7E9)] bg-white aspect-square h-[34px] px-3 rounded-md border-solid">3</span>
              <span className="text-gray-500 text-center text-base leading-5 whitespace-nowrap justify-center items-center border border-[color:var(--Gris-150,#E7E7E9)] bg-white aspect-square h-[34px] px-3 rounded-md border-solid">4</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1677082219eacf25f05819df336aef7d0f29faa4b066a6cce75013bbdfaf0c?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[34px] justify-center items-center overflow-hidden shrink-0 max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
