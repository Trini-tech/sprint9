import ButtonArrow from '../../../components/atoms/ButtonArrow';
import { Link } from 'react-router-dom';

export default function Education() {
  const sections = [
    {
      title: 'Formació bàsica',
      description: 'Aprèn a fer servir el correu electrònic, aplicacions del mòvil, iniciar-se a internet o demanar el certificat digital.',
      img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/40bb0856c90ad3798adbe525d5f5518c3223653aaac442df5dad24f49ef2eb9c?apiKey=f46cbfe603664861b277383241817b92&',
      buttonText: 'Veure els cursos',
      reverse: false,
    },
    {
      title: 'Formació especialitzada',
      description: "Formació d'aplicacions específiques com Excel, Illustrator, Canva, etc.",
      img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9828604b85a7f455ad8b3c3061df04b5a2c6caa102eed1ba64d9123078969915?apiKey=f46cbfe603664861b277383241817b92&',
      buttonText: 'Veure els cursos',
      reverse: true,
    },
    {
      title: 'IT Academy',
      description: "Per formar a aquelles persones que vulguin fer un procés de reconversió laboral cap al sector TIC o bé reciclar-se dins d'aquest sector.",
      extraText: 'Formació especialitzada de llarga duració',
      img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3f51fe881cd0f6c7012f30e49191720733badfa3b5cfa087bce99af88b816097?apiKey=f46cbfe603664861b277383241817b92&',
      buttonText: 'Veure els cursos',
      reverse: false,
    },
  ];

  return (
    <div className="flex flex-col w-full items-center">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col md:flex-row w-full max-w-[1176px] items-center justify-center bg-white py-12 px-5 md:px-16 gap-6 md:gap-8">
          {!section.reverse && (
            <div className="flex-1 flex justify-center items-center">
              <img loading="lazy" src={section.img} alt={section.title} className="w-full max-w-md md:max-w-full object-contain aspect-auto" />
            </div>
          )}

          <div className="flex-1 flex flex-col justify-center items-start gap-4 md:gap-6 text-left">
            <h3 className="text-blue-950 text-xl md:text-2xl font-bold">{section.title}</h3>
            {section.extraText && <div className="text-pink-600 text-2xl md:text-3xl leading-8">{section.extraText}</div>}
            <div className="text-gray-500 text-lg leading-8">{section.description}</div>
            <Link to="/cursos">
              <ButtonArrow>{section.buttonText}</ButtonArrow>
            </Link>
          </div>

          {section.reverse && (
            <div className="flex-1 flex justify-center items-center">
              <img loading="lazy" src={section.img} alt={section.title} className="w-full max-w-md md:max-w-full object-contain aspect-auto" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
