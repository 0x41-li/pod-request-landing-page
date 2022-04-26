import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" className="header__img" />
      </div>
    </div>
  );
}
