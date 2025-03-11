import React,{useState,useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Config, Urlimage } from '../config/connection';
function Slaiders() {
  const api = Config.urlApi;
  const img = Urlimage.url;

  const [itemSlider,setItemSlider]=useState([]);
  const fetchSlider = async () => {
      try {
        const response = await fetch(api + 'slider/');
        const jsonData = await response.json();
        setItemSlider(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
useEffect(()=>{
  fetchSlider()
},[])
  return (
    <Carousel >
      {itemSlider.map((item,key)=>
    <Carousel.Item >
    <img className="w-100" height={'200px'}  src={`${img}slider/${item.slider_image}`} alt={''} />
      <Carousel.Caption>
        <h3>{item.slider_title}</h3>
      </Carousel.Caption>
    </Carousel.Item>
      )}
  </Carousel>
  )
}

export default Slaiders