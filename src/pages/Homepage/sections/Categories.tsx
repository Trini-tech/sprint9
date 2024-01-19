export default function Categories() {
  return (
    <>
      <h3 className="text-blue-950 leading-10 self-center mt-16 mb-6 max-md:max-w-full max-md:mt-10">Categories principals</h3>
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
    </>
  );
}
