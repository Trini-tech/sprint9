import ButtonArrow from '../../../components/atoms/ButtonArrow';

export default function HeroSection() {
  return (
    <div className="justify-center items-stretch bg-white self-stretch flex w-full flex-col px-16 py-16 max-md:max-w-full max-md:px-5">
      <div className="justify-center p-8 md:py-10 max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className=" flex order-2 flex-col items-stretch self-center w-[29%] max-md:w-96 max-md:ml-0 md:order-1">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6853aaf79c5971b0d4370c8740648618fb784f80cbd448543ff00471d8a3d1e9?apiKey=f46cbfe603664861b277383241817b92&"
              className="aspect-[1.2] object-contain object-center w-full overflow-hidden my-auto max-md:mt-10"
            />
          </div>
          <div className="flex order-1 flex-col items-stretch w-[42%] ml-5 my-1 max-md:w-full max-md:ml-0 md:order-2">
            <div className="justify-center items-center self-stretch flex flex-col my-auto max-md:max-w-full">
              <h3 className="self-stretch text-slate-400 text-center font-medium leading-10 max-md:max-w-full">Cibernàrium | Barcelona Activa</h3>
              <h1 className="self-stretch text-pink-600 text-center mt-1.5 max-md:max-w-full max-md:leading-[52px]">Formació tecnològica a la teva mida</h1>
              <p className="self-stretch text-blue-950 text-center leading-7 my-2 max-md:max-w-full">Ja siguis principiant en el món digital o un professional amb anys d'experiència, tenim cursos dissenyats per a tots els nivells, amb opcions tant presencials com online.</p>
              <ButtonArrow>Explora els cursos</ButtonArrow>
            </div>
          </div>
          <div className="hidden md:flex order-3 flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/496f9ccafa4df6fd5ca386f5f6235a2c38beceb503c003bd06aca8ea2e52726b?apiKey=f46cbfe603664861b277383241817b92&"
              className="aspect-square object-contain object-center w-full overflow-hidden my-auto max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
