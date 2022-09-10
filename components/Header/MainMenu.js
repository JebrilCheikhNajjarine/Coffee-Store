import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import MButton from "../MButton";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
function MainMenu() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="  bg-secondary p-4 flex items-center justify-between text-white font-Roboto">
      <div>
        <Image
          src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/logo.png"
          width={118}
          height={40}
        />
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center cursor-pointer ">
          <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
            HOME
            <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
            <div
              className="absolute left-0 top-6 w-40 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
            >
              <ul className="text-white px-4 py-3 ">
                <Link href="/">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    COFFEE HOUSE
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    RESTAURANT
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <Link href="/About">
            <li className="mr-5 hover:text-orange transition duration-200  ease-in ">
              ABOUT
            </li>
          </Link>
          <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
            MENU
            <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
            <div
              className="absolute left-0 top-6 w-60 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
            >
              <ul className="text-white px-4 py-3">
                <Link href="/CoffeeMenu">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    MENU - COFFE
                  </li>
                </Link>
                <Link href="/RestaurantMenu">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    MENU - RESTAURANT
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
            PAGES
            <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
            <div
              className="absolute left-0 top-6 w-40 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
            >
              <ul className="text-white px-4 py-3">
                <Link href="/kaffen/reservation">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    RESARVATION
                  </li>
                </Link>
                <Link href="/kaffen/history">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    HISTORY
                  </li>
                </Link>
                <Link href="/kaffen/services">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    SERVICES
                  </li>
                </Link>
                <Link href="/kaffen/our-chefs">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    OUR CHEFS
                  </li>
                </Link>
                <Link href="/kaffen/gallery">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    GALLERY
                  </li>
                </Link>
                <Link href="/kaffen/faq">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    FAQ
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
            BLOG
            <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
            <div
              className="absolute left-0 top-6 w-40 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
            >
              <ul className="text-white px-4 py-3">
                <Link href="/kaffen/Blog-Grid">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    BLOG GRID
                  </li>
                </Link>
                <Link href="/kaffen/Blog-Standard">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    BLOG STANDARD
                  </li>
                </Link>
                <Link href="/kaffen/Blog-Single">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in">
                    BLOG SINGLE
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
            SHOP
            <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
            <div
              className="absolute left-0 top-6 w-40 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
            >
              <ul className="text-white px-4 py-3">
                <Link href="/kaffen/products">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                    PRODUCT
                  </li>
                </Link>
                <Link href="/kaffen/productSingle">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                    PRODUCT SINGLE
                  </li>
                </Link>
                <Link href="/kaffen/Cart">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                    CART
                  </li>
                </Link>
                <Link href="/kaffen/CheckOut">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                    CHECKOUT
                  </li>
                </Link>
                <Link href="/kaffen/MyAccount">
                  <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                    MY ACCOUNT
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
            <Link href="/kaffen/Contacts">CONTACTS</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="p-4 m-1 relative">
          <FontAwesomeIcon icon={faCartShopping} className="ml-1 text-xl " />
          <span className="absolute right-1 top-0 w-5 h-5 rounded-full bg-orange text-black text-sm  text-center">
            0
          </span>
        </div>

        <MButton name="BOOK A TABLE" />
        <div className="lg:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div>
            <div className={` pb-3 ${navbar ? "block" : "hidden"}`}>
              <div className="absolute top-20 z-40 left-0 p-[30px] bg-black h-screen  w-full ">
                <div className="pt-[30px]">
                  <div className="flex-row">
                    <ul className="flex-row items-center cursor-pointer justify-between ">
                      <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
                        HOME
                        <FontAwesomeIcon icon={faAngleRight} className="ml-1" />
                        <div
                          className="absolute left-0 top-6 w-40 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
                        >
                          <ul className="text-white px-4 py-3 ">
                            <Link href="/">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                COFFEE HOUSE
                              </li>
                            </Link>
                            <Link href="/">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                RESTAURANT
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </li>
                      <Link href="/About">
                        <li className="mr-5 hover:text-orange transition duration-200  ease-in ">
                          ABOUT
                        </li>
                      </Link>
                      <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
                        MENU
                        <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                        <div
                          className="absolute left-0 top-6 w-60 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
                        >
                          <ul className="text-white px-4 py-3">
                            <Link href="/CoffeeMenu">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                MENU - COFFE
                              </li>
                            </Link>
                            <Link href="/RestaurantMenu">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                MENU - RESTAURANT
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </li>
                      <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
                        PAGES
                        <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                        <div
                          className="absolute left-0 top-6 w-40 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
                        >
                          <ul className="text-white px-4 py-3">
                            <Link href="/kaffen/reservation">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                RESARVATION
                              </li>
                            </Link>
                            <Link href="/kaffen/history">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                HISTORY
                              </li>
                            </Link>
                            <Link href="/kaffen/services">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                SERVICES
                              </li>
                            </Link>
                            <Link href="/kaffen/our-chefs">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                OUR CHEFS
                              </li>
                            </Link>
                            <Link href="/kaffen/gallery">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                GALLERY
                              </li>
                            </Link>
                            <Link href="/kaffen/faq">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                FAQ
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </li>
                      <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
                        BLOG
                        <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                        <div
                          className="absolute left-0 top-6 w-40 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
                        >
                          <ul className="text-white px-4 py-3">
                            <Link href="/kaffen/Blog-Grid">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                BLOG GRID
                              </li>
                            </Link>
                            <Link href="/kaffen/Blog-Standard">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                BLOG STANDARD
                              </li>
                            </Link>
                            <Link href="/kaffen/Blog-Single">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in">
                                BLOG SINGLE
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </li>
                      <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
                        SHOP
                        <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                        <div
                          className="absolute left-0 top-6 w-40 bg-black shadow-md py-3 invisible opacity-0 group-hover:opacity-100
                    group-hover:visible transition duration-400 z-50 divide-y divide-gray-300 divide-dashed"
                        >
                          <ul className="text-white px-4 py-3">
                            <Link href="/kaffen/products">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                                PRODUCT
                              </li>
                            </Link>
                            <Link href="/kaffen/productSingle">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                                PRODUCT SINGLE
                              </li>
                            </Link>
                            <Link href="/kaffen/Cart">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                                CART
                              </li>
                            </Link>
                            <Link href="/kaffen/CheckOut">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                                CHECKOUT
                              </li>
                            </Link>
                            <Link href="/kaffen/MyAccount">
                              <li className="py-1 hover:text-orange transition duration-200  ease-in group relative">
                                MY ACCOUNT
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </li>
                      <li className="mr-5 hover:text-orange transition duration-200  ease-in group relative">
                        <Link href="/kaffen/Contacts">CONTACTS</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainMenu;
