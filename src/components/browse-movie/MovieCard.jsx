
import action from '../../assets/action.png'
import PropTypes from 'prop-types';


export default function MovieCard(item) {
  console.log(item.data);
  const movies = [
    {
      title: "Movie 1",
      src: "action"
    },
    {
      title: "Movie 2",
      src: "fiction"
    },
    {
      title: "Movie 3",
       src:"horror"
    },
    {
      title: "Movie 4",
      src:"drama"
    }
  ];

  return (
  <div style={{display:"flex", flexDirection:"column", width:"100%", gap:"2vh"}}>
  <h1 style={{color:"#878787", fontFamily:"roboto", fontWeight:"500", fontSize:"1.2rem"}}>{item.data}</h1>
  <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)"}}>
    {movies.map((movie, index) => {
      return (
        <div key={index} style={{borderRadius:"5px"}}>
          <img src={action}></img>
        </div>
      );
    })}
  </div>
</div>

  );
}
MovieCard.propTypes = {
  item: PropTypes.any.isRequired,
};