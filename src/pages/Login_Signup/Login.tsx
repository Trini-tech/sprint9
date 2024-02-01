import InputIcon from '../../components/atoms/InputWithIcon';
import Button from '../../components/atoms/Button';

export default function LoginComponent() {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col justify-center items-center  w-[40rem] px-16 py-12 max-md:px-5 max-md:max-w-full ">
        <InputIcon type="email" iconName="user" placeholder="Introdueix el correu" />
        <InputIcon type="password" iconName="lock-closed" placeholder="Contrasenya" />
        <Button styles="bg-pink-600 w-full">Accedeix</Button>
        <div className="relative self-center mt-9 text-base leading-7 text-slate-950">T'has oblidat de la contrasenya?</div>
        <div className="relative self-center mt-2 mb-7 text-base leading-7 text-gray-400 ">
          <span>Encara no t'has registrat? </span>
          <span>Registre</span>
        </div>
      </form>
    </div>
  );
}
