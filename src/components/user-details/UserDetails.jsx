import profile from '../../assets/profile.png';
import './UserDetails.css'
export default function UserDetails() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const category = JSON.parse(localStorage.getItem("movies"));
    console.log(user,category);
    return (
    <div className="user-details-box">
      <img src={profile} alt="profile" />
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
        <h2 className="username">{user.username}</h2>
        <div className="categories-choosen">
          {category.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
    );
}
