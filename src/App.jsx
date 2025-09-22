import "./App.css";
import navbarPic from "./assets/navbar-profile.png";
import sidebarLogo from "./assets/logo 1.png";
import Navbar from "./components/navbar/Navbar";
import profileIcon from "./assets/profile-sm.png";
import BannerThumbnail from "./components/banner-thumbnail/BannerThambel";
import PopularChannels from "./components/popular-channels/PopularChannels";
import Categories from "./components/categories/Categories";
import TrendingVideos from "./components/trending-videos/TrendingVideos";
function App() {
  const mainMenu = (
    <>
      <ul className="space-y-5 ">
        <div className="bg-[#F0F2F9] flex items-center gap-2 font-medium rounded-sm py-[5px] text-[#070628] pl-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0402 6.82018L14.2802 2.79018C12.7102 1.69018 10.3002 1.75018 8.79023 2.92018L3.78023 6.83018C2.78023 7.61018 1.99023 9.21018 1.99023 10.4702V17.3702C1.99023 19.9202 4.06023 22.0002 6.61023 22.0002H17.3902C19.9402 22.0002 22.0102 19.9302 22.0102 17.3802V10.6002C22.0102 9.25018 21.1402 7.59018 20.0402 6.82018ZM12.7502 18.0002C12.7502 18.4102 12.4102 18.7502 12.0002 18.7502C11.5902 18.7502 11.2502 18.4102 11.2502 18.0002V15.0002C11.2502 14.5902 11.5902 14.2502 12.0002 14.2502C12.4102 14.2502 12.7502 14.5902 12.7502 15.0002V18.0002Z"
              fill="#6DCC4C"
            />
          </svg>
          <a href="#">Home</a>
        </div>
        <div className="flex items-center gap-2 opacity-60 pl-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9V8C2 5 4 3 7 3H17C20 3 22 5 22 8V16C22 19 20 21 17 21H16"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.69141 11.7109C8.31141 12.3009 11.7014 15.701 12.3014 20.321"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.62109 15.0703C6.01109 15.5003 8.5011 18.0003 8.9411 21.3903"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.98047 18.8594C3.67047 19.0794 4.92047 20.3194 5.14047 22.0194"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a href="#">All Channels</a>
        </div>
        <div className="flex items-center gap-2 opacity-60 pl-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 9.05078C11.03 9.70078 12.97 9.70078 14.75 9.05078"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <a href="#">Your Library</a>
        </div>
        <div className="flex items-center gap-2 opacity-60 pl-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0095 2.92031L18.9095 5.54031C20.6095 6.29031 20.6095 7.53031 18.9095 8.28031L13.0095 10.9003C12.3395 11.2003 11.2395 11.2003 10.5695 10.9003L4.66953 8.28031C2.96953 7.53031 2.96953 6.29031 4.66953 5.54031L10.5695 2.92031C11.2395 2.62031 12.3395 2.62031 13.0095 2.92031Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <a href="#">History</a>
        </div>
      </ul>
    </>
  );
  const following = (
    <>
      <div className="space-y-[18px] pl-2">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-6 h-6"
            src={profileIcon}
            alt="Profile"
          />
          <p className="opacity-60 text-[#070628]">Mawlana Tarek..</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-6 h-6"
            src={profileIcon}
            alt="Profile"
          />
          <p className="opacity-60 text-[#070628]">Mawlana</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-6 h-6"
            src={profileIcon}
            alt="Profile"
          />
          <p className="opacity-60 text-[#070628]">Mawlana</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-6 h-6"
            src={profileIcon}
            alt="Profile"
          />
          <p className="opacity-60 text-[#070628]">Mawlana</p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="drawer lg:drawer-open bg-[#F0F2F9] min-h-screen ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Mobile Navbar */}
          <div className="navbar bg-base-100 shadow-sm lg:hidden">
            <div className="flex-none">
              <label
                className="btn btn-square btn-ghost drawer-button lg:hidden"
                htmlFor="my-drawer-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>{" "}
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">Mumin Network</a>
            </div>
            <div className="flex items-center gap-3">
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

              <button className="btn btn-square btn-ghost rounded-full">
                <img
                  className="rounded-full w-9 h-9"
                  src={navbarPic}
                  alt="profile"
                />
              </button>
            </div>
          </div>

          {/* Page content here */}
          <div className="container mx-auto w[95%] px-2 lg:px-5">
            <div>
              <Navbar />
            </div>

            {/* Banner section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[18px] mt-5">
             {/* Video Thumbnail */}
              <div className="lg:col-span-3 h-fit lg:h-[345px]">
                <BannerThumbnail />
              </div>
             {/* Popular Channels */}
              <div className="lg:col-span-1 bg-[#FFFFFF] border border-[#E5E7EB] rounded-md p-4 h-fit lg:h-[345px] overflow-y-auto">
                <PopularChannels />
              </div>
            </div>

             {/* Categories */}
            <div className="mb-8">
              <Categories />
            </div>
            {/* Trending videos */}
            <div className="mb-8">
              <TrendingVideos />
            </div>
          </div>
        </div>

        {/* Drawer content here */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-[#FFFFFF] text-base-content min-h-full w-51 p-4">
            {/* Mumin Network logo */}
            <div className="flex justify-center mb-10">
              <img src={sidebarLogo} alt="Mumin Network Logo" />
            </div>
            {/* Sidebar menu */}
            <div className="mb-14">
              <h1 className="text-sm  text-[#070628] opacity-60 mb-5">
                MAIN MENU
              </h1>
              {mainMenu}
            </div>
            {/* Following */}
            <div className="mb-20 sm:mb-0">
              <h1 className="text-sm  text-[#070628] opacity-60 mb-5">
                FOLLOWING
              </h1>
              <div className="max-h-32 sm:max-h-none overflow-y-auto pr-2">
                {following}
              </div>
            </div>

            {/* get premium btn  */}
            <div className="fixed bottom-22 bg-[#F9FAFB] border-[#E5E7EB] rounded-lg p-3 w-[174px]">
              <div className="mt-8">
                <button className="btn w-full text-[#151116] border-[#6DCC4C] font-medium py-3 px-4 rounded-lg hover:from-[#5BB83A] hover:to-[#4FA62F] ">
                  Get Premium
                </button>
              </div>
            </div>

            {/* Theme Toggle Buttons - Fixed at bottom */}
            <div className="fixed bottom-4  w-[calc(100%-2rem)] max-w-[200px] flex items-center justify-center gap-3 bg-[#F9FAFB] rounded-lg p-1 shadow-sm border border-[#E5E7EB]">
              {/* Light Theme Button */}
              <button className="btn flex items-center gap-1 pr-1 transition-colors duration-200 bg-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-sm text-[#151116] ">Light</span>
              </button>

              {/* Dark Theme Button */}
              <button className="flex items-center gap-1 px-2 py-1 rounded transition-colors duration-200 opacity-60">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.03107 12.4209C2.39107 17.5709 6.76107 21.7609 11.9911 21.9909C15.6811 22.1509 18.9811 20.4309 20.9611 17.7209C21.7811 16.6109 21.3411 15.8709 19.9711 16.1209C19.3011 16.2409 18.6111 16.2909 17.8911 16.2609C13.0011 16.0609 9.00107 11.9709 8.98107 7.14094C8.97107 5.84094 9.24107 4.61094 9.73107 3.49094C10.2711 2.25094 9.62107 1.66094 8.37107 2.19094C4.41107 3.86094 1.70107 7.85094 2.03107 12.4209Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-sm text-gray-700">Dark</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
