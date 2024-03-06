import image from '../assets/image.png'
import MovieCard from '../components/browse-movie/MovieCard';
import { useNavigate } from 'react-router-dom';
function Browse() {
 const navigate=useNavigate();
  const data = JSON.parse(localStorage.getItem("movies"));
  return (
  <div style={{background:"black",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",padding:"0.5rem 1rem"}}>
    <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <h2 style={{fontFamily:"single day",fontWeight:"400",fontSize:"2rem",color:"#72DB73"}}>Super app</h2>
      <img src={image} width="45px" onClick={()=>{navigate("/display")}}></img>
    </nav>
    <section style={{margin:"1vh 2vw",display:"flex",flexDirection:"column",gap:"1.5vh"}}>
      <p style={{textAlign:"left",font:"roboto",fontWeight:"600",fontSize:"1.3rem"}}>Entertainment according to your choice</p>
      <div style={{height:"70vh",overflowY:"scroll"}}>
      {
        data.map((category,index)=>{
          return <MovieCard key={index} category={category}></MovieCard>
        })
      }
      </div>
    </section>
    <footer style={{position:"absolute",right:"0",bottom:"0",marginBottom:"2vh",marginRight:"2vw"}}>
      <button style={{cursor:"pointer",border:"none",background:"#148A08",padding:"1.5vh 2vw",fontFamily:"roboto",fontSize:"1rem",borderRadius:"5px",letterSpacing:"0.04em"}} onClick={()=>{
        navigate('/movies')
      }}>Select Again</button>
    </footer>
  </div>
  )
}

export default Browse