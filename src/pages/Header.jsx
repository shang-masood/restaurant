import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ThemeDark from '../ThemeDark'
import classes from './header.module.css'
import Orderlist from './orderlist';
const Header = () => {
  
      const MainHeader=styled.div
      `
      width:100%;
      height:100px;
      background-color:rgba(0,0,0,1)
      color:white;
  
      `
      const Btn =styled.button
      `
      position:fixed;
      left:1024px;
      top:40px;
      `
      const Header =styled(Link)
      `
      position :fixed;
      color:white;
      top:40px;
      `
      return <div>
    <ThemeDark.Consumer>
                {(dtx)=>(
                        <MainHeader className={` ${dtx.theme==='dark'?classes.dark:null}`}>
                             <Header to={`/`}>Mini Home restaurant</Header>
                            <Btn onClick={dtx.themeToggler}>{dtx.theme==='dark'? 'change to light':'change to dark'}</Btn>
                            <Link to={`/Orderlist`}>orderlist</Link>
                            </MainHeader >

)
}

</ThemeDark.Consumer>
</div>;
};

export default Header;
/*  
*/