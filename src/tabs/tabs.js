import React from 'react'
import { useState } from 'react'
import './tabs.css'
import Img1 from '../imgs/blog-1.jpg'
import Img2 from '../imgs/blog-2.jpg'
import Img3 from '../imgs/blog-3.jpg'
import Img4 from '../imgs/blog-4.jpg'
import Img5 from '../imgs/blog-5.jpg'
import Img6 from '../imgs/blog-6.jpg'

const tabs = () => {
   


  return (
    <div id='blog' className="tabs">
      <div className="tabs-header">
        <h1>EVENTS AT THE FOOD HUT</h1>
      </div>

      <div className="tabs-body">
        <div className="control_buttons">
          <button className="active">Foods</button>
          <button id="1">Juices</button>
        </div>

        <div className="foods foods-active" data-tab="0">
          <div className="food">
            <div className="food-img">
              <img src={Img1} />
            </div>
            <div className="food-description">
              <div className="price">$5</div>
              <h2>Reiciendis Laborum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                provident illum officiis fugit laudantium voluptatem sit iste
                delectus qui ex.
              </p>
            </div>
          </div>

          <div className="food">
            <div className="food-img">
              <img src={Img2} />
            </div>
            <div className="food-description">
              <div className="price">$12</div>
              <h2>Adipisci Totam</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                provident illum officiis fugit laudantium voluptatem sit iste
                delectus qui ex.
              </p>
            </div>
          </div>

          <div className="food">
            <div className="food-img">
              <img src={Img3} />
            </div>
            <div className="food-description">
              <div className="price">$8</div>
              <h2>Dicta Deserunt</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                provident illum officiis fugit laudantium voluptatem sit iste
                delectus qui ex.
              </p>
            </div>
          </div>
        </div>

        <div className="foods" data-tab="1">
          <div className="food">
            <div className="food-img">
              <img src={Img4} />
            </div>
            <div className="food-description">
              <div className="price">$15</div>
              <h2>Consectetur Adipisicing Elit</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                provident illum officiis fugit laudantium voluptatem sit iste
                delectus qui ex.
              </p>
            </div>
          </div>

          <div className="food">
            <div className="food-img">
              <img src={Img5} />
            </div>
            <div className="food-description">
              <div className="price">$29</div>
              <h2>Ullam Laboriosam</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                provident illum officiis fugit laudantium voluptatem sit iste
                delectus qui ex.
              </p>
            </div>
          </div>

          <div className="food">
            <div className="food-img">
              <img src={Img6} />
            </div>
            <div className="food-description">
              <div className="price">$3</div>
              <h2>Fugit Ipsam</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                provident illum officiis fugit laudantium voluptatem sit iste
                delectus qui ex.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id='review' className="review">
        <h1>REVIEWS</h1>

        <div className="box">


          <div>
            <div className="box-header">
              <h2>John Doe</h2>
              <p>Web Designer</p>
            </div>
            <div className="box-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                nobis eligendi, quaerat accusamus ipsum sequi dignissimos
                consequuntur blanditiis natus. Aperiam!
              </p>
            </div>
          </div>

          <div>
            <div className="box-header">
              <h2>Steve Thomas</h2>
              <p>UX/UI Designer</p>
            </div>
            <div className="box-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                nobis eligendi, quaerat accusamus ipsum sequi dignissimos
                consequuntur blanditiis natus. Aperiam!
              </p>
            </div>
          </div>

          <div>
            <div className="box-header">
              <h2>Miranda Joy</h2>
              <p>Graphic Designer</p>
            </div>
            <div className="box-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                nobis eligendi, quaerat accusamus ipsum sequi dignissimos
                consequuntur blanditiis natus. Aperiam!
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default tabs