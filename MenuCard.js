import React from 'react'
import Resturant from './Resturant'
const MenuCard = ({menuData}) => {
console.log(menuData)
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curElem)=>{
       const{id, name, category, image, description} =curElem;
   return(
      <>
      <div className='card-container' key={ id}>
          <div className='card'>
             <div className='card-body'>
                <span className='card-number card-circle subtle'>{id}</span>
                <span className='card-author subtle'>{name}</span>
                <h2 className='card-title'>{curElem.name}</h2>
                <span card-description subtle>
                {description}
                </span>
                <div className='card-read'>Read</div>
                <img src={image} alt="images" className='card-media'/>
                <span className='card-tag subtle'>Order Now</span>
             </div>
          </div>
       </div>
       </>
      
   )  
    }
    
    )}
    </section>  
    </>
  )
}

export default MenuCard