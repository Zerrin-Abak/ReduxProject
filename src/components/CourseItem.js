import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/cardSlice"; 

function CourseItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="item-main-container">
      <img src={item.img} />
      <div className="item-container">
        <h4>{item.title}</h4>
        <h4>{item.price * item.quantity} TL</h4>
        <div className="card-info">
          <button className="card-icon-btn" onClick={() => {dispatch(increase(item.id))}}>
            <FaChevronUp />
          </button>
          <p>{item.quantity}</p>
          <button className="card-icon-btn" onClick={() => {dispatch(decrease(item.id))}}>
            <FaChevronDown />
          </button>
        </div>
        <button className="btn-delete" onClick={() => dispatch(removeItem(item.id))}>Sil</button>
      </div>
    </div>
  );
}

export default CourseItem;
