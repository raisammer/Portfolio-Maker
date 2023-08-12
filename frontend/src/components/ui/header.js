import LoginButton from "./login"
const Header=()=>{
  return (
      <div className="bg-black py-4 px-12 flex justify-between items-center">
          <img src="/logo.png" alt="Portflix" className="h-12" />
          <LoginButton text={"Login"} buttonClass="py-2"/>
      </div>
  );
}
export default Header