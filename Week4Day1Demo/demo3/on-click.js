class OnClickElements extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    alert(`hey! you clicked: ${event.target.id}`);
  }

  render() {
    return (
      <div className="container-div">
        <div id="div-element" onClick={this.handleClick}>
          I am DIV
        </div>

        <span id="span-element" onClick={this.handleClick}>
          I am SPAN
        </span>

        <br /><br />

        <button id="button-element" onClick={this.handleClick}>
          I am Button
        </button>

        <br /><br />

        <a id="link-element" href="#" onClick={this.handleClick}>
          I am LINK
        </a>

        <br /><br />

        <div
          id="div-element-2"
          className="button"
          onClick={this.handleClick}
        >
          I am DIV
        </div>

        <span
          id="span-element-2"
          className="button"
          onClick={this.handleClick}
        >
          I am SPAN
        </span>

        <br /><br />

        <button
          id="button-element-2"
          className="button"
          onClick={this.handleClick}
        >
          I am Button
        </button>

        <br /><br />

        <a
          id="link-element-2"
          className="button"
          href="#"
          onClick={this.handleClick}
        >
          I am LINK
        </a>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<OnClickElements />);