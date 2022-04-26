import React, { useState, useEffect } from "react";
import "./App.css";
import img1 from "./img/originals/1.jpg";
import img2 from "./img/originals/2.jpg";
import img3 from "./img/originals/3.jpg";
import img4 from "./img/originals/4.jpg";
import img5 from "./img/originals/5.jpg";
import img6 from "./img/originals/6.jpg";
import img7 from "./img/originals/7.jpg";
import img8 from "./img/originals/8.jpg";
import img9 from "./img/originals/9.jpg";
import img10 from "./img/originals/10.jpg";
import img11 from "./img/originals/11.jpg";
import img12 from "./img/originals/12.png";
import img13 from "./img/originals/13.jpg";
import img14 from "./img/originals/14.jpg";
import img15 from "./img/originals/15.png";
import img16 from "./img/originals/16.jpg";
import img17 from "./img/originals/17.jpg";
import img18 from "./img/originals/18.jpg";
import img19 from "./img/originals/19.jpg";
import img20 from "./img/originals/20.jpg";
import img21 from "./img/originals/21.jpg";
import img22 from "./img/originals/22.jpg";
import img23 from "./img/originals/23.jpg";
import img24 from "./img/originals/24.jpg";
import img25 from "./img/originals/25.jpg";
import img26 from "./img/originals/26.gif";
import BackIcon from "./img/back.svg";
import InfiniteScroll from "react-infinite-scroll-component";

const tabs = [
  {
    name: "Websites",
    imgs: [{ img: img26, sfw: true, width: 1920, height: 983 }],
  },
  {
    name: "Banners",
    imgs: [
      { img: img15, sfw: true, width: 1000, height: 462 },
      { img: img4, sfw: false, width: 3840, height: 1215 },
      { img: img5, sfw: true, width: 2120, height: 347 },
      { img: img6, sfw: false, width: 3840, height: 634 },
      { img: img7, sfw: true, width: 3860, height: 639 },
      { img: img8, sfw: true, width: 2120, height: 1023 },
      { img: img10, sfw: true, width: 2120, height: 1023 },
      { img: img12, sfw: true, width: 4960, height: 1040 },
      { img: img13, sfw: true, width: 3000, height: 1040 },
      { img: img14, sfw: true, width: 6000, height: 2000 },
      { img: img21, sfw: true, width: 3840, height: 1326 },
      { img: img16, sfw: true, width: 3000, height: 1000 },
      { img: img17, sfw: true, width: 6000, height: 2000 },
      { img: img19, sfw: true, width: 3840, height: 633 },
      { img: img9, sfw: true, width: 3840, height: 633 },
      { img: img20, sfw: false, width: 6000, height: 2000 },
      { img: img22, sfw: true, width: 1920, height: 640 },
    ],
  },
  {
    name: "Profile Pictures",
    imgs: [
      { img: img23, sfw: true, width: 4000, height: 4000 },
      { img: img18, sfw: true, width: 2086, height: 2000 },
      { img: img11, sfw: true, width: 4000, height: 4000 },
      { img: img24, sfw: true, width: 1920, height: 1792 },
      { img: img25, sfw: true, width: 1920, height: 1920 },
    ],
  },
  {
    name: "Architectural Designs",
    imgs: [
      { img: img3, sfw: true, width: 1920, height: 1080 },
      { img: img1, sfw: true, width: 1920, height: 1080 },
      { img: img2, sfw: true, width: 1920, height: 1080 },
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

function App({ scrollPosition }) {
  const { width } = useWindowDimensions();
  const gt800 = width > 800;
  const [hover, setHover] = useState(initialState);
  const [page, setPage] = useState(-1);
  const [sfw, setSfw] = useState(false);
  const [img, setImg] = useState(-1);
  const [images, setImages] = useState([]);

  const filterStyle = {
    zIndex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
    transition: "ease-in-out 0.25s",
  };

  function next(pageSwitch) {
    !pageSwitch
      ? setImages([
          ...images,
          ...tabs[page].imgs.slice(images.length, images.length + 6),
        ])
      : setImages([...tabs[page].imgs.slice(0, 6)]);
  }

  useEffect(() => {
    console.log(page);
    page !== -1 && next(true);
  }, [page]);

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
        <div id="pageContainer">
          <InfiniteScroll
            dataLength={images.length}
            next={() => next(false)}
            hasMore={images.length < tabs[page].imgs.length}
            loader={<h4>Loading...</h4>}
            scrollableTarget="pageContainer"
          >
            {tabs[page].imgs.length > 0 &&
              images.map((i, idx) => {
                if (!sfw || (i.sfw && sfw)) {
                  return (
                    <img
                      onClick={() => setImg(idx)}
                      key={idx}
                      src={i.img}
                      alt=""
                    />
                  );
                }
              })}
          </InfiniteScroll>
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
