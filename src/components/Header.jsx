import Button from "./Button";

const Header = ({ title, onAdd }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
