import News from "../components/news/News";
import Notes from "../components/notes/Notes";
import Timer from "../components/timer/Timer";
import UserDetails from "../components/user-details/UserDetails";
import Weather from "../components/weather/Weather";
import { useNavigate } from "react-router-dom";
import './Display.css'
export default function Display() {
  const redirect = useNavigate();
  const handleClick = () => {
    redirect("/browse");
  };
  return (
    <div className="homepage-container">
      <section className="left-part">
        <div className="left-top">
          <div className="left-top-left">
            <UserDetails />
            <Weather />
          </div>
          <Notes/>
        </div>
        <div className="left-bottom">
          <Timer/>
        </div>
      </section>
      <section className="right-part">
        <News></News>
      </section>
      <button onClick={handleClick}>Browse</button>
    </div>
  );
}
