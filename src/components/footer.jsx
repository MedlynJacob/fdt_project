import React from "react";
import { Typography } from "@material-tailwind/react";
import Logo2 from "../assets/mask logo.png"
 
export default function Example() {
  return (
    <footer className="w-full bg-white p-4 py-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-4 gap-x-6 bg-white text-center md:justify-between">
        <img src={Logo2} alt="logo-ct" className="h-8 pr-1 mx-aut" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-black-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-black-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
          <li>
            <Typography
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Email us: pm@fielddata.tech
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Field Data Technologies. All right reserved.
      </Typography>
    </footer>
  );
}