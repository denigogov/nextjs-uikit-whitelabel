import "./test.scss";

const Test = () => {
  return (
    <div className="test">
      <p uk-tooltip="title: Hello World">Test</p>
      <p className="test">I should change the color</p>
      <p>FADA</p>
      <button className="uk-button uk-button-default" uk-tooltip="Hello World">
        Hover
      </button>

      <p data-uk-margin>
        <a className="uk-button uk-button-default" href="#">
          Link
        </a>
        <button className="uk-button uk-button-primary">Button</button>
        <button className="uk-button uk-button-default" data-disabled>
          Disabled
        </button>
      </p>
    </div>
  );
};

export default Test;
