import React from "react";
import UpdateList from "./UpdateList";
import "bootstrap/dist/css/bootstrap.min.css";

function Lists(props) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {props.alldata.length > 0 ? (
            props.alldata.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.author}</td>
                <td>
                  <UpdateList
                    elementId={element.id}
                    singledata={props.singledata}
                    getList={props.getList}
                    updateList={props.updateList}
                    handleChange={props.handleChange}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.deleteList(element.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Lists;