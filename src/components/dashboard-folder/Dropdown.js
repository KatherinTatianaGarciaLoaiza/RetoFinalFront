
import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import test from "../helpers/krs.json";

export default function Example () {
    console.log(test)
  return (
      <div  className="uncontrolledDropdown" id="dropdown-title-okr">
    <UncontrolledDropdown >
      <DropdownToggle caret >
        no quiero
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