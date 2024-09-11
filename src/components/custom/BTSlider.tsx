import { Slide } from "react-slideshow-image";
import arrowleft from "../video/frecciasinistra.png";
import arrowright from "../video/freccia.png";
import { BTSliderImgValue, BTSliderProps } from "../../types/customComponentsTypes/BTSlider";
import { useMemo } from "react";

const BTSlider = ({imgConfig}: BTSliderProps) => {
    const customOptions = {
        prevArrow: (
          <div
            className="hoverzoom"
            style={{ width: "30px", marginRight: "-35px" }}
          >
            <img src={arrowleft} alt="arrow-left" width="23px" height="30px" />
          </div>
        ),
        nextArrow: (
          <div className="hoverzoom" style={{ width: "30px", marginLeft: "-35px" }}>
            <img src={arrowright} alt="arrow-right" width="23px" height="30px" />{" "}
          </div>
        ),
      };

      const renderImgConfig = useMemo(() => imgConfig.map((img: BTSliderImgValue) => 
      <img 
        width={"100%"}
        height={"99.5%"} 
        {...img} 
        alt={img.alt}
        />), [imgConfig]);

    return (
        <>
            <Slide {...customOptions}>
                {renderImgConfig}
            </Slide>
        </>
    )
}

export default BTSlider;