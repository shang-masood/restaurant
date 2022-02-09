import React from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { additemTolist } from "../store/ItemSlice";
const Foods =
[
{
id:"1",
name:"Dolma",
category:"Kurdish Food",
price:"12000",
img:"https://c8.alamy.com/zooms/9/da807c29944e420cb63db683e2d16642/2hc0gnc.jpg",

},
{
    id:"2",
    name:"Bryani",
    category:"Kurdish Food",
    price:"9000",
    img:"https://i0.wp.com/bestofvegan.com/wp-content/uploads/2021/03/Biryan2-scaled.jpg?fit=2048%2C2560&ssl=1",
    
    },
    {
        id:"3",
        name:"Kfta",
        category:"Kurdish Food",
        price:"15000",
        img:"https://cf.girlsaskguys.com/q3490519/2f2a987a-ede8-4451-9163-b0044b1ad659-m.jpg",
        
        },
        {
            id:"4",
            name:"Kfta-Doghawa",
            category:"Kurdish Food",
            price:"17000",
            img:"https://i.pinimg.com/originals/ba/40/2f/ba402f372b864d14d66f7417ec6d0fd7.jpg",
            
            },
            {
                id:"5",
                name:"Kubay Brnj",
                category:"Kurdish Food",
                price:"10000",
                img:"data:image/jpeg;base64,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",
                
                },
                {
                    id:"6",
                    name:"Brnj ba Srka",
                    category:"Kurdish Food",
                    price:"8000",
                    img:"data:image/png;base64,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",
                    
                    }, 
                    {
                        id:"7",
                        name:"Burger",
                        category:"Western Food",
                        price:"5000",
                        img:"data:image/jpeg;base64,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",
                        
                        }, 
                        {
                            id:"8",
                            name:"Italian Pizza",
                            category:"Western Food",
                            price:"12000",
                            img:"https://www.johnsonville.com/.imaging/mte/johnsonville-retail/900-wide/dam/johnsonville/recipe-images/US_Grnd_Ital_LowCarbItalianPizza_Qtr2--2-.jpg/jcr:content/US_Grnd_Ital_LowCarbItalianPizza_Qtr2%20(2).jpg",
                            
                            }, 
                            {
                                id:"9",
                                name:"Italian Pasta",
                                category:"Western Food",
                                price:"10000",
                                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGW08O7CeakZRPOEoRz0HfsWbtZLIoJ4pOg&usqp=CAU",
                                
                                }, 
                                {
                                    id:"10",
                                    name:"Beef Shawrma",
                                    category:"Turkish Food",
                                    price:"4000",
                                    img:"https://www.foxyfolksy.com/wp-content/uploads/2021/09/chicken-shawarma.jpg",
                                    
                                    },    

]

const Foodcard=(props)=>{
    const Card= styled.div
  `
  width:200px;
  background-color:yellow;
  `
  const Imgg=styled.img
  `
  width:200px;
  height:200px;

  `
  const dispatch = useDispatch();

    const addfood = (any) => {
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
    return(

        <div >
        {Foods.map((food) => {
          return (
            <Card  key={food.id}>
           <p>{food.name}</p>
           <p>{food.price}</p>
           <p>{food.category}</p>
           <Imgg src={food.img} alt='Ops!not available for now!'/>
           <button
             
             onClick={()=>{addfood(Foods)}}
           >
             Order
           </button>
           </Card>
          );
        })}
      </div>
    )
    
}
export default Foodcard