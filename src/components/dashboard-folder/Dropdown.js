import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {

  return (
    <div className="uncontrolledDropdown" id="dropdown-title-okr">
      <UncontrolledDropdown >
        <DropdownToggle caret >
          {props.okrs.title}
        </DropdownToggle>
        <DropdownMenu>{
          props.okrs.map((f) => (
            <DropdownItem key={f.id} > {f.title}</DropdownItem>
          ))
        }
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}

export default Example;