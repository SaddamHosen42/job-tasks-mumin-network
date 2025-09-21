import React from "react";
import channelsIcon1 from "../../assets/popular channels/profiles1.png";
import channelsIcon2 from "../../assets/popular channels/profiles2.png";
import channelsIcon3 from "../../assets/popular channels/profiles3.png";
import channelsIcon4 from "../../assets/popular channels/profiles4.png";
import channelsIcon5 from "../../assets/popular channels/profiles5.png";
const PopularChannels = () => {
  const channels = [
    { id: 1, name: "MD Taher Ahmed", icon: channelsIcon1, followers: "1.2M" },
    { id: 2, name: "MD Taher Ahmed", icon: channelsIcon2, followers: "15M" },
    { id: 3, name: "MD Taher Ahmed", icon: channelsIcon3, followers: "18k" },
    { id: 4, name: "MD Taher Ahmed", icon: channelsIcon4, followers: "1.6K" },
    { id: 5, name: "MD Taher Ahmed", icon: channelsIcon5, followers: "106K" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between ">
        <h2 className="font-semibold text-lg text-[#121826] mb-4">
          Popular Channels
        </h2>
        <p className="text-[#9DA3AE] underline">See All</p>
      </div>
      <div>
        {channels.map((channel) => (
          <div
            key={channel.id}
            className="flex items-center gap-3 mb-3 cursor-pointer justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={channel.icon}
                alt={channel.name}
              />
              <div>
                <p className="text-[#121826] font-medium">{channel.name}</p>
                <p className="text-[#9DA3AE]">{channel.followers} Followers</p>
              </div>
            </div>
            <button className="btn text-white bg-gradient-to-r from-[#6DCC4C] to-[#6DCC4C]">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularChannels;
