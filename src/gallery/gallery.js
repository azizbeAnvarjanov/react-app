import React from 'react'
import { TbPlus } from "react-icons/tb";
import Img1 from'../imgs/gallary-1.jpg'
import Img2 from'../imgs/gallary-2.jpg'
import Img3 from'../imgs/gallary-3.jpg'
import Img4 from'../imgs/gallary-4.jpg'
import Img5 from'../imgs/gallary-5.jpg'
import Img6 from'../imgs/gallary-6.jpg'
import Img7 from'../imgs/gallary-7.jpg'
import Img8 from'../imgs/gallary-8.jpg'
import Img9 from'../imgs/gallary-9.jpg'
import Img10 from'../imgs/gallary-10.jpg'
import Img11 from'../imgs/gallary-11.jpg'
import Img12 from'../imgs/gallary-12.jpg'
import "./gallery.css";


const gallery = () => {
  return (
    <div id="gallery" className="gallery-header">
      <h1>OUR MENU</h1>
      <div className="gallery">
        <div className="box">
          <img src={Img1} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img2} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img3} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img4} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img5} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img6} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img7} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img8} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img9} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img10} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img11} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
        <div className="box">
          <img src={Img12} />
          <div className="plus">
            <TbPlus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default gallery