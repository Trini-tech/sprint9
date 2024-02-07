import { CenterList } from '../../types/types';
import Tab from './Tab';

export default function TabBar({ list }: { list: CenterList[] }) {
  return (
    <>
      {list.map((item) => (
        <Tab key={item.centerType} item={item} />
      ))}
    </>
  );
}
