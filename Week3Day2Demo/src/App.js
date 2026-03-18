import React from "react";
import Lists from "./Lists";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        id: "",
        title: "",
        author: ""
      }
    };
  }

  getLists = () => {
    this.setState({ loading: true });

    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          loading: false,
          alldata: result
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className="container mt-4">
        <button
          className="btn btn-primary"
          onClick={this.getLists}
        >
          Get Lists
        </button>

        <div className="mt-4">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <Lists alldata={this.state.alldata} />
          )}
        </div>
      </div>
    );
  }
}

export default App;