import React , {useState} from 'react';
import Header from './pages/Header';
import NavBar from './Navbar';
import ThemeDark from './ThemeDark';
function App() {
 var data = localStorage.getItem("theme")
  const [themeState, setThemeState]= useState(data);

 function toggleTheme(){
   let prev=data;
   if(prev==='light')
   prev='dark'
   else
   prev='light'
    setThemeState(prev)
    localStorage.setItem("theme",prev)
  }
  return (
    <ThemeDark.Provider value={{theme: themeState, themeToggler: toggleTheme}}>
   <Header/>
   <NavBar/>
   
   </ThemeDark.Provider>
  );
}

export default App;
