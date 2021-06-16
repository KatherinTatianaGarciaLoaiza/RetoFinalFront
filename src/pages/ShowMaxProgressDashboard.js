import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cleanRedirect, getMaxProgressOkr,getDataChart } from '../actions/okrActions';




const ShowMaxProgressDasboard = ({dispatch, userId, redirect,id}) =>  {

    const history = useHistory();
    useEffect(() => {
     dispatch(getMaxProgressOkr(userId))
     if(redirect){
         history.push(redirect);
         dispatch(cleanRedirect());
     }
    }, [dispatch,userId,redirect]);

   if(id){
    dispatch(getDataChart(id));
   }


    return(
        <div></div>
    );
}

const mapStateToProps = (state) => ({
    userId: state.okr.OKR.userId,
    redirect: state.okr.redirect,
    id: state.okr.ProgressOKR.id,
  });

export default connect(mapStateToProps)(ShowMaxProgressDasboard);