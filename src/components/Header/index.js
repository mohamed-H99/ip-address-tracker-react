import React from "react";
import Loader from "../Loader";
import IconArrow from "../../assets/img/svg/icon-arrow.svg";
import "./style.css";

export default function AppHeader({ loading, state, onChange, onSearch }) {
  return (
    <header className="main-header">
      <div className="main-header__wrapper p-6 h-72 sm:h-64 lg:h-52 flex flex-col gap-6 justify-start items-center">
        <h1 className="text-3xl text-white">{"IP Address Tracker"}</h1>
        <form className="main-header__form" onSubmit={onSearch}>
          <div className="relative shadow-xl transform transition-transform hover:scale-110 w-80 sm:w-88 md:w-96 max-w-full overflow-hidden rounded-xl h-12">
            <input
              className="w-full h-full outline-none p-6 pr-20"
              type="text"
              placeholder={"Search for any IP address or domain"}
              value={state.searchValue}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
            <button className="absolute right-0 bg-black z-10 h-full px-5 transition-colors">
              <img className="w-2" src={IconArrow} alt="arrow" />
            </button>
          </div>
        </form>
        <div className="main-header__content">
          <div className="main-header__content-wrapper flex justify-center items-center shadow-xl w-80 max-w-full sm:w-auto max-w-full p-6 rounded-xl bg-white max-w-full">
            {loading ? (
              <Loader />
            ) : (
              <ul className="main-header__content-list text-center sm:text-left grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <li className="main-header__content-item">
                  <h5 className="uppercase text-gray mb-1 text-xs tracking-widest font-semibold">
                    {"IP Address"}
                  </h5>
                  <p className="font-medium text-xl text-gray-dark">
                    {state.ip}
                  </p>
                </li>
                <li className="main-header__content-item">
                  <h5 className="uppercase text-gray mb-1 text-xs tracking-widest font-semibold">
                    {"Location"}
                  </h5>
                  <p className="font-medium text-xl text-gray-dark">
                    {`${
                      state.location?.city ? state.location?.city + "," : ""
                    } ${state.location?.region} ${state.location?.postalCode}`}
                  </p>
                </li>
                <li className="main-header__content-item">
                  <h5 className="uppercase text-gray mb-1 text-xs tracking-widest font-semibold">
                    {"Timezone"}
                  </h5>
                  <p className="font-medium text-xl text-gray-dark">
                    {`UTC${state.location?.timezone}`}
                  </p>
                </li>
                <li className="main-header__content-item">
                  <h5 className="uppercase text-gray mb-1 text-xs tracking-widest font-semibold">
                    {"Isp"}
                  </h5>
                  <p className="font-medium text-xl text-gray-dark">
                    {state.isp}
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
