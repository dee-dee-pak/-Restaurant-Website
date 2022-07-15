import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
const uniqueList=[
   ...new Set( Menu.map((curElem)=>{
return curElem.category
})),
"ALL",
]
const Resturant = () => {
   const [menuData,setMenuData]= useState(Menu)
   const [menuList, setMenuList]= useState(uniqueList);
   const filterItem =(category)=>{
      if(category==="ALL"){
         setMenuData(Menu);
         return;
      }
   const updateList=Menu.filter((curElem)=>{
   return curElem.category === category  
   });
 setMenuData(updateList);
      
   }
   // console.log(menuData)
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant