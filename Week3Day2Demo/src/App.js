import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lists from "./Lists";
import CreateList from "./CreateList";
import UpdateList from "./UpdateList";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Routes>
              <Route path="/" element={<Lists />} />
              <Route path="/create" element={<CreateList />} />
              <Route path="/edit/:id" element={<UpdateList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;