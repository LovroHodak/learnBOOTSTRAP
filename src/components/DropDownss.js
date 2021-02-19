import React from "react";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";

export default function DropDownss() {
  return (
    <div className="mb-2" style={{ border: "2px solid red" }}>
    <h1>DropDown</h1>
      {["up", "down", "left", "right"].map((direction) => (
        <DropdownButton
          as={ButtonGroup}
          key={direction}
          id={`dropdown-button-drop-${direction}`}
          drop={direction}
          variant="secondary"
          title={` Drop ${direction} `}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ))}
    </div>
  );
}
