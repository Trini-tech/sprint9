import { useState } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker'; ////https://react-tailwindcss-datepicker.vercel.app/props#container-class
import DisclosureFilterCheckbox from '../../../components/atoms/DisclosureFilter';
import { Filter } from '../../../types/types';

interface DatepickerValue {
  startDate: Date;
  endDate: Date;
}

export default function FiltersSection({ courseFilters }: { courseFilters: Filter[] }) {
  const [value, setValue] = useState<DatepickerValue>({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 11)),
  });

  const handleValueChange = (value: DateValueType) => {
    setValue(value as DatepickerValue);
  };

  return (
    <>
      <div className="items-stretch grid grid-cols-1 pr-10 py-10 max-md:pr-5">
        {/*Title*/}
        <span className="justify-start items-center flex gap-5">
          <div className="text-blue-950 text-base font-bold pl-2 leading-7 mb-6">Filtrar per</div>
        </span>
        {/*Calendar*/}
        <Datepicker
          inputClassName="w-full self-center border border-solid border-gray-200 rounded-lg py-4 px-7 justify-center"
          placeholder={'Selecciona una data'}
          minDate={new Date('2024-01-01')}
          /*maxDate={new Date("2023-01-30")}*/
          asSingle={true}
          useRange={false}
          primaryColor={'pink'}
          startWeekOn="mon"
          value={value}
          onChange={handleValueChange}
          displayFormat={'DD/MM/YYYY'}
          showShortcuts={false}
        />
        {/*Filters*/}
        {courseFilters.map((coursefilter) => (
          <DisclosureFilterCheckbox key={coursefilter.title} coursefilter={coursefilter} />
        ))}
      </div>
    </>
  );
}
