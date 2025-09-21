import React from "react";
import navbarPic from "../../assets/navbar-profile.png";
import addVideoIcon from "../../assets/add-video.png";
import blogIcon from "../../assets/blog-icon.svg";
const Navbar = () => {
  return (
    <div className=" hidden navbar  lg:flex">
      <div className="flex justify-between w-full items-center">
        <div className="ml-50 w-[400px]">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>

        <div className="flex items-center gap-13">
          {/* video and Blog */}
          <div className="flex gap-6">
            {/* video btn */}
            <button className="btn bg-[#6DCC4C] text-white ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z"
                  fill="#FFFFFF"
                />
              </svg>
              Video
            </button>
            <button className="btn  text-[#A4A4A4]">
              {/* Announcement */}
              <img className="w-5 h-5" src={blogIcon} alt="Blog" />
              Blog
            </button>
          </div>

          {/* profile */}
          <div className="flex items-center gap-[14px]">
            {/* Add Video icon */}
            <img
              className="w-6 h-6 opacity-60"
              src={addVideoIcon}
              alt="Add Video"
            />
            {/* Notifications icon */}
            <svg
              className="opacity-60"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0186 2.91016C8.70862 2.91016 6.01862 5.60016 6.01862 8.91016V11.8002C6.01862 12.4102 5.75862 13.3402 5.44862 13.8602L4.29862 15.7702C3.58862 16.9502 4.07862 18.2602 5.37862 18.7002C9.68862 20.1402 14.3386 20.1402 18.6486 18.7002C19.8586 18.3002 20.3886 16.8702 19.7286 15.7702L18.5786 13.8602C18.2786 13.3402 18.0186 12.4102 18.0186 11.8002V8.91016C18.0186 5.61016 15.3186 2.91016 12.0186 2.91016Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M13.8719 3.20141C13.5619 3.11141 13.2419 3.04141 12.9119 3.00141C11.9519 2.88141 11.0319 2.95141 10.1719 3.20141C10.4619 2.46141 11.1819 1.94141 12.0219 1.94141C12.8619 1.94141 13.5819 2.46141 13.8719 3.20141Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0195 19.0586C15.0195 20.7086 13.6695 22.0586 12.0195 22.0586C11.1995 22.0586 10.4395 21.7186 9.89953 21.1786C9.35953 20.6386 9.01953 19.8786 9.01953 19.0586"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
            {/* Profile picture */}
            <button className="btn btn-square btn-ghost rounded-full">
              <img
                className="rounded-full w-9 h-9"
                src={navbarPic}
                alt="profile"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
