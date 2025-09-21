import React from "react";
import bannerImage from "../../assets/banner.png";
import profileIcon from "../../assets/profile.png";
import eyeIcon from "../../assets/eye-icon.png";
import loveIcon from "../../assets/love-icon.png";
const BannerThumbnail = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[345px] rounded-[10px]"
        src={bannerImage}
        alt="Banner Thumbnail"
      />
      
      {/* profile icon */}
      <div className="flex items-center absolute top-6 left-10">
        <img
          className="h-[22px] w-[22px] rounded-full"
          src={profileIcon}
          alt="Profile Icon"
        />
        <h2 className="text-white text-[12px] ml-2">Mohammad Hijab</h2>
      </div>
      
      {/* title and button */}
      <div className="absolute bottom-8 left-10">
        <h1 className="text-white text-2xl font-medium">
          Islam Vs Atheism Oxford <br /> University forum debate
        </h1>
        <div className="space-x-[14px] mt-7 flex">
          <button className="btn bg-gradient-to-r from-[#6DCC4C] to-[#6DCC4C] text-white rounded-lg border-[#6DCC4C]">
            Watch Now
          </button>
          <button className="p-2 h-11 w-11 bg-[#755b77] rounded-lg border-[#755b77] rotate-90">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
                stroke="#FFFFFF"
                stroke-width="1.5"
              />
              <path
                d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
                stroke="#FFFFFF"
                stroke-width="1.5"
              />
              <path
                d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                stroke="#FFFFFF"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Views Count */}
      <div className="flex gap-6 absolute bottom-8 right-10">
        <div className="flex items-center gap-2">
            <img src={eyeIcon} alt="Views Count" />
            <p className="font-semibold text-sm text-white">14k
                <br />
                <span className="text-sm text-white opacity-60">Views</span>
            </p>
        </div>
        <div className="flex items-center gap-2">
            <img src={loveIcon} alt="Love Count" />
            <p className="font-semibold text-sm text-white">120
                <br />
                <span className="text-sm text-white opacity-60">Loves</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default BannerThumbnail;
