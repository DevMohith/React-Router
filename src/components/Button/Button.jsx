import "./Button.css";
import Loader from "../Loader/Loader";

const Button = ({ value, handleLogin, isLoading, displayTrue, displayFalse }) => {
  return (
    <>
      <button 
        className="login" 
        onClick={handleLogin} 
        data-testid="login_button"
      >
        {isLoading ? <Loader component={"Login"} /> : value ? displayTrue : displayFalse}
      </button>
    </>
  );
};

export default Button;
