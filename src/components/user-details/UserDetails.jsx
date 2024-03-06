import profile from '../../assets/profile.png';
import './UserDetails.css'
export default function UserDetails() {
  const user = JSON.parse(localStorage.getItem("userData")) || {};
  const categories = JSON.parse(localStorage.getItem("movies")) || [];
    return (
    <div className="user-details-box">
      <img src={profile} alt="profile" />
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
        <h2 className="username">{user.username}</h2>
        <div className="categories-choosen">
          {categories.map((category, index) => {
            return <div key={index}>{category}</div>;
          })}
        </div>
      </div>
    </div>
    );
}
