import React, { useState, useEffect } from "react";
import "./App.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.png";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.png";
import img16 from "./img/16.jpg";
import img17 from "./img/17.jpg";
import img18 from "./img/18.jpg";
import img19 from "./img/19.jpg";
import img20 from "./img/20.jpg";
import img21 from "./img/21.jpg";
import img22 from "./img/22.jpg";
import img23 from "./img/23.jpg";
import img24 from "./img/24.jpg";
import img25 from "./img/25.jpg";
import img26 from "./img/26.gif";
import BackIcon from "./img/back.svg";

const tabs = [
  { name: "Websites", imgs: [{ img: img26, sfw: true }] },
  {
    name: "Banners",
    imgs: [
      { img: img15, sfw: true },
      { img: img4, sfw: false },
      { img: img5, sfw: true },
      { img: img6, sfw: false },
      { img: img7, sfw: true },
      { img: img8, sfw: true },
      { img: img10, sfw: true },
      { img: img12, sfw: true },
      { img: img13, sfw: true },
      { img: img14, sfw: true },
      { img: img21, sfw: true },
      { img: img16, sfw: true },
      { img: img17, sfw: true },
      { img: img19, sfw: true },
      { img: img9, sfw: true },
      { img: img20, sfw: false },
      { img: img22, sfw: true },
    ],
  },
  {
    name: "Profile Pictures",
    imgs: [
      { img: img23, sfw: true },
      { img: img18, sfw: true },
      { img: img11, sfw: true },
      { img: img24, sfw: true },
      { img: img25, sfw: true },
    ],
  },
  {
    name: "Architectural Designs",
    imgs: [
      { img: img3, sfw: true },
      { img: img1, sfw: true },
      { img: img2, sfw: true },
    ],
  },
];

const initialState = {};

tabs.forEach((t, i) => {
  initialState[i] = false;
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { width } = useWindowDimensions();
  const gt800 = width > 800;
  const [hover, setHover] = useState(initialState);
  const [page, setPage] = useState(-1);
  const [sfw, setSfw] = useState(false);
  const [img, setImg] = useState(-1);

  const filterStyle = {
    zIndex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
    transition: "ease-in-out 0.25s",
  };

  return (
    <div className="appContainer">
      <div className="container">
        <div className="logoContainer">
          <div className="logo" />
        </div>
        <div className="tab sfwContainer">
          <div
            onClick={() => setSfw(true)}
            style={{
              boxShadow: sfw && "inset -5px 0 8px rgba(0, 0, 0, 0.5)",
              backgroundColor: sfw ? "rgb(30,30,30)" : "rgb(50, 50, 50)",
              transition: "ease-in-out .1s",
            }}
          >
            <p
              style={{
                transition: "ease-in-out .3s",
                color: sfw ? "white" : "gray",
                filter: sfw && "drop-shadow(0 0 10px rgba(255,255,255,.5))",
              }}
            >
              SFW 😊
            </p>
          </div>
          <div
            onClick={() => setSfw(false)}
            style={{
              boxShadow: !sfw && "inset 5px 0 8px rgba(0, 0, 0, 0.5)",
              backgroundColor: !sfw ? "rgb(30,30,30)" : "rgb(60, 60, 60)",
              transition: "ease-in-out .1s",
            }}
          >
            <p
              style={{
                transition: "ease-in-out .3s",
                color: !sfw ? "white" : "gray",
                filter: !sfw && "drop-shadow(0 0 10px rgba(255,255,255,.5))",
              }}
            >
              NSFW 😎
            </p>
          </div>
        </div>
        {page !== -1 && (
          <div className="tab homeBtn" onClick={() => setPage(-1)}>
            <img src={BackIcon} alt="" />
            <p>Home</p>
          </div>
        )}
        {gt800 &&
          tabs.map((t, i) => {
            const v = 50 - (i + 1) * 10;
            const val = hover[i] ? v + 20 : v;

            return (
              <div
                key={t.name}
                className="tab left"
                onClick={() => setPage(i)}
                onMouseOver={() => {
                  setHover({
                    [i]: true,
                  });
                }}
                onMouseLeave={() => {
                  setHover({
                    [i]: false,
                  });
                }}
                onMouseOut={() => {
                  setHover({
                    [i]: false,
                  });
                }}
                style={{
                  backgroundColor:
                    page === i ? "white" : `rgb(${val}, ${val}, ${val})`,
                }}
              >
                <p style={{ color: page === i ? "black" : "white" }}>
                  {t.name}
                </p>
              </div>
            );
          })}
        <a
          href="https://ts-2022-resume.netlify.com/r"
          target="_blank"
          rel="noreferrer"
          className="tab contact"
        >
          <p>Contact</p>
        </a>
      </div>
      {page === -1 ? (
        <div className="container">
          {tabs.map((t, i) => {
            return (
              <div
                className="tab main"
                key={t.name}
                onClick={() => setPage(i)}
                onMouseOver={() => {
                  setHover({
                    [i]: true,
                  });
                }}
                onMouseLeave={() => {
                  setHover({
                    [i]: false,
                  });
                }}
                onMouseOut={() => {
                  setHover({
                    [i]: false,
                  });
                }}
              >
                {t.imgs.length > 0 && <img src={t.imgs[0].img} alt="" />}
                <div
                  className="filter grayscale"
                  style={{
                    ...filterStyle,
                    backdropFilter:
                      hover[i] && gt800 ? "grayscale(0%)" : "grayscale(70%)",
                    WebkitBackdropFilter:
                      hover[i] && gt800 ? "grayscale(0%)" : "grayscale(70%)",
                  }}
                />
                <div
                  className="filter brightness"
                  style={{
                    ...filterStyle,
                    backdropFilter:
                      hover[i] && gt800
                        ? "brightness(100%)"
                        : "brightness(50%)",
                    WebkitBackdropFilter:
                      hover[i] && gt800
                        ? "brightness(100%)"
                        : "brightness(50%)",
                  }}
                />
                <div
                  className="filter blur"
                  style={{
                    ...filterStyle,
                    backdropFilter:
                      hover[i] && gt800 ? "blur(0px)" : "blur(5px)",
                    WebkitBackdropFilter:
                      hover[i] && gt800 ? "blur(0px)" : "blur(5px)",
                  }}
                />
                <p>{t.name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="container page">
          {tabs[page].imgs.length > 0 &&
            tabs[page].imgs.map((i, idx) => {
              if (!sfw || (i.sfw && sfw)) {
                return (
                  <img
                    onClick={() => setImg(idx)}
                    key={idx}
                    src={i.img}
                    alt=""
                  />
                );
              } else {
                return null;
              }
            })}
        </div>
      )}
      {page !== -1 && img !== -1 && (
        <div className="imgOverlayContainer" onClick={() => setImg(-1)}>
          <img
            src={tabs[page].imgs[img].img}
            style={{ cursor: "zoom-out" }}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default App;
