import React from "react";
import bannerImage from "../../assets/banner.png";
import profileIcon from "../../assets/profile.png";
import eyeIcon from "../../assets/eye-icon.png";
import loveIcon from "../../assets/love-icon.png";
const BannerThumbnail = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[345px] rounded-[10px] object-cover"
        src={bannerImage}
        alt="Banner Thumbnail"
      />
      
      {/* profile icon */}
      <div className="flex items-center absolute top-3 left-3 sm:top-4 sm:left-6 lg:top-6 lg:left-10">
        <img
          className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] lg:h-[22px] lg:w-[22px] rounded-full"
          src={profileIcon}
          alt="Profile Icon"
        />
        <h2 className="text-white text-[10px] sm:text-[11px] lg:text-[12px] ml-2">Mohammad Hijab</h2>
      </div>
      
      {/* title and button */}
      <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-10 right-3 sm:right-6 lg:right-auto">
        <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-tight">
          Islam Vs Atheism Oxford <br className="hidden sm:block" /> 
          <span className="sm:hidden">Oxford </span>University forum debate
        </h1>
        <div className="space-x-2 sm:space-x-[14px] mt-4 sm:mt-6 lg:mt-7 flex flex-wrap gap-2 sm:gap-0">
          <button className="btn bg-gradient-to-r from-[#6DCC4C] to-[#6DCC4C] text-white rounded-lg border-[#6DCC4C] text-xs sm:text-sm px-3 sm:px-4 py-2 min-h-[36px] sm:min-h-[44px]">
            Watch Now
          </button>
          <button className="p-1.5 sm:p-2 h-9 w-9 sm:h-11 sm:w-11 bg-[#755b77] rounded-lg border-[#755b77] rotate-90 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
              <path
                d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
              <path
                d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Views Count */}
      <div className="flex gap-3 sm:gap-4 lg:gap-6 absolute bottom-4 right-3 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
            <img src={eyeIcon} alt="Views Count" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="font-semibold text-xs sm:text-sm text-white">14k
                <br />
                <span className="text-xs sm:text-sm text-white opacity-60">Views</span>
            </p>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
            <img src={loveIcon} alt="Love Count" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="font-semibold text-xs sm:text-sm text-white">120
                <br />
                <span className="text-xs sm:text-sm text-white opacity-60">Loves</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default BannerThumbnail;
