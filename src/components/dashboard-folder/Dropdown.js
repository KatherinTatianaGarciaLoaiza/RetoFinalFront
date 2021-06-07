
import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import test from "../helpers/krs.json";
import test2 from "../helpers/test.json";

export default function Example () {
    console.log(test)
  return (
      <div  className="uncontrolledDropdown" id="dropdown-title-okr">
    <UncontrolledDropdown >
      <DropdownToggle caret >
        {test2.title}
      </DropdownToggle>
      <DropdownMenu>{
          test.map((el)=>(
            <DropdownItem key={el.userId} > {el.title}</DropdownItem>
          ))
          }             
      </DropdownMenu>
    </UncontrolledDropdown>
    </div>
  );
}