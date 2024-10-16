import React from "react";
import { ContainerLastFooter } from "./LastFooterStyled";
import { FaInstagram, FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import freccia2 from "../video/freccia2.png";

const LastFooter = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      <ContainerLastFooter></ContainerLastFooter>
      {isMobile && (
        <div>
          <div
            style={{
              padding: "0.5rem",
              gap: "0.5rem",
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1c1c1c",
            }}
          >
            <a href="https://www.instagram.com/besteam.io/">
              <div className="colore">
                <FaInstagram style={{ width: "20px", height: "20px" }} />
              </div>
            </a>
            <a href="https://discord.com/invite/besteam">
              {" "}
              <div className="colore">
                {" "}
                <FaDiscord style={{ width: "20px", height: "20px" }} />
              </div>
            </a>
            <a href="https://t.me/besteam_io">
              <div className="colore">
                <FaTelegram style={{ width: "20px", height: "20px" }} />
              </div>
            </a>
            <a href="https://twitter.com/BesTeam_io">
              <div className="colore">
                <FaTwitter style={{ width: "20px", height: "20px" }} />
              </div>
            </a>
            <button
              onClick={topFunction}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "rgb(45, 198, 83)",
                border: "none",
              }}
            >
              <img src={freccia2} alt="arrow" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LastFooter;
