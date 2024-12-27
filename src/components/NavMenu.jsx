import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import CloseButton from "./CloseButton";

function NavMenu({ isMobileNavMenuOpen, cartItemCount, closeMobileNavMenu }) {
  return (
    <ul
      className={
        !isMobileNavMenuOpen
          ? "hidden sm:block sm:p-4"
          : "fixed sm:static h-full sm:h-auto w-2/5 sm:w-auto top-0 right-0 p-4 z-10 sm:z-auto border sm:border-none rounded-sm bg-white sm:bg-transparent"
      }
    >
      <div className="flex flex-row-reverse">
        <CloseButton closeMobileNavMenu={closeMobileNavMenu} />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-6">
        <li>
          <NavLink
            to="shop"
            onClick={closeMobileNavMenu}
            className={({ isActive }) =>
              `hover:text-neutral-700 uppercase font-bold tracking-wider ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cart"
            onClick={closeMobileNavMenu}
            className={({ isActive }) =>
              `hover:text-neutral-700 uppercase font-bold tracking-wider ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            {cartItemCount !== 0 ? `Cart (${cartItemCount})` : "Cart"}
          </NavLink>
        </li>
      </div>
    </ul>
  );
}

NavMenu.propTypes = {
  isMobileNavMenuOpen: PropTypes.bool.isRequired,
  cartItemCount: PropTypes.number.isRequired,
  closeMobileNavMenu: PropTypes.func.isRequired,
};

export default NavMenu;
