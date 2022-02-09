import React from 'react';
import { useDispatch } from "react-redux";
import { additemTolist } from "../store/ItemSlice";
const addtoorder = () => {
    const dispatch = useDispatch();

    const addfood = (food) => {
      dispatch(
        additemTolist({
          id: props.id,
          img: props.img,
          category: props.category,
          name: props.name,
          price: props.price,
        })
      );
    };
  return( <div>
    <img src={props.img} alt=""></img>
    

      
          <div >{props.catigory}</div>
          <div > type : {props.name}</div>
         
            <p className="ml-3">Price : {props.price}$</p>

            <button
              className="bg-blue-200 p-2 px-3 rounded-full mr-2   text-slate-800  mt-2"
              onClick={addfood}
            >
              Order
            </button>


  </div>
  )
};

export default addtoorder;
