import React, { useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import '../../styles/OkrCard.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { cleanRedirect, editOkr } from '../../actions/okrActions';
import KRCard from './KRCard';

const OkrCard = ({ okr, dispatch, redirect }) => {
  const history = useHistory();

  useEffect(() => {
    if (redirect) {
      history.push(redirect)
      dispatch(cleanRedirect())
    }
  }, [redirect])

  const handleEdit = (id) => {
    dispatch(editOkr(id))
  }

  return (
    <div>
      <div className='container_display_title'>
        <h2>{okr.title}</h2>
        <IconButton aria-label='editar' color='primary' onClick={() => { handleEdit(okr.id) }}>
          <EditIcon className='btn_color' />
        </IconButton>
        <IconButton aria-label='eliminar' color='primary'>
          <DeleteIcon className='btn_color' />
        </IconButton>
      </div>
      <div className='container_cards'>
        {okr.krs.map((kr) => (
          <KRCard
            key={kr.krId}
            kr={kr}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redirect: state.okr.redirect
})


export default connect(mapStateToProps)(OkrCard);
