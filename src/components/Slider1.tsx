import Image from "next/image";
import testImage from "../../public/globe.svg";

const Slider1 = () => {
  return (
    <div>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        data-tabindex="-1"
        uk-slider="center: true"
      >
        <div className="uk-slider-items uk-grid">
          <div className="uk-width-3-4">
            <div className="uk-panel">
              <Image src={testImage} width="300" height="400" alt="image" />
              <div className="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </div>
          </div>
          <div className="uk-width-3-4">
            <div className="uk-panel">
              <Image src={testImage} width="300" height="300" alt="image" />
              <div className="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </div>
          </div>
          <div className="uk-width-3-4">
            <div className="uk-panel">
              <Image src={testImage} width="300" height="400" alt="image" />
              <div className="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </div>
          </div>
        </div>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover uk"
          style={{ color: "red" }}
          data-href
          data-uk-slidenav-previous
          uk-slider-item="previous"
        >
          previous
        </a>

        <a
          style={{ color: "red" }}
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          data-href
          data-uk-slidenav-next
          uk-slider-item="next"
        >
          next
        </a>
      </div>
    </div>
  );
};

export default Slider1;
