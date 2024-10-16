import React from "react";
import ntfs from "../components/video/ntfs.jpg";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import arrowleft from "./video/frecciasinistra.png";
import arrowright from "./video/freccia.png";
import fasciatitdestra from "./video/sep4.png";
import bordo from "../components/video/bordoimmagine.png";
import crociprima from "../components/video/crociprima.png";

import paragrafo4 from "../components/video/paragrafo4.png";
const Paragrafo4 = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const customOptions = {
    prevArrow: (
      <div
        className="hoverzoom"
        style={{ width: "30px", marginRight: "-35px" }}
      >
        <img src={arrowleft} width="23px" height="30px" />
      </div>
    ),
    nextArrow: (
      <div className="hoverzoom" style={{ width: "30px", marginLeft: "-35px" }}>
        <img src={arrowright} width="23px" height="30px" />{" "}
      </div>
    ),
  };
  const customOptions2 = {
    prevArrow: (
      <div
        className="hoverzoom"
        style={{ width: "20px", marginRight: "-20px" }}
      >
        <img
          src={arrowleft}
          width="20x!important"
          height="20px"
          style={{ position: "absolute", left: "20px", top: "5px" }}
        />
      </div>
    ),
    nextArrow: (
      <div className="hoverzoom" style={{ width: "20px", marginLeft: "-20px" }}>
        <img
          src={arrowright}
          width="20px"
          height="20px"
          style={{
            position: "absolute",
            top: "5px",
            right: "20px",
          }}
        />{" "}
      </div>
    ),
  };

  return (
    <>
      {!isMobile && (
        <div className="paragrafo-first2">
          <div className="text-paragrafo-first2 margine">
            <img
              src={fasciatitdestra}
              height="10px"
              style={{ marginRight: "300px" }}
            />
            <p className="titolo-paragrafo">NFTs.</p>
            <p style={{ fontFamily: "DIN-PRO" }}>
              Build your inventory by selecting{" "}
              <span className="testo-parole-paragrafo">
                your favorite NFTs{" "}
              </span>
              ;<br />
              they are useful for customizing the avatar and the team <br />
              <span className="bold-italic">in an exclusive way</span>. <br />
              You can{" "}
              <span className="testo-parole-paragrafo">buy or resell </span>them
              in the “OpenSea” Marketplace. <br />
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={bordo}
              height={"6px"}
              width={"450px"}
              style={{ position: "absolute", right: "4rem", top: "-0.62rem" }}
            />

            <div
              style={{
                width: "450px",
                height: "300px",
                marginLeft: "10px",
                marginTop: "-4px",
                marginBottom: "-52px",
              }}
            >
              <Slide {...customOptions}>
                <img
                  src={paragrafo4}
                  alt="immagine2"
                  width={"100%"}
                  height={"99.5%"}
                />
                <img
                  src={ntfs}
                  alt="immagine2"
                  width={"100%"}
                  height={"99.5%"}
                />

                <img
                  src={ntfs}
                  alt="immagine2"
                  width={"100%"}
                  height={"99.5%"}
                />
              </Slide>
            </div>
            <img
              src={bordo}
              height={"6px"}
              width={"450px"}
              style={{ position: "absolute", left: "4rem", bottom: "-0.80rem" }}
            />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="paragrafo-first" style={{ backgroundColor: "#d8d8d8" }}>
          <div className="text-paragrafo-first margine">
            <img src={crociprima} />
            <p className="titolo-paragrafo">NFTs.</p>
            <p className="testo-paragrafo">
              Build your inventory by selecting{" "}
              <span className="testo-parole-paragrafo">
                your favorite NFTs{" "}
              </span>
              ;<br />
              they are useful for customizing the avatar and the team <br />
              You can{" "}
              <span className="testo-parole-paragrafo">buy or resell </span>them
              <br />
              in the “OpenSea” Marketplace. <br />
            </p>
          </div>

          <div className="immagine-paragrafo-5">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: -8,
              }}
            >
              <hr className="green-line-image" />
              <hr className="green2-line-image" />
              <hr className="green-line-image" />
            </div>
            <Slide {...customOptions2}>
              <img
                src={ntfs}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
              <img
                src={paragrafo4}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
              <img
                src={ntfs}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
              <img
                src={ntfs}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
            </Slide>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: -12 }}
            >
              <hr className="green-line-image" />
              <hr className="green2-line-image" />
              <hr className="green-line-image" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Paragrafo4;
