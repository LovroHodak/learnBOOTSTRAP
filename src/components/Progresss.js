import React from "react";
import { ProgressBar, Button, Spinner } from "react-bootstrap";

export default function Progresss() {
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Progresss n Spinner</h1>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      <ProgressBar animated now={60} />
    </div>
  );
}
