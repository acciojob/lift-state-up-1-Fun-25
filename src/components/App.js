import "./../styles/App.css";
import React from "react";
import { useState } from "react";


export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child">
        <h2>Child Component</h2>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        <Child show={showModal}>
          <div>
            <h3>Modal Content</h3>
            <p>This is the modal content.</p>
          </div>
        </Child>
      </div>
    </div>
  );
}

const Child = ({ show,children }) => {
  if(!show) return null;
  return (
    <div className="child">
      <h4>Child Component</h4>
       
      <div>{children}</div>
    </div>
  );
};
