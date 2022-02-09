import React  from "react";
import {  useSelector,useDispatch} from "react-redux";
import { getitems } from "../store/ItemSlice";
import styled from 'styled-components';

const Orderlist = () => {
  const orderFood = useSelector((getitems));
    const dispatch = useDispatch();
    return (
     
      orderFood.map(el=>{
          return(
      <div>
   <p>{el.name}
   </p>

      </div>
            )})

          
    )
}

export default Orderlist;
