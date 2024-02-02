import { CenterList } from '../../types/types';
import Tab from './Tab';

export default function TabBar({ centersList }: { centersList: CenterList[] }) {
  return (
    <>
      {centersList.map((center) => (
        <Tab key={center.centerType} center={center} />
      ))}
    </>
  );
}
