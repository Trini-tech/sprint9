import DisclosureCustom from '../../../components/atoms/DisclosureCustom';

export default function FAQsection() {
  return (
    <div className="w-full">
      <div className="justify-center items-center self-stretch bg-slate-100 flex w-full flex-col px-28 py-10 max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col mt-5 mb-11 max-md:max-w-full max-md:mb-10">
          {/*Section titles */}
          <div className="text-pink-600 text-center text-lg leading-8 self-center whitespace-nowrap">FAQ</div>
          <h3 className="text-blue-950 text-center leading-10 self-center whitespace-nowrap mt-2">Alguna pregunta?</h3>

          {/*FAQ dropdowns */}
          <div className="grid  grid-cols-1 md:grid-cols-2 justify-between gap-10 mt-12 items-start">
            <DisclosureCustom title="Qui pot accedir a les formacions?" description="Tota persona major de 16 anys i amb DNI, NIE o passaport pot inscriure's a qualsevol activitat de Cibernàrium. No cal estar en cap situació laboral específica (ocupada, en atur, etc.) ni pertànyer a cap sector professional concret." />
            <DisclosureCustom title="Qui pot accedir a les formacions?" description="Tota persona major de 16 anys i amb DNI, NIE o passaport pot inscriure's a qualsevol activitat de Cibernàrium. No cal estar en cap situació laboral específica (ocupada, en atur, etc.) ni pertànyer a cap sector professional concret." />
            <DisclosureCustom title="Qui pot accedir a les formacions?" description="Tota persona major de 16 anys i amb DNI, NIE o passaport pot inscriure's a qualsevol activitat de Cibernàrium. No cal estar en cap situació laboral específica (ocupada, en atur, etc.) ni pertànyer a cap sector professional concret." />
            <DisclosureCustom title="Qui pot accedir a les formacions?" description="Tota persona major de 16 anys i amb DNI, NIE o passaport pot inscriure's a qualsevol activitat de Cibernàrium. No cal estar en cap situació laboral específica (ocupada, en atur, etc.) ni pertànyer a cap sector professional concret." />
          </div>
        </div>
      </div>
    </div>
  );
}
