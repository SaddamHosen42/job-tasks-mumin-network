import React from "react";
import profileIcon from "../../assets/profile.png";
import videosThumbnail from "../../assets/thambel-img.png";
import eyeIcon from "../../assets/eye-icon.png";
import loveIcon from "../../assets/love-icon.png";
import videoIcon from "../../assets/categories/Polygon 1.png";

const TrendingVideos = () => {
  const trendingVideos = [
    {
      id: 1,
      name: "Mohammad Hijab",
      title: "Islam Vs Athiesm Oxford University forum debate",
      views: "14k",
      loves: "120",
      duration: "03:23",
    },
    {
      id: 2,
      name: "Mohammad Hijab",
      title: "Islam Vs Athiesm Oxford University forum debate",
      views: "14k",
      loves: "120",
      duration: "03:23",
    },
    {
      id: 3,
      name: "Mohammad Hijab",
      title: "Islam Vs Athiesm Oxford University forum debate",
      views: "14k",
      loves: "120",
      duration: "03:23",
    },
    {
      id: 4,
      name: "Mohammad Hijab",
      title: "Islam Vs Athiesm Oxford University forum debate",
      views: "14k",
      loves: "120",
      duration: "03:23",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-[#151116] text-[28px]">
          Trending Videos
        </h1>
        <p className="text-[#9DA3AE] underline cursor-pointer">See All</p>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {trendingVideos.map((video) => (
          <div
            key={video.id}
            className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-3 "
          >
            {/* Video Thumbnail with overlays */}
            <div className="relative">
              <img
                className="rounded-2xl w-full h-48 object-cover"
                src={videosThumbnail}
                alt="Video Thumbnail"
              />

              {/* Duration Badge - Top Right */}
              <div className="absolute top-2 right-2 bg-[#FFFFFF90] bg-opacity-70  px-2 py-1 rounded text-sm">
                {video.duration}
              </div>

              {/* Bottom Stats Bar */}
              <div className="absolute -bottom-5 left-2 right-2 bg-white rounded-full px-3 py-2 flex items-center gap-3 mx-4">
                {/* Profile Image */}
                <img
                  src={profileIcon}
                  alt="Profile"
                  className="w-11 h-11 rounded-full absolute  -left-5 border-2 border-[#6BCA4A]"
                />

                <div className="flex gap-4 mx-auto">
                  {/* Views */}
                  <div className="flex items-center gap-1">
                    <img src={eyeIcon} alt="Views" className="w-5" />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-[#151116] leading-none">
                        {video.views}
                      </p>
                      <p className="text-[10px] text-gray-500 leading-none">
                        Views
                      </p>
                    </div>
                  </div>

                  {/* Loves */}
                  <div className="flex items-center gap-1">
                    <img src={loveIcon} alt="Loves" className="w-5" />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-[#151116] leading-none">
                        {video.loves}
                      </p>
                      <p className="text-[10px] text-gray-500 leading-none">
                        Loves
                      </p>
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <button className="bg-gradient-to-r from-[#6BCA4A] to-[#B7EB53] rounded-full p-2 ml-auto absolute -right-5 w-11 h-11 flex items-center justify-center">
                  <img src={videoIcon} alt="Play" className="w-5 h-5 p-1" />
                </button>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6 flex items-start justify-between">
              <div className="flex-1">
                <p className="text-gray-500 text-sm mb-2">{video.name}</p>
                <h3 className="font-medium text-black text-sm mt-1 leading-tight pb-2">
                  {video.title}
                </h3>
              </div>
              <button className="rounded-full bg-[#F0F2F9] text-gray-400 mt-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
                  <path d="M12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6Z" />
                  <path d="M12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingVideos;
