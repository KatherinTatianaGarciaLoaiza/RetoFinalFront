import React from 'react';
import KrCard from './Card';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const OkrCard = ({ okr }) => {
  return (
    <div>
      <div>
        <h2>{okr.title}</h2>
        <button>
          <EditIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
      {okr.krs.map((kr) => (
        <KrCard
          key={kr.krId}
          keyResult={kr.keyResult}
          description={kr.description}
        />
      ))}
    </div>
  );
};

export default OkrCard;
