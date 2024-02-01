type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  type?: ButtonType;
  disabled?: boolean;
}

export default function Button(props: Props) {
  //bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)]
  //bg-gradient-to-tr from-pink-600 from-0% to-fuchsia-700 to-100%

  //bg-zinc-200 deshabilitat Places No disponibles:text-gray-400
  //bg-teal-500 habilitat

  return (
    <button onClick={props?.handleClick} className={`${props.styles} flex text-white text-sm justify-center font-bold items-center px-4 py-3 rounded-lg self-center`} type={props?.type} disabled={props?.disabled}>
      {props.children}
    </button>
  );
}
