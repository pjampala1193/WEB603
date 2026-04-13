import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    return (
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card shadow" style={{ width: "300px" }}>
          <div className="card-body p-0">
            <h3 className="p-3 mb-0">Counter</h3>

            <div className="bg-info p-3 d-flex align-items-center gap-2">
              <span className="badge bg-secondary fs-6 px-3 py-2">
                {this.props.count}
              </span>

              <button className="btn btn-light btn-sm" onClick={this.decrement}>
                -
              </button>

              <button className="btn btn-light btn-sm" onClick={this.increment}>
                +
              </button>

              <button className="btn btn-light btn-sm" onClick={this.reset}>
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);