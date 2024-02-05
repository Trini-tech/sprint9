import InputIcon from '../../components/atoms/InputWithIcon';
import Button from '../../components/atoms/Button';
import { Link } from 'react-router-dom';

export default function LoginComponent() {
  return (
    <div className="flex justify-center">
      <form className="grid grid-cols-1 gap-3 items-center  w-[40rem] px-16 py-12 max-md:px-5 max-md:max-w-full ">
        <InputIcon type="email" iconName="user" placeholder="Introdueix el correu" />
        <InputIcon type="password" iconName="lock-closed" placeholder="Contrasenya" />
        <Button styles="bg-pink-600 w-full">Accedeix</Button>
        <div className="flex justify-center mt-4 text-base leading-7 text-slate-950">T'has oblidat de la contrasenya?</div>
        <div className="flex justify-center text-base leading-7 text-gray-400 ">
          <span className="mr-1">Encara no t'has registrat? </span>
          <Link to="/signup">
            <span className="text-pink-600 cursor-pointer"> Registre</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
