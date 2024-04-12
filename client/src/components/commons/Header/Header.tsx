import { NavLink } from "react-router-dom";
import { User, Logo, Search, BagIcon } from "./components";

const Header = () => {
  return (
    <header className='flex gap-4 flex-col bg-white px-8 shadow-md'>
      <div className='top flex items-center justify-between gap-16 '>
        <Logo />
        <Search />
        <div className='flex gap-2'>
          <User />
          <BagIcon />
        </div>
      </div>
      <div className='bottom flex items-center justify-between pb-2'>
        <div className='gridMenu'>grid menu</div>
        <div className='nav_list flex items-center gap-8'>
          <NavLink
            className={({ isActive }) =>
              ` rounded-md p-2 ${isActive ? " bg-myPrimary-light" : ""}`
            }
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` rounded-md p-2 ${isActive ? " bg-myPrimary-light" : ""}`
            }
            to='/products'
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` rounded-md p-2 ${isActive ? " bg-myPrimary-light" : ""}`
            }
            to='/categories'
          >
            Categories
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
