import MovieBox from "../components/movie/MovieBox";
// import MovieChip from "../components/movie/MovieChip";
import  {useState}  from "react";
import "./Movies.css"
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import vector from '../assets/Vector.png'
import  {useNavigate} from "react-router-dom";
import MovieChip from "../components/movie/MovieChip";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "90%", height: "70%" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "90%", height: "70%"  }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "90%", height: "70%"  }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "90%", height: "70%"  }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "90%", height: "70%"  }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "90%", height: "70%" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{width: "90%", height: "70%" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{width: "90%", height: "60%"  }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "90%", height: "60%"  }} src={western} />,
  },
];
export default function Movies() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      localStorage.setItem("movies", JSON.stringify(selected));
      navigate("/display");
    }
  };
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",width:"100vw",height:"100vh",background:"black",alignItems:"center",alignContent:"center"}}>
      <div className="sideview" style={{width:"30%"}}>
       <h2 style={{color:"#72DB73",fontFamily:"single day,cursive",fontWeight:"400",fontSize:"5vw"}}>Super app</h2>
       <p style={{fontFamily:"Roboto",fontWeight:"700",fontSize:"4vw"}}>Choose your entertainment category</p>
       <div style={{display:"flex",flexWrap:"wrap",gap:"1vw",marginTop:"10px"}}>
        {
          selected.map((item,index)=>{
            return <MovieChip data={item} key={index} selected={selected} setSelected={setSelected}></MovieChip>
          })
        }
       </div>
       {
          selected.length<3&&<div style={{display:"flex",gap:"7px",justifyItems:"baseline",marginTop:"10px"}}>
            <img src={vector} alt="" />
            <p style={{color:"red"}}>Minimum 3 Category required</p>
          </div>
        }
      </div>
      <div >
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,14vw)",rowGap:"10px",columnGap:"10px"}}>
         {
          genres.map((genres,index)=>{
            return <MovieBox key={index} data={genres} selected={selected} setSelected={setSelected}></MovieBox>
          })
         }
        </div>
        <button style={{position:"absolute",bottom:"15px",right:"15px",background:"#148A08",padding:"0.7vh 1.4vw",border:"none",fontFamily:"dm sans",fontWeight:"500",fontSize:"1rem",letterSpacing:"2%",textAlign:"center",borderRadius:"15px",cursor:"pointer"} } onClick={handleClick} >Next Page</button>
      </div>
    </div>
  );
}