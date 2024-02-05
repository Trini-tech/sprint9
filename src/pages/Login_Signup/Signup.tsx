import InputIcon from '../../components/atoms/InputWithIcon';
import Button from '../../components/atoms/Button';

export default function SignupComponent() {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col justify-center items-center  w-[40rem] px-16 py-12 max-md:px-5 max-md:max-w-full ">
        <InputIcon type="email" iconName="user" placeholder="Introdueix el correu" />
        <InputIcon type="password" iconName="lock-closed" placeholder="Contrasenya" />
        <Button styles="bg-pink-600 w-full">Registre</Button>
      </form>
    </div>
  );
}
