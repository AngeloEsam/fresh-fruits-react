import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from 'framer-motion';
const navbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 3, title: "About", path: "#" },
  { id: 5, title: "Contact", path: "#" },
  { id: 2, title: "Products", path: "#" },
  { id: 4, title: "Shop", path: "#" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 0.5 ,delay:0.5}}
         className="container flex justify-between items-center py-4 md:pt-4">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center text-gray-600">
              {navbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <button className=" text-2xl p-2 text-gray-600 hover:text-white rounded-full hover:bg-primary duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          {/* Mobile humburger menu */}
          <div className="md:hidden" onClick={()=>setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
        {/* Mobile Menu Section */}
        <ResponsiveMenu open={open}/>
      </nav>
    </>
  );
};

export default Navbar;
