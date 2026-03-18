import React from "react";

function Lists(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.alldata.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Lists;