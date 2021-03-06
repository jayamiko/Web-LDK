import React, {useState} from "react";
import {Link} from "react-router-dom";
import Head from "./Head";
import Logo from "../../../image/ldk-icon.png";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="flex flex-col-reverse md:flex-col">
      <Head />
      <header className="w-full md:container mx-auto overflow-hidden md:rounded-3xl">
        <nav className={click ? "flex" : "flex flexSB items-center"}>
          <ul
            className={click ? "mobile-nav" : "flexSB uppercase"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/news">
                <b>Info News</b>
              </Link>
            </li>
            <li>
              <Link to="/kegiatan">
                <b>Kegiatan</b>
              </Link>
            </li>
            <li>
              <Link to="/artikel">
                <b>Artikel</b>
              </Link>
            </li>
            <li>
              <Link to="/documentasi">
                <b>Dokumentasi</b>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <b>About</b>
              </Link>
            </li>
          </ul>
          <div
            className={
              click
                ? "hidden"
                : "start md:p-0 w-full float-right h-full lg:hidden"
            }
          >
            <div className={click ? "hidden" : "md:hidden flex py-5"}>
              <img src={Logo} className="w-20 sm:w-28 md:w-40" alt="logo-ldk" />
              <div className="w-full flexSB">
                <div className="logo flex flex-col my-auto">
                  <h4 className="text-base w-4/5 sm:text-3xl sm:w-full md:text-6xl font-bold">
                    LEMBAGA DAKWAH KAMPUS
                  </h4>
                  <span className="text-[10px] md:text-base">
                    UNIVERSITAS ISLAM '45 BEKASI
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={click ? "w-full" : "hidden"}>
            <div className={click ? "flex text-white" : "hidden"}>
              <img
                src={Logo}
                className="w-20 sm:w-28 md:w-40 h-20"
                alt="logo-ldk"
              />
              <div className="w-full flexSB">
                <div className="logo flex flex-col my-auto">
                  <h4 className="text-xl w-3/4 sm:text-3xl sm:w-full md:text-6xl font-bold">
                    LEMBAGA DAKWAH KAMPUS
                  </h4>
                  <span className="text-xs md:text-base">
                    UNIVERSITAS ISLAM '45 BEKASI
                  </span>
                </div>
              </div>
            </div>
            <ul
              className={click ? "mobile-nav" : "flexSB"}
              onClick={() => setClick(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">Info News</Link>
              </li>
              <li>
                <Link to="/about">Kegiatan</Link>
              </li>
              <li>
                <Link to="/artikel">Artikel</Link>
              </li>
              <li>
                <Link to="/dokumentasi">Dokumentasi</Link>
              </li>
              <li>
                <Link to="/journal">About</Link>
              </li>
            </ul>
          </div>

          <div></div>
          <button className="toggle mr-4" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
