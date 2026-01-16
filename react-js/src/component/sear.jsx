import menu from "../assets/menu.png";
import sear from "../assets/se.png";
const Search = () => {
    return (
        <section>
            <div className="container">
                <div className="search-bar">

                    {/* Left: All Departments */}
                    <div className="departments">
                        <span className="menu-icon"><img src={menu} alt={""} /></span>
                        <select>
                            <option>All Departments</option>
                            <option>Men</option>
                            <option>Women</option>
                            <option>Kids</option>
                        </select>
                    </div>

                    {/* Middle: Search Input */}
                    <div className="search-input">
                        <input type="text" placeholder="Search..." />
                    </div>

                    {/* Right: Category + Search Button */}
                    <div className="search-action">
                        <select>
                            <option>All Category</option>
                            <option>Clothing</option>
                            <option>Shoes</option>
                            <option>Accessories</option>
                        </select>

                        <button className="search-btn"><img src={sear} alt={""} /></button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Search