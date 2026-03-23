import React, { Component } from "react";
import Lists from "./Lists";
import CreateList from "./CreateList";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      alldata: [],
      singledata: {
        id: "",
        title: "",
        author: ""
      }
    };
  }

  componentDidMount() {
    this.getLists();
  }

  getLists = () => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          alldata: result
        });
      })
      .catch((error) => {
        console.log("Error fetching list data:", error);
      });
  };

  handleChange = (event) => {
    let id = this.state.singledata.id;
    let title = this.state.singledata.title;
    let author = this.state.singledata.author;

    if (event.target.name === "title") {
      title = event.target.value;
    } else {
      author = event.target.value;
    }

    this.setState({
      singledata: {
        id: id,
        title: title,
        author: author
      }
    });
  };

  createList = () => {
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then((res) => res.json())
      .then(() => {
        this.setState({
          singledata: {
            id: "",
            title: "",
            author: ""
          }
        });
        this.getLists();
      })
      .catch((error) => {
        console.log("Error creating item:", error);
      });
  };

  getList = (event, id) => {
    this.setState(
      {
        singledata: {
          id: id,
          title: "Loading...",
          author: "Loading..."
        }
      },
      () => {
        fetch("http://localhost:8000/posts/" + id)
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              singledata: {
                id: result.id,
                title: result.title,
                author: result.author ? result.author : ""
              }
            });
          })
          .catch((error) => {
            console.log("Error getting single item:", error);
          });
      }
    );
  };

  updateList = (event, id) => {
    fetch("http://localhost:8000/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then((res) => res.json())
      .then(() => {
        this.setState({
          singledata: {
            id: "",
            title: "",
            author: ""
          }
        });
        this.getLists();
      })
      .catch((error) => {
        console.log("Error updating item:", error);
      });
  };

  deleteList = (id) => {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE"
    })
      .then(() => {
        this.getLists();
      })
      .catch((error) => {
        console.log("Error deleting item:", error);
      });
  };

  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">RESTful API Homework</h2>

        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={this.getLists}>
            Get Lists
          </button>

          <CreateList
            alldata={this.state.alldata}
            singledata={this.state.singledata}
            handleChange={this.handleChange}
            createList={this.createList}
          />
        </div>

        <Lists
          alldata={this.state.alldata}
          singledata={this.state.singledata}
          getList={this.getList}
          updateList={this.updateList}
          deleteList={this.deleteList}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;