import { UserIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/outline';

type Icons = 'user' | 'lock-closed';

const getIconFromName = (iconName: Icons) => {
  const defaultIconClasses = 'object-contain object-center shrink-0 my-auto w-4 aspect-square';
  switch (iconName) {
    case 'user':
      return <UserIcon className={defaultIconClasses} />;
    case 'lock-closed':
      return <LockClosedIcon className={defaultIconClasses} />;
  }
};

type InputType = 'email' | 'password';

interface Props {
  iconName: Icons;
  placeholder: string;
  type: InputType;
}

export default function InputIcon(props: Props) {
  const icon = getIconFromName(props.iconName);

  return (
    <>
      <div className="relative w-full py-1">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">{icon}</div>
        <input
          type={props.type}
          id={props.type} // Canviar
          className="flex text-gray-900 bg-white rounded-lg border border-gray-300 rounded-l-lg focus:border-pink-600 focus:outline-none appearance-none w-full text-sm py-3 px-4 pl-10 p-2.5"
          placeholder={props.placeholder}
          required
        />
      </div>
    </>
  );
}
