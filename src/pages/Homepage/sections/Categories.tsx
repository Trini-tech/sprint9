export default function Categories() {
  return (
    <div className="w-full px-20 py-12 flex flex-col  items-center">
      <h3 className="text-blue-950 leading-10 self-center mt-10 mb-6 max-md:max-w-full max-md:mt-10">Categories principals</h3>
      <div className="justify-between items-start self-center grid grid-cols-2 lg:grid-cols-4 gap-12 mt-8 px-5 w-full">
        <div className="items-center">
          <div className="flex justify-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5d815cd3cb8bf3f2f784033195a64e5ea3f122c3697dc65adee14e3c5eea963?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full" />
          </div>
          <div className="flex justify-center text-slate-950 text-lg font-bold mt-3">Desenvolupament web</div>
        </div>
        <div className=" items-center">
          <div className="flex justify-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b06ebad75f8834ad7ec77084104b7173957ad862a25131ebd0d3e0be556b383?apiKey=f46cbfe603664861b277383241817b92&" className="flex justify-center aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full" />
          </div>
          <div className="text-slate-950 text-center text-lg font-bold mt-3">Màrqueting</div>
        </div>
        <div className="items-center">
          <div className="flex justify-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/598ba500bba4706da80877563954f1d80a332e783f299d933f5290d3ee999cb7?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full" />
          </div>
          <div className="text-slate-950 text-center text-lg font-bold mt-3">Núvol/Cloud</div>
        </div>
        <div className="items-center">
          <div className="flex justify-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82ac4ec80931a6010bdcfd431419751296f7493bc8462af7b62b12d06294bf52?apiKey=f46cbfe603664861b277383241817b92&" className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full" />
          </div>
          <div className="text-slate-950 text-center text-lg font-bold mt-3">Big Data i Intel·ligència</div>
        </div>
      </div>
    </div>
  );
}
