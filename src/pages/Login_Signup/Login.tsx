import InputIcon from '../../components/atoms/InputWithIcon';

export default function LoginComponent() {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col items-stretch  w-[40rem] px-16 py-12 max-md:px-5 max-md:max-w-full ">
        <InputIcon type="email" iconName="user" placeholder="Introdueix el correu" />
        <InputIcon type="password" iconName="lock-closed" placeholder="Contrasenya" />
        <button className="relative justify-center items-center px-16 py-3.5 mt-6 text-base leading-7 text-center text-white rounded-md bg-[radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)] max-md:px-5" type="submit">
          Accedeix
        </button>
        <div className="relative self-center mt-9 text-base leading-7 text-slate-950">T'has oblidat de la contrasenya?</div>
        <div className="relative self-center mt-2 mb-7 text-base leading-7 text-gray-400 ">
          <span>Encara no t'has registrat? </span>
          <span>Registre</span>
        </div>
      </form>
    </div>
  );
}
