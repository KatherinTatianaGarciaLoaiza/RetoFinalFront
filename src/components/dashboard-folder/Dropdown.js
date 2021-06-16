import React, { useEffect }  from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getOwnOKR, getOkrById, cleanRedirect } from '../../actions/okrActions';
import { Link } from 'react-router-dom'
import { getDataChart } from "../../actions/okrActions";
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
const Example = ({ dispatch, userId, okrs, title, redirect }) => {  
  const history = useHistory();
  const okrById = (id) =>{
    dispatch(getOkrById(id))
    dispatch(getDataChart(id));

    if (redirect) {
      history.push(redirect);
      dispatch(cleanRedirect());
    }
  }
  useEffect(() => {
    dispatch(getOwnOKR(userId));
  }, []);

  return (
    <div className="uncontrolledDropdown" id="dropdown-title-okr">
      <UncontrolledDropdown >
        <DropdownToggle  caret className = "button-dropdown">
          {title}
        </DropdownToggle>
        <DropdownMenu>{
          okrs.map((f) => (
            <DropdownItem key={f.id} onClick={()=>{okrById(f.id)}}><Link to={`/UserOKRS`} className="button" style={{ color: "#000" }}  >
            {f.title}</Link></DropdownItem>
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
  id: state.okr.ProgressOKR.id,
  progressData: state.okr.DataProgressChart,
  redirect: state.okr.redirect,

});

export default connect(mapStateToProps)(Example);