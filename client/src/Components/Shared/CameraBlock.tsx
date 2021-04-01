import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

export interface CameraProps {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  explore: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CameraBlock = (props: CameraProps) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <h4>{props.name}</h4>
        <button className="btn btnClose">
          <FaWindowClose />
        </button>
      </div>
      <div className="cardBody">
        <div className="imgWrap">
          <img
            src={`../Assets/images/camera/${props.imgUrl}`}
            alt={props.name}
          />
        </div>
      </div>
      <div className="cardFooter">
        <div className="row">
          <div className="col-6">
            <strong>Rs. {props.price} </strong>
          </div>
          <div className="col-6 text-right">
            <button
              type="button"
              className="btn btn-sm btnPrime"
              onClick={props.explore}
            >
              Explore
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default CameraBlock;
