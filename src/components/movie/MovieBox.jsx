
import PropTypes from 'prop-types';
export default function MovieBox({data,selected,setSelected}) {
  const isSelected = selected.includes(data.id);
  const handleClick = () => {
    if (selected.includes(data.id)) {
      setSelected((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelected((prev) => {
        return [...prev, data.id];
      });
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",background: data.color, textAlign: "center", borderRadius: "5px", cursor: "pointer", margin: "0",border:isSelected&&"5px solid green"}} onClick={handleClick}>
     <p>{data.id}</p>
     { data.image}
    </div>
  );
}

MovieBox.propTypes = {
  data: PropTypes.object.isRequired,
  selected: PropTypes.any.isRequired,
  setSelected: PropTypes.func.isRequired
};