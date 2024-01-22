export default function FiltersMenu() {
  return (
    <>
      <div className="items-stretch flex flex-col pr-10 py-10 max-md:pr-5">
        <span className="justify-between items-center flex gap-5">
          <div className="text-blue-950 text-base font-bold leading-7 my-auto">Filtrar per</div>
          <div className="items-center border border-[color:var(--Gris-150,#E7E7E9)] bg-white self-stretch flex aspect-square flex-col justify-center w-[54px] h-[54px] px-4 rounded-lg border-solid">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/38167b8397824cc4e9c532e975dd21ae8d08d2a860258373d789a5090ec33b21?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-full overflow-hidden" />
          </div>
        </span>

        {/*Filter by category */}
        <div className="items-stretch border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-full flex-col justify-center mt-6 px-7 py-4 rounded-lg border-solid max-md:px-5">
          <span className="justify-between items-stretch flex gap-5">
            <div className="text-blue-950 text-base font-bold leading-7">Categoria</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12753722a3cac007518f9b38f26f638c5298ae23724e1e7b383c0de98efd58ca?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto" />
          </span>
        </div>

        {/*Filter by modality*/}
        <div className="items-stretch border border-solid border-gray-200 flex w-full flex-col mt-6 pt-4 pb-8 px-7 rounded-lg max-md:px-5">
          {/*Filter title: Modalitat*/}
          <span className="justify-between items-stretch flex gap-5">
            <div className="text-blue-950 text-base font-bold leading-7">Modalitat</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12753722a3cac007518f9b38f26f638c5298ae23724e1e7b383c0de98efd58ca?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto" />
          </span>
          {/*List of options*/}
          <ul className="w-48 text-sm">
            <li className="w-full">
              <span className="items-stretch content-center flex-wrap flex gap-2.5 mt-6">
                <input id="presencial-checkbox" type="checkbox" value="" className="border border-solid border-gray-200 rounded-lg accent-pink-600 flex w-5 shrink-0 h-5 flex-col " />
                <label htmlFor="presencial-checkbox" className="text-blue-950 text-sm leading-5">
                  Presencial
                </label>
              </span>
            </li>
            <li className="w-full">
              <span className="items-stretch content-center flex-wrap flex gap-2.5 mt-6 rounded">
                <input id="presencial-checkbox" type="checkbox" value="" className="rounded accent-pink-600 border border-solid border-gray-200 flex w-5 shrink-0 h-5 flex-col " />
                <label htmlFor="presencial-checkbox" className="text-blue-950 text-sm leading-5">
                  Online
                </label>
              </span>
            </li>
          </ul>

          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <div className="rounded border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-5 shrink-0 h-5 flex-col border-solid" />
            <div className="text-blue-950 text-sm leading-5">Híbrid</div>
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <div className="rounded border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-5 shrink-0 h-5 flex-col border-solid" />
            <div className="text-blue-950 text-sm leading-5">Online - en directe</div>
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba123204b4c8395a69a6b3871553d780aed4b2c61852798792a60670d6181918?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
            <div className="text-blue-950 text-sm font-bold leading-5">Online - vídeo</div>
          </span>
        </div>

        {/*Filter by nivell*/}
        <div className="items-stretch border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-full flex-col mt-6 pt-4 pb-8 px-7 rounded-lg border-solid max-md:px-5">
          <span className="justify-between items-stretch flex gap-5">
            <div className="text-blue-950 text-base font-bold leading-7">Nivell</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12753722a3cac007518f9b38f26f638c5298ae23724e1e7b383c0de98efd58ca?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto" />
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-6">
            <div className="rounded border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-5 shrink-0 h-5 flex-col border-solid" />
            <div className="text-blue-950 text-sm leading-5">Bàsic</div>
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba123204b4c8395a69a6b3871553d780aed4b2c61852798792a60670d6181918?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
            <div className="text-blue-950 text-sm leading-5">Especializat</div>
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <div className="rounded border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-5 shrink-0 h-5 flex-col border-solid" />
            <div className="text-blue-950 text-sm leading-5">IT Academy</div>
          </span>
        </div>
        <div className="items-stretch border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-full flex-col mt-6 pt-4 pb-8 px-7 rounded-lg border-solid max-md:px-5">
          <span className="justify-between items-stretch flex gap-5">
            <div className="text-blue-950 text-base font-bold leading-7">Duració</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12753722a3cac007518f9b38f26f638c5298ae23724e1e7b383c0de98efd58ca?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto" />
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-6">
            <div className="rounded border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-5 shrink-0 h-5 flex-col border-solid" />
            <div className="text-blue-950 text-sm leading-5">Presencial</div>
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba123204b4c8395a69a6b3871553d780aed4b2c61852798792a60670d6181918?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
            <div className="text-blue-950 text-sm leading-5">Online - vídeo</div>
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <div className="rounded border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-5 shrink-0 h-5 flex-col border-solid" />
            <div className="text-blue-950 text-sm leading-5">Online - en directe</div>
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b477dd9c8c9cc47ccef845e3a05c5a98e39abb6e57dc5c6441d6a6df62d3c612?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
            <div className="text-blue-950 text-sm leading-5">Checkbox Text</div>
          </span>
        </div>
        <div className="items-stretch border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-full flex-col mt-6 pt-4 pb-8 px-7 rounded-lg border-solid max-md:px-5">
          <span className="justify-between items-stretch flex gap-5">
            <div className="text-blue-950 text-base font-bold leading-7">Disponibilitat</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12753722a3cac007518f9b38f26f638c5298ae23724e1e7b383c0de98efd58ca?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto" />
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-6">
            <div className="rounded border border-[color:var(--Gris-150,#E7E7E9)] bg-white flex w-5 shrink-0 h-5 flex-col border-solid" />
            <div className="text-blue-950 text-sm leading-5">Places lliures</div>
          </span>
          <span className="items-stretch content-center flex-wrap flex justify-between gap-2.5 mt-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba123204b4c8395a69a6b3871553d780aed4b2c61852798792a60670d6181918?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
            <div className="text-blue-950 text-sm leading-5">Properes obertures</div>
          </span>
        </div>
      </div>
    </>
  );
}
