import { useState, useEffect } from "react";
import API from '../API/api';
import Cards from "./Cards";
import Slider from "react-slick";


export default function AllBooks(){
    const [book, setBook] = useState([]);
    useEffect(() => {
    const getBook = async () => {
      try {
        const res = await API.get("/books");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-12 grid grid-cols-1 md:grid-rows-1">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </Slider>
        </div>
    </div>
    </>
  )
}