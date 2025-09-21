import "./App.css";
import navbarPic from "./assets/navbar-profile.png";
import sidebarLogo from "./assets/logo 1.png";
import Navbar from "./components/navbar/Navbar";
function App() {
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
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.8719 3.20141C13.5619 3.11141 13.2419 3.04141 12.9119 3.00141C11.9519 2.88141 11.0319 2.95141 10.1719 3.20141C10.4619 2.46141 11.1819 1.94141 12.0219 1.94141C12.8619 1.94141 13.5819 2.46141 13.8719 3.20141Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0195 19.0586C15.0195 20.7086 13.6695 22.0586 12.0195 22.0586C11.1995 22.0586 10.4395 21.7186 9.89953 21.1786C9.35953 20.6386 9.01953 19.8786 9.01953 19.0586"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
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
          <div className="px-4">
            <Navbar />
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

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
