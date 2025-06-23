import Image from "next/image";
import testImage from "../../public/globe.svg";

const Slider = () => {
  return (
    <div>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        uk-slider
      >
        <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
          <div>
            <Image src={testImage} width="400" height="600" alt="" />
            <div className="uk-position-center uk-panel">
              <h1>1</h1>
            </div>
          </div>
          <div>
            <Image src={testImage} width="400" height="600" alt="" />
            <div className="uk-position-center uk-panel">
              <h1>2</h1>
            </div>
          </div>
          <div>
            <Image src={testImage} width="400" height="600" alt="" />

            <div className="uk-position-center uk-panel">
              <h1>3</h1>
            </div>
          </div>
          <div>
            <Image src={testImage} width="400" height="600" alt="" />
            <div className="uk-position-center uk-panel">
              <h1>4</h1>
            </div>
          </div>
          <div>
            <Image src={testImage} width="400" height="600" alt="" />
            <div className="uk-position-center uk-panel">
              <h1>5</h1>
            </div>
          </div>
          <div>
            <Image src={testImage} width="400" height="600" alt="" />
            <div className="uk-position-center uk-panel">
              <h1>6</h1>
            </div>
          </div>
          <div>
            <Image src={testImage} width="400" height="600" alt="" />
            <div className="uk-position-center uk-panel">
              <h1>7</h1>
            </div>
          </div>
        </div>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="true"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="true"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
    </div>
  );
};

export default Slider;
