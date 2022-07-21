import React from 'react'
import './footer.css'
import { GoLocation } from "react-icons/go";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MapImg from '../imgs/map.jpg'

const footer = () => {
  return (
    <div id='footer' className="footer">
      <div className="footer-map">
        <div className="map">
          <img src={MapImg} />
        </div>
        <div className="info">
          <h2>FIND US</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            laboriosam doloremque odio delectus, sunt magnam laborum impedit
            molestiae, magni quae ipsum, ullam eos! Alias suscipit impedit et,
            adipisci illo quam.
          </h4>
          <p>
            <GoLocation />
            12345 Fake ST NoWhere, AB Country
          </p>
          <p>
            <FaPhone />
            (123) 456-7890
          </p>
          <p>
            <MdEmail />
            info@website.com
          </p>
        </div>
      </div>

      <div className="footer-body">
        <div>
          <h1>EMAIL US</h1>
          <p>info@website.com</p>
        </div>
        <div>
          <h1>EMAIL US</h1>
          <p>info@website.com</p>
        </div>
        <div>
          <h1>CALL US</h1>
          <p>(123) 456-7890</p>
        </div>
      </div>

      <div className='footer-end'>
        <p>© Copyright 2022 Made with By DevCRUD</p>
      </div>
      
    </div>
  );
}

export default footer