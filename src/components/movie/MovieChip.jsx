import PropTypes from 'prop-types';
import cross from '../../assets/cross.png'

export default function MovieChip({data,setSelected}) {
  const handleClick = (event) => {
    event.preventDefault();
    setSelected((prev) => prev.filter((item) => item !== data));
  };
  console.log(data)
  return (
    <div
    style={{borderRadius:"30px",background:"#148A08",fontFamily:"roboto",fontSize:"18px",fontWeight:"400",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"space-around",width:'9vw',height:"6vh",}}
    >
      {data}
      <button style={{border:"none",background:"#148A08",width:"2vw",margin:"0",padding:"0",}} onClick={handleClick}><img src={cross}  /></button>
    </div>
  )
}

MovieChip.propTypes = {
  data: PropTypes.any.isRequired,
  selected: PropTypes.any.isRequired,
  setSelected: PropTypes.func.isRequired
};