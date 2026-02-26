import React, { useState } from "react";
import { Link } from "react-router";
import searchIcon from "../assets/icons/search.png";
import userIcon from "../assets/icons/user.png";
import favoriteIcon from "../assets/icons/carbon_favorite.png";
import cartIcon from "../assets/icons/cart.png";
import menuIcon from "../assets/icons/ri_menu-2-fill.png";
import Button from "./Button";
const menuItem = [
  {
    id: 1,
    text: "HOME",
    link: "/",
  },
  {
    id: 2,
    text: "SHOP",
    link: "/shop",
  },
  {
    id: 3,
    text: "PRODUCT",
    link: "/product",
  },
  {
    id: 4,
    text: "PAGES",
    link: "/pages",
  },
  {
    id: 3,
    text: "BLOG",
    link: "/blog",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="my-7.5">
      <nav>
        <div className="container ">
          <div className="flex justify-between items-center">
            <div className="image">
              <img src="/logo.png" alt="logo" />
            </div>

            {/* Dekstop veiw */}

            <div className="hidden lg:block">
              <ul className="flex items-center justify-center gap-11">
                {menuItem.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        className="text-[14px] font-medium font-jost text-black-d0a"
                        to={item.link}
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* mobile veiw */}

            {/* overlay for menu-ber close */}

            {isOpen && (
              <>
                <div
                  className={`fixed top-0 left-0 h-full w-[220px] bg-white z-50 transform transition-transform duration-300 lg:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                  <ul className="flex pt-10 gap-5 flex-col pl-4 ">
                    {menuItem.map((item) => {
                      return (
                        <li key={item.id} onClick={() => setIsOpen(false)}>
                          <Link
                            className="text-[14px] font-medium font-jost text-black-d0a"
                            to={item.link}
                          >
                            {item.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                />
              </>
            )}

            <div className="flex justify-end gap-4">
              <IconBox icon={searchIcon} />
              <IconBox icon={userIcon} />
              <IconBox icon={favoriteIcon} count />
              <IconBox icon={cartIcon} count />
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[40px_170px_1fr] gap-2.5 items-center justify-between">
          <button
            className="bg-[F3F3F3] p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={menuIcon} alt="menu" />
          </button>
          <div className="hidden lg:block">
            <select name="" id="" className="uppercase ">
              <option value="All DEPARTMENTS">All DEPARTMENTS</option>
              <option value="Shirt">Shirt </option>
              <option value="Pant">Pant</option>
              <option value="Polo">Polo</option>
            </select>
          </div>
          <div className="">
            <form
              action=""
              className="grid grid-cols-[auto_1fr_1fr] lg:grid-cols-[1fr_120px_78px] items-center justify-between gap-2.5 "
            >
              <input className="w-full" type="text" placeholder="Search..." />

              <select name="" id="" className="uppercase  ">
                <option value="All Category">All Category</option>
                <option value="Shirt">Mid range </option>
                <option value="Pant">high range</option>
                <option value="Polo">low range</option>
              </select>

              <Button>
                <img src={searchIcon} alt="search" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
function IconBox({ icon, count = false }) {
  return (
    <button className="size-6 flex items-center justify-center cursor-pointer relative">
      <img src={icon} alt="icon" />

      {count && (
        <span className="size-4 rounded-full flex items-center justify-center bg-red-500 text-white text-[10px] absolute -top-0.5 -right-2 z-10">
          0
        </span>
      )}
    </button>
  );
}

export default Header;
