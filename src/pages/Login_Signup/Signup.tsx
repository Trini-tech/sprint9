import InputIcon from '../../components/atoms/InputWithIcon';
import ButtonArrow from '../../components/atoms/ButtonArrow';

export default function SignupComponent() {
  return (
    <div className="flex justify-center">
      <form className="grid grid-cols-1 gap-3 justify-center items-center  w-[40rem] px-16 py-12 max-md:px-5 max-md:max-w-full ">
        <InputIcon type="email" iconName="user" placeholder="Introdueix el correu" />
        <InputIcon type="password" iconName="lock-closed" placeholder="Contrasenya" />
        <ButtonArrow>Registre</ButtonArrow>
      </form>
    </div>
  );
}
