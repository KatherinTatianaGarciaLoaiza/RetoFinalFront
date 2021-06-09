import React, { useEffect }  from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getOwnOKR } from '../../actions/okrActions';

import { connect } from 'react-redux';
const Example = ({ dispatch, userId, okrs, title }) => {
  
  useEffect(() => {
    dispatch(getOwnOKR(userId));
  }, []);

  console.log(title)

  return (
    <div className="uncontrolledDropdown" id="dropdown-title-okr">
      <UncontrolledDropdown >
        <DropdownToggle caret >
          {title}
        </DropdownToggle>
        <DropdownMenu>{
          okrs.map((f) => (
            <DropdownItem key={f.id} > {f.title}</DropdownItem>
          ))
        }

        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userId: state.okr.OKR.userId,
  okrs: state.okr.OKRUser,
});

export default connect(mapStateToProps)(Example);