import React from 'react';

export interface ModalProps {
  title: string;
  myColor: any;
  closeModal: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
  getColor: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
}

const ColorModal = (props: ModalProps) => {
  return (
    <div className="pageShadow">
      <div className="modal modal-sm">
        <div className="modalHeader">{props.title}</div>
        <div className="modalBody">
            <ul className="colorList">
            {props.myColor.map((e:any, index:number) => 
                <li key={index}><button className="btn colorBtn" data-color={e.colorValue} 
                onClick={(event) => props.getColor(event)}></button></li>
            )}
            </ul>
          
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

export default ColorModal;
