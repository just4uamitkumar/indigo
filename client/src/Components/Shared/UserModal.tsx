import React from 'react';

export interface ModalProps {
  title: string;
  body: string;
  closeModal: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  id: number;
}

const UserModal = (props: ModalProps) => {
  return (
    <div className="pageShadow">
      <div className="modal modal-sm">
        <div className="modalHeader">User Detail ID : {props.id}</div>
        <div className="modalBody">
          <h4>{props.title}</h4>
          <p>{props.body}</p>
        </div>
        <div className="modalFooter">
          <button className="btn btnDanger" onClick={props.closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
