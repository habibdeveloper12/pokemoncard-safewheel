import { FaFacebookF } from 'react-icons/fa';
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import Container from './Container';
import Heading from './Heading';
import List from './List';
import ListItem from './ListItem';

const Footer = () => {
  return (
    <div className="bg-[#151515]">
      <Container>
        <div className="flex flex-wrap justify-between gap-y-4  py-10 px-5 sm:py-16 md:py-20 lg:py-24">
          <div className="w-1/3 sm:w-1/5">
            <div>
              <Heading
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  font-inter   text-yellow"
                title="Logo"
              />
              <List className="font-inter font-light mt-5 text-sm md:text-base text-white">
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="New Collection"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="About Us"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Blog"
                />
              </List>
            </div>
          </div>
          <div className="w-1/3 sm:w-1/5">
            <div>
              <Heading
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  font-inter   text-yellow"
                title="Program"
              />
              <List className="font-inter font-light mt-5 text-sm md:text-base text-white">
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Our Programs"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Our Plan"
                />
              </List>
            </div>
            <div></div>
          </div>
          <div className="w-1/3 sm:w-1/5">
            <div>
              <Heading
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  font-inter   text-yellow"
                title="Terms"
              />
              <List className="font-inter font-light mt-5 text-sm md:text-base text-white">
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Our Programs"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Our Plan"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Become a membe"
                />
              </List>
            </div>
            <div></div>
          </div>
          <div className="w-1/3 sm:w-1/5">
            <div>
              <Heading
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  font-inter   text-yellow"
                title="Support"
              />
              <List className="font-inter font-light mt-5 text-sm md:text-base  text-white">
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="FAQs"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Contact Us"
                />
              </List>
            </div>
            <div></div>
          </div>
          <div className="w-2/3 sm:w-1/5 mr-auto sm:mr-0">
            <div>
              <Heading
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  font-inter   text-yellow"
                title="About Us"
              />
              <List className="font-inter font-light mt-2 sm:mt-5 text-sm md:text-base text-white">
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Our Programs"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Our Plan"
                />
                <ListItem
                  className="pb-1 sm:pb-2 duration-150 ease-in-out hover:tracking-wide hover:text-yellow hover:cursor-pointer "
                  itemname="Become a membe"
                />
              </List>
            </div>
          </div>
          <div className=" flex mt-4 gap-x-2 text-yellow text-2xl">
            <FaFacebookF className="duration-150 ease-in-out hover:text-white hover:cursor-pointer" />
            <AiOutlineTwitter className="duration-150 ease-in-out hover:text-white hover:cursor-pointer" />
            <AiFillInstagram className="duration-150 ease-in-out hover:text-white hover:cursor-pointer" />
            <AiFillLinkedin className="duration-150 ease-in-out hover:text-white hover:cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
