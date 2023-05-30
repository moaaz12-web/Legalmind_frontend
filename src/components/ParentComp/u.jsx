// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../logo2.jpg"
// import pfp from "../pfp.jpg"
// // RxAvatar
// import {RxAvatar} from "react-icons/rx"



// const navigation = [
//   { name: "Vega.AI", href: "/home", current: true },
//   // { name: "Home", href: "/", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar({user, Logout}) {
//   const navigate = useNavigate();

//   const checkUser = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user || !user._id) {
//       navigate("/signin");
//     } else if (user || user._id) {
//       navigate("/home");
//     }
//   };


//   const LogoutHandler = () => {
//     Logout();
//     navigate("/signin");
//   };
//   return (
//     <Disclosure as="nav" className="bg-[#F90105] opacity-90 shadow-2xl">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"> */}
//                 {/* Mobile menu button*/}
//                 {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white font-bold bg-[#F90105] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button> */}
//               {/* </div> */}
//               <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="block h-8 w-auto lg:hidden md:h-14 mr-3 rounded-full hover:cursor-pointer border-none"
//                     src={logo}
//                     alt="logo"
//                     onClick={() => navigate("/home")}
//                   />
//                   <img
//                     className="hidden h-8 w-auto lg:block md:h-14 mr-3 border rounded-full hover:cursor-pointer hover:shadow-2xl hover:ring-1 hover:ring-purple-500"
//                     src={logo}
//                     alt="logo"
//                     onClick={() => navigate("/home")}

//                   />
//                 </div>

//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 {/* Profile dropdown */}
//                 <Menu as="div" className=" relative ml-3">
//                   <div>
//                     <Menu.Button className="flex rounded-full bg-gray-800 text-sm ">
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-10 w-10 rounded-full"
//                         src={pfp}
//                         alt="profile pic"
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-[-1] mt-2 w-48 origin-top-right rounded-md bg-white text-[#F90105] font-bold py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm text-gray-700"
//                             )}
//                           >
//                             <h1>{localStorage.getItem("name")}</h1>
//                           </a>
//                         )}
//                       </Menu.Item>
//                       {/* <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm text-gray-700"
//                             )}
//                           >
//                             View docs
//                           </a>
//                         )}
//                       </Menu.Item> */}
//                       <Menu.Item>
//                         {({ active }) => (
//                           <span
//                             // href="/signin"
//                             className={classNames(
//                               active ? "bg-gray-100 cursor-pointer" : "",
//                               "block px-4 py-2 text-sm text-[#F90105] font-bold"
//                             )}
//                             onClick={LogoutHandler}
//                           >
//                             Logout
//                           </span>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <span
//                             className={classNames(
//                               active ? "bg-gray-100 cursor-pointer" : "",
//                               "block px-4 py-2 text-sm text-[#F90105] font-bold"
//                             )}
//                             onClick={checkUser}
//                           >
//                             Home
//                           </span>
//                         )}
//                       </Menu.Item>
//                                             <Menu.Item>
//                         {({ active }) => (
//                           <span
//                             className={classNames(
//                               active ? "bg-gray-100 cursor-pointer" : "",
//                               "block px-4 py-2 text-sm text-[#F90105] font-bold"
//                             )}
//                             onClick={()=>navigate("/aboutus")}
//                           >
//                             About Us
//                           </span>
//                         )}
//                       </Menu.Item>
                    
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-gray-600",
//                     "block px-3 py-2 rounded-md text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }


//! old working navbar