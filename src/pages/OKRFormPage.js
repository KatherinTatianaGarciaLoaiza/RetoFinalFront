import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/OkrFormCss.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createOKR } from '../actions/okrActions';

const OkrFormPage = ({
  dispatch,
  titleOKR,
  objective,
  respName,
  respEmail,
  vertical,
  description,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: titleOKR,
      objective: objective,
      respName: respName,
      respEmail: respEmail,
      vertical: vertical,
      description: description,
    },
  });
  let history = useHistory();

  const onSubmit = (data) => {
    dispatch(createOKR(data));
    console.log(data);
    history.push('/CreateKR');
  };

  const next = (data) => {
    console.log(data);
    history.push('/CreateKR');
  };

  const onClick = () => {
    // let labelValue = prompt('Ingrese el tipo de campo: ');
    // let father = document.getElementById('left-side');
    // let label = document.createElement('LABEL');
    // let input = document.createElement('INPUT');
    // label.innerHTML = labelValue;
    // input.type = 'text';
    // input.className = 'input-style';
    // input.placeholder = 'holaperros';
    // input.id = 'input_' + labelValue;
    // father.appendChild(label);
    // father.appendChild(input);
  };

  return (
    <section className='section'>
      <h1 className='title-center'>Crear Objetivo</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form'>
          <section className='lado-izq'>
            <div className='okr-input'>
              <label htmlFor='titulo'>Titulo OKR</label>
              <input
                type='text'
                id='input_Okr_titulo'
                placeholder='Titulo del OKR'
                className='input-style'
                {...register('title', { required: true })}
              />
            </div>
            <div className='okr-input'>
              <label htmlFor='objetivo'>Objetivo</label>
              <input
                type='text'
                id='input_Okr_objetivo'
                placeholder='Objetivo del OKR'
                className='input-style'
                {...register('objective', { required: true })}
              />
            </div>
            <div>
              <h3 className='title-center'>Responsable</h3>
              <div className='okr-input'>
                <label htmlFor='nombre'>Nombre</label>
                <input
                  type='text'
                  id='input_Okr_nombre'
                  placeholder='Nombre'
                  className='input-style'
                  {...register('respName', { required: true })}
                />
              </div>
              <div className='okr-input'>
                <label htmlFor='respEmail'>Correo</label>
                <input
                  type='email'
                  id='input_Okr_email'
                  placeholder='Correo'
                  className='input-style'
                  {...register('respEmail', { required: true })}
                />
              </div>
              <div className='kr-input'>
                <label htmlFor='text_description'>Agregar un campo</label>
                <button onClick={onClick} className='add-field' type='button'>
                  <AddCircleOutlineIcon />
                </button>
              </div>
            </div>
          </section>
          <aside className='lado-der'>
            <div className='okr-input'>
              <label htmlFor='type'>Verticales:</label>
              <select {...register('vertical')} id='input_Okr_verticales'>
                <option value='Sofka testing'>Sofka testing</option>
                <option value='Agile Services'>Agile Services </option>
                <option value='Arquitectura y Desarrollo'>
                  Arquitectura y Desarrollo{' '}
                </option>
                <option value='IA (inteligencia artificial)'>
                  IA (inteligencia artificial){' '}
                </option>
              </select>
            </div>
            <div className='okr-input'>
              <label htmlFor='description'>Descripcion</label>
              <textarea
                name='description'
                id='description'
                cols='30'
                rows='10'
                {...register('description', { required: true })}></textarea>
            </div>
          </aside>
        </div>
        <div className='container-buttons'>
          <button type='submit'>Guardar</button>
          <button type='button' onClick={next}>
            Siguiente
          </button>
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titleOKR: state.okr.OKR.title,
  objective: state.okr.OKR.objective,
  respName: state.okr.OKR.respName,
  respEmail: state.okr.OKR.respEmail,
  vertical: state.okr.OKR.vertical,
  description: state.okr.OKR.description,
});

export default connect(mapStateToProps)(OkrFormPage);
