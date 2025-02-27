import { useEffect }from "react";
 import { NavLink, Outlet, useNavigate } from "react-router-dom";



  // As soon as the component is mounted we need to navigate the user to to nested route to show some info on ui
  const About = () => {
    const navigate = useNavigate();
    useEffect(()=> {
      navigate("info");
    }, []);
  
  // useNavigate
  
  return (
    <div>
      <nav
        data-testid="mini_switch"
        style={{ border: "none", justifyContent: "center" }}
      >
        <NavLink to="info">Info</NavLink>
        <NavLink to="offers">Offers</NavLink>
      </nav>
      {/* outlet is used to trigger child components behaviour in parent component */}
      <Outlet /> 
    </div>
  );
};
export default About;
