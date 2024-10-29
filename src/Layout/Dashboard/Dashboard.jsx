import { IoMdSettings } from "react-icons/io";
import Navbar, { navLinks } from "../../Components/Shared/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { MdOutlineChevronRight } from "react-icons/md";
import { PiStorefrontBold } from "react-icons/pi";
import { FiEye } from "react-icons/fi";
import { useState } from "react";


const Dashboard = () => {
const [dropDown, setDropDown] = useState()

  const handleDropDown = (index)=>{
    setDropDown((prev)=>(prev === index ? null : index))
  }
    return (
        <div className="w-full max-h-screen flex flex-col">
            <Navbar/>
            <div className="w-full flex  overflow-y-auto ">
                {/* sidebar */}
                <aside className="hidden md:block w-60 bg-[#EBEBEB] text-gray-700  flex-shrink-0 rounded-tl-xl px-5 py-3 max-h-screen">
                <div className="overflow-y-auto max-h-[80vh] ">
          <ul className=" space-y-2">
            {navLinks.map((item, index)=><li key={index}>
              <NavLink to={item.path} className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold flex items-center gap-2 border bg-white   rounded-lg" // Active style
                : " hover:bg-gray-100 hover:rounded-lg font-semibold flex items-center   text-sm  gap-2"
            }
             onClick={()=>handleDropDown(index)}
            >
                <span className="ml-2">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>

              {dropDown === index && item.subLinks && (
                <ul className=" space-y-2 ">
                  {item.subLinks.map((subItem, subIndex)=>(
                    <li key={subIndex}>
                      <NavLink to={subItem.path} className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "text-sm font-semibold "

                
            }
            
            >
             
                <span className="pl-8">{subItem.label}</span>
              </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>)}
            <div className="pt-4 ">
                    <p className="text-[13px] font-semibold text-gray-600 flex justify-between items-center"><span>Sales channels</span> <span className="cursor-pointer"><MdOutlineChevronRight size={24}/></span></p>
                    <NavLink to="/dashboard/store" className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "hover:bg-gray-100 hover:rounded-lg font-semibold px-2  text-sm  gap-2 flex items-center justify-between group"
            }> <span className="flex items-center gap-2"><PiStorefrontBold size={18}/>
                        Online Store</span>
                        <span className="group-hover:block hidden"><FiEye /></span>
                    </NavLink>
                </div>

            <div className=" py-8 ">
                    <p className="text-[13px]  font-semibold text-gray-600 flex justify-between items-center"><span>Apps</span> <span className="cursor-pointer"><MdOutlineChevronRight size={24}/></span></p>
                    <NavLink to="/dashboard/store" className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "hover:bg-gray-100 hover:rounded-lg font-semibold flex items-center   text-sm  gap-2"
            }> <TbFidgetSpinner size={18}/>
                       Flow
                        
                    </NavLink>
                </div>
               
                
           
          </ul>

         
        </div>
        <div className="border-t p-3 bg-[#EBEBEB] w-full">
       <NavLink to="/dashboard/settings" className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold flex items-center gap-2 border bg-white  py-1 rounded-md" // Active style
                : "hover:bg-gray-100 hover:rounded-lg font-semibold flex items-center   text-sm  gap-2"
            }>
                <span className=""><IoMdSettings size={18}/></span>
                <span>Settings</span>
              </NavLink>
       </div>
        
                </aside>

                {/* Main Content */}

                <div className="bg-[#F1F1F1] flex-1 ">
               {/* <div className="border p-4 bg-white rounded-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam itaque non incidunt unde quo amet laboriosam voluptatem reiciendis maxime repudiandae fugit deserunt, a asperiores veritatis mollitia dicta rem molestias?
               </div> */}

               <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;