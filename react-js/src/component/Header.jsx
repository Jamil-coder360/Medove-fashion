import logo from "../assets/Modevo.png";
import se from "../assets/se.png";
import user from "../assets/user.png";
import love from "../assets/love.png";
import bag from "../assets/bag.png";
// console.log(logo);
const Header = () => {
  return (
    <nav>
        <div className="main_menu">
            <div className="logo">
             <img src={logo} alt={""} />
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#" id="">Home</a></li>
                    <li><a href="#" id="">Contact</a></li>
                    <li><a href="#" id="">Features</a></li>
                    <li><a href="#" id="">About Us</a></li>
                </ul>
            </div>
            <div className="btn">
              <button><span><img src={se} alt={""} /></span></button>
              <button><span><img src={user} alt={""} /></span></button>
              <button><span><img src={love} alt={""} /></span></button>
              <button><span><img src={bag} alt={""} /></span></button>
            </div>
        </div>
    </nav>
  )
}

export default Header