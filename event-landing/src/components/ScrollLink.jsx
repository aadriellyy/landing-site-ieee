import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollLink = ({ to, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          duration: 500,
          offset: -70, 
        });
      }, 100); 
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return <a href={`#${to}`} onClick={handleClick}>{children}</a>;
};

export default ScrollLink;
