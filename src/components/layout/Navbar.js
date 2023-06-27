import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import ListItem from "./ListItem";
import List from "./List";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import SubHeading from "./SubHeading";

const Navbar = ({ navbg }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <nav className={navbg}>
      <Container>
        <div className="mx-3 sm:mx-5 md:flex pt-4 pb-4 md:py-4 items-center">
          <div className="md:w-2/6">
            <Link href="/">
              <div className="w-[62px] h-[60px] md:w-[82px] md:h-[80px] relative">
                <Image fill src="/assets/logo2.png" alt="logo" cover />
              </div>
            </Link>
          </div>
          <div className=" md:w-4/6">
            <FaBars
              className="block ml-auto md:hidden absolute text-lg sm:text-xl top-9 right-4"
              onClick={() => setShow(!show)}
            />
            {show && (
              <List className="text-primary flex flex-col md:flex-row md:justify-end md:gap-x-8 font-pop text-lg mt-2.5 md:mt-0">
                <Link href="/">
                  <ListItem
                    className="font-bold text-sm md:text-base lg:text-lg inline-block border-b-2 border-transparent transition duration-300 ease-in-out hover:border-b-2 hover:border-primary hover:font-bold"
                    itemname="Home"
                  />
                </Link>

                <div className="relative group/item ">
                  <Link href="/services">
                    <ListItem
                      className=" font-bold inline-block lg:inline-block text-sm md:text-base lg:text-lg group/edit border-b-2 border-transparent transition duration-300 ease-in-out group-hover/item:border-b-2 group-hover/item:border-primary"
                      itemname="Services"
                    />
                    <MdKeyboardArrowDown className="inline text-2xl" />
                  </Link>
                  <div className="group/edit w-max  duration-200 invisible bg-white shadow-cshadow2 absolute right-0 md:right-[-250%] top-[220%] z-10 group-hover/item:visible group-hover/item:top-[200%]">
                    <div className="flex w-[330px] sm:w-[600px]  md:w-[700px] lg:w-[900px] xl:w-[100%] gap-y-3 sm:gap-y-5 lg:gap-y-8   flex-wrap px-7 py-10">
                      <div className="w-4/4 sm:w-[55%] md:w-[50%] lg:w-max pr-5 lg:pr-0 sm:border-r border-primary">
                        <Link href="/services/digitalMarketing">
                          <SubHeading
                            className="text-primary font-pop font-bold text-base md:text-lg pb-1 sm:pb-2 md:pb-3 lg:pr-20"
                            title="DIGITAL MARKETING"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2  "
                            itemname="SEARCH ENGINE OPTIMAIZATION (SEO)"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="LOCAL SEO"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="TECHNICAL SEO"
                          />
                        </Link>
                        <Link href="/eeeeeeeeeee">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px]  sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="E-COMMERCE SEO"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="SOCIAL MEDIA MARKETING"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2  "
                            itemname="SOCIAL MEDIA MANAGEMENT"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="LINK BUILDING SERVICE(OFF PAGE SEO)"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="SEARCH ENGINE MARKETING(SEM)"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="PAY PER CLICK(PPC)"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="GOOGLE ANALYTICS SERVICES"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px]  sm:mb-0 sm:text-xs sm:pb-2"
                            itemname="CONTENT WRITING"
                          />
                        </Link>
                      </div>
                      <div className=" w-4/4 sm:w-[45%]  md:w-[50%] lg:w-max sm:pl-5 lg:border-r border-primary lg:pr-5">
                        <SubHeading
                          className="text-primary font-pop font-bold text-base md:text-lg pb-2 md:pb-3"
                          title="CREATIVE SERVICES"
                        />

                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="GRAPHICS DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2"
                            itemname="UI&UX DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px]  sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="MOTION DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px]  sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="2D & 3D DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="3D ANIMATION"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="3D MODELING"
                          />
                        </Link>
                      </div>
                      <div className="w-4/4 sm:w-[55%]  md:w-[50%] lg:w-max pr-5 sm:border-r border-primary lg:border-r-0 xl:border-r lg:pl-4">
                        <Link href="/services/webDesingDev">
                          <SubHeading
                            className="text-primary font-pop font-bold text-base md:text-lg pb-2 md:pb-3"
                            title="WEB DESIGN & DEVELOPMENT "
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="CUSTOM WEBSITE DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px]  sm:mb-0 sm:text-xs sm:pb-2 "
                            itemname="E-COMMERCE WEBSITE DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2"
                            itemname="WORDPRESS WEBSITE DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2"
                            itemname="CUSTOM WEBSITE DEVELOPMENT"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2"
                            itemname="E-COMMERCE WEBSITE DEVELOPMENT"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2"
                            itemname="WORDPRESS WEBSITE DEVELOPMENT"
                          />
                        </Link>
                      </div>
                      <div className="w-4/4 sm:w-[45%]  md:w-[50%] lg:w-max pr-5 sm:pl-4 lg:pl-0 xl:pl-4">
                        <SubHeading
                          className="text-primary font-pop font-bold text-base md:text-lg pb-2 md:pb-3"
                          title="SOFTWARE & APP DEVELOPMENT"
                        />
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2"
                            itemname="CUSTOM APP DEVELOPMENT"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold  duration-150 ease-out hover:tracking-wider text-[#1B1B1B] text-[11px] mb-[-6px] sm:mb-0 sm:text-xs sm:pb-2"
                            itemname="CUSTOM SOFTWARE DEVELOPMENT"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/aboutus">
                  <ListItem
                    className="font-bold text-sm md:text-base lg:text-lg inline-block border-b-2 border-transparent transition duration-300 ease-in-out hover:border-b-2 hover:border-primary hover:font-bold"
                    itemname="About Us"
                  />
                </Link>
                <Link href="/contactus">
                  <ListItem
                    className="font-bold text-sm md:text-base lg:text-lg inline-block border-b-2 border-transparent transition duration-300 ease-in-out hover:border-b-2 hover:border-primary hover:font-bold "
                    itemname="Contact Us"
                  />
                </Link>
              </List>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
