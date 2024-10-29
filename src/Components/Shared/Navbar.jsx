import { BiBell, BiSearch } from "react-icons/bi";
import image from "../../assets/image.jpg"
import { useState } from "react";
import { FaBars, FaInbox, FaRegImages, FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaBullseye } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbBrandGoogleAnalytics, TbFidgetSpinner } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";
import { MdOutlineChevronRight } from "react-icons/md";
import { PiStorefrontBold } from "react-icons/pi";
import { FiEye } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";

export const navLinks = [
  {
      label: "Home",
      path: "/dashboard",
      icon: <GoHomeFill/>
      
  },
  {
      label: "Orders",
      path: "/dashboard/orders",
      subLinks: [
          {
              label: "Drafts",
              path: "/dashboard/draft_orders"
          },
          
          {
              label: "Abandoned Checkouts",
              path: "/dashboard/orders/chekouts"
          },

      ],
      icon: <FaInbox/>
      
  },

  {
      label: "Products",
      path:"/dashboard/products",
      subLinks: [
        {
            label: "Collections",
            path: "/dashboard/products/collections"
        },
        
        {
            label: "Inventory",
            path: "/dashboard/products/inventory"
        },
        {
            label: "Purchase orders",
            path: "/dashboard/products/purchase_orders"
        },
        {
            label: "Transfers",
            path: "/dashboard/products/transfers"
        },
        {
            label: "Gift cards",
            path: "/dashboard/products/gift_cards"
        },
        {
            label: "Catalogs",
            path: "/dashboard/products/catalogs"
        },

    ],
      icon:<ImPriceTag />
  },
  {
      label: "Customers",
      path:"/dashboard/customers",
      subLinks: [
        
          {
            label: "Segments",
            path: "/dashboard/customers/segments"
        },
        
          {
            label: "Companies",
            path: "/dashboard/customers/companies"
        },
        
      ],
      icon:<FaUser/>
  },
  {
      label: "Content",
      path:"/dashboard/content",
      subLinks: [
        
        {
          label: "Metaobjects",
          path: "/dashboard/content/metaobjects"
      },
      
        {
          label: "Files",
          path: "/dashboard/content/files"
      },
      
    ],
      icon: <FaRegImages/>
    
  },
  {
      label: "Analytics",
      path:"/dashboard/analytics",
      subLinks: [
        
        {
          label: "Reports",
          path: "/dashboard/analytics/reports"
      },
      
        {
          label: "Live View",
          path: "/dashboard/analytics/live"
      },
      
    ],
      icon: <TbBrandGoogleAnalytics/>
    
  },
  {
      label: "Marketing",
      path:"/dashboard/marketing",
      subLinks: [
        
        {
          label: "Campaigns",
          path: "/dashboard/marketing/campaigns"
      },
      
        {
          label: "Automations",
          path: "/dashboard/marketing/automations"
      },
      
    ],
      icon:  <FaBullseye/>
    
  },
  {
      label: "Discounts",
      path:"/dashboard/discounts",
      icon: <RiDiscountPercentFill/>
  },
  
]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropDown, setDropDown] = useState(null)
   
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropDown = (index)=>{
    setDropDown((prev)=>(prev === index ? null : index))
  }

    return (
        <nav className="bg-[#1a1a1a] text-white px-1 md:px-4 py-3 flex items-center justify-between ">

            {/* logo for the medium device route */}
      <div className="hidden  md:flex items-center space-x-1">
        <img
          src={image}
          alt="Shopify Logo"
          className="w-8 h-8"
        />
        <span className="font-bold text-lg">shopify</span>
      </div>

      {/* Drop down menu for the small device */}
      <div className="block md:hidden relative">
      <button
        className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none  border border-gray-500 rounded-xl"
        onClick={toggleDropdown}
      >
        <FaBars className="h-5 w-5 text-white  " />
      </button>

      {isOpen && (
       <div className="absolute top-12 left-0 mt-1 w-60 bg-[#EBEBEB] text-gray-700 rounded-tl-3xl shadow-lg z-10  ">
        <div className="overflow-y-auto max-h-[70vh]">
          <ul className="py-5 pl-3 space-y-2">
            {navLinks.map((item, index)=><li key={index}>
              <NavLink to={item.path} className={({ isActive }) =>
              isActive
                ? "text-base font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "text-base font-semibold flex items-center gap-2"

                
            }
            onClick={()=>handleDropDown(index)}
            >
                <span className="ml-2">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>

              {dropDown === index && item.subLinks && (
                <ul className="pl-8 space-y-2">
                  {item.subLinks.map((subItem, subIndex)=>(
                    <li key={subIndex}>
                      <NavLink to={subItem.path} className={({ isActive }) =>
              isActive
                ? "text-base font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "text-base font-semibold "

                
            }
            
            >
             
                <span>{subItem.label}</span>
              </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>)}
            <div className="my-8 ">
                    <p className="text-sm font-semibold text-gray-600 flex justify-between items-center"><span>Sales channels</span> <span><MdOutlineChevronRight size={24}/></span></p>
                    <NavLink to="/dashboard/store" className={({ isActive }) =>
              isActive
                ? "text-base font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "text-base font-semibold  flex justify-between items-center px-2"
            }> <span className="flex items-center gap-2"><PiStorefrontBold />
                        Online Store</span>
                        <span><FiEye /></span>
                    </NavLink>
                </div>
            <div className="my-8 ">
                    <p className="text-sm font-semibold text-gray-600 flex justify-between items-center"><span>Apps</span> <span><MdOutlineChevronRight size={24}/></span></p>
                    <NavLink to="/dashboard/store" className={({ isActive }) =>
              isActive
                ? "text-base font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "text-base font-semibold  flex  items-center gap-2 px-2"
            }> <TbFidgetSpinner />
                       Flow
                        
                    </NavLink>
                </div>
               
           
           
          </ul>

         
        </div>

        <div className="border-t p-3 bg-white w-full">
       <NavLink to="/dashboard/settings" className={({ isActive }) =>
              isActive
                ? "text-base font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "text-base font-semibold flex items-center gap-2"
            }>
                <span className="ml-2"><IoMdSettings /></span>
                <span>Settings</span>
              </NavLink>
       </div>
       </div>

        
      )}
    </div>
      <div className="md:w-[650px]  mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#303030]  rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <div className="hidden  absolute inset-y-0 right-0 pr-3 md:flex items-center pointer-events-none">
            <span className="text-xs text-gray-400">CTRL K</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <BiBell className="h-5 w-5" />
        <button className=" text-white p-1 rounded-md  flex items-center gap-2 hover:border hover:bg-[#303030]">
           
        <img src={image} alt="image" className="w-8 h-6 rounded-md"/>
        <p className="hidden md:block text-sm">www.testshop.com</p>
        </button>
      </div>
    </nav>
    );
};

export default Navbar;