import React from 'react';

export interface ReadProps {
  name: string;
  imgUrl: string;
  descrip: string;
  isExpanded: boolean;
  explore: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ReadMore = (props: ReadProps) => {
  return (
    <>
      <div className="imgWrap">
        <img src={props.imgUrl} alt={props.name} />
        <div className="title">{props.name}</div>
      </div>
      <div className="contentWrap">
        <p>
          {props.descrip.length > 320
            ? props.isExpanded
              ? props.descrip
              : `${props.descrip.substring(0, 320)}...`
            : props.descrip}
        </p>

        {props.descrip.length > 320 && (
          <div className="text-right">
            <button
              type="button"
              onClick={props.explore}
              className="btn btn-sm btnPrime"
            >
              {props.isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ReadMore;
