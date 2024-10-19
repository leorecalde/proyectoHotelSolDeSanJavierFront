import style from "./BtnLogin.module.css";
const BtnLogin = () => {
  return (
    <>
      <button className={`mt-2 ${style.btn_login} `}>Log in</button>
    </>
  );
};
export default BtnLogin;
