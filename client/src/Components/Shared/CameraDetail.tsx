import React from 'react';

export interface CameraProps {
  name: string;
  imgUrl: string;
  price: number;
  regularPrice: number;
  reviewCount: number;
  isAvailable: boolean;
  writer: string;
  discount: number;
  descrip: string;
}

const CameraDetail = (props: CameraProps) => {
  return (
    <>
      <div className="imgWrap">
        <img src={`../${props.imgUrl}.jpeg`} alt="" />
      </div>
      <div className="contentWrap">
        <h4>{props.name}</h4>
        <p className="price">
          <span>Price : Rs. {props.price}</span>
          <span>Regular Price : Rs. {props.regularPrice}</span>
          <span>Discount Rs.{props.regularPrice - props.price}</span>
        </p>
        <p className="review">Review : {props.reviewCount}</p>
        <p className="writer">Writer : {props.writer}</p>
        <p className="writer"> Available :  {props.isAvailable ? 'In Stock' : 'Out of Stock'}
        </p>
        <p className="descipt">{props.descrip}</p>
      </div>
    </>
  );
};

export default CameraDetail;
