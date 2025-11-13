export default function Categories() {
  const categories = [
    {
      title: 'Desenvolupament web',
      img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e5d815cd3cb8bf3f2f784033195a64e5ea3f122c3697dc65adee14e3c5eea963?apiKey=f46cbfe603664861b277383241817b92&',
    },
    {
      title: 'Màrqueting',
      img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b06ebad75f8834ad7ec77084104b7173957ad862a25131ebd0d3e0be556b383?apiKey=f46cbfe603664861b277383241817b92&',
    },
    {
      title: 'Núvol/Cloud',
      img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/598ba500bba4706da80877563954f1d80a332e783f299d933f5290d3ee999cb7?apiKey=f46cbfe603664861b277383241817b92&',
    },
    {
      title: 'Big Data i Intel·ligència',
      img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/82ac4ec80931a6010bdcfd431419751296f7493bc8462af7b62b12d06294bf52?apiKey=f46cbfe603664861b277383241817b92&',
    },
  ];

  return (
    <div className="w-full px-5 sm:px-10 lg:px-20 py-12 flex flex-col items-center">
      <h3 className="text-blue-950 leading-10 self-center mt-10 mb-6 text-center text-xl sm:text-2xl font-bold">Categories principals</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {categories.map((cat) => (
          <div key={cat.title} className="flex flex-col items-center text-center">
            <div className="flex justify-center">
              <img loading="lazy" src={cat.img} alt={cat.title} className="w-12 sm:w-16 md:w-20 aspect-square object-contain object-center" />
            </div>
            <div className="text-slate-950 text-lg font-bold mt-3">{cat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
