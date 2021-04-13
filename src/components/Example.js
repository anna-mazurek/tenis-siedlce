import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import './Example.css';

function Example() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button style={{backgroundColor:"#cb9737", borderStyle:"none"}}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          czytaj więcej
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
    );
  }
  
export default Example;