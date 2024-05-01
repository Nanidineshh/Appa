import React from 'react'
import modern from 'D:/E-commerce/sivasakthi/src/components/assets/build.png';
import chair from 'D:/E-commerce/sivasakthi/src/components/assets/chair.png';
import craddle from 'D:/E-commerce/sivasakthi/src/components/assets/craddle.png';
import Dining from 'D:/E-commerce/sivasakthi/src/components/assets/Dining.png';
import door from 'D:/E-commerce/sivasakthi/src/components/assets/door.png';
import dressing from 'D:/E-commerce/sivasakthi/src/components/assets/dressingtable.png';
import kitchen from 'D:/E-commerce/sivasakthi/src/components/assets/kitchen.png';
import pooja from 'D:/E-commerce/sivasakthi/src/components/assets/pooja.png';
import sofa from 'D:/E-commerce/sivasakthi/src/components/assets/sofa.png';
import teepoy from 'D:/E-commerce/sivasakthi/src/components/assets/teepoy.png';
import wardrobe from 'D:/E-commerce/sivasakthi/src/components/assets/wardrobe.png';
import tvtable from 'D:/E-commerce/sivasakthi/src/components/assets/tv-table.png';
import bed from 'D:/E-commerce/sivasakthi/src/components/assets/bed.png';
const Categories = () => {
    const data = [
        {
            cateImg: modern,
            cateName: "Modern Home",
          },
          {
            cateImg: pooja,
            cateName: "Pooja Mandabam",
          },
          {
            cateImg: door,
            cateName: "Door",
          },
          {
            cateImg: sofa,
            cateName: "Sofa",
          },
          {
            cateImg: teepoy,
            cateName: "Teapoy",
          },
          {
            cateImg: tvtable,
            cateName: "TV showcase",
          },
          {
            cateImg: chair,
            cateName: "Chairs",
          },
          {
            cateImg: craddle,
            cateName: "Baby Craddle",
          },
          {
            cateImg: dressing,
            cateName: "Dressing Table",
          },
          {
            cateImg: kitchen,
            cateName: "Modular Kitchen",
          },
          {
            cateImg: wardrobe,
            cateName: "Wardrobes",
          },
          {
            cateImg: Dining,
            cateName: "Dining Table",
          },
          {
            cateImg: bed,
            cateName: "Wooden Cot",
          },
    ]
  return (
    <>
        <div className="category">
        {
            data.map((value,index)=>{
                return(
                    <div className="box f_flex" key={index}> <img src={value.cateImg} alt=''/>
                    <span>{value.cateName}</span></div>
                )
            })
        }

        </div>
    </>
  )
}

export default Categories