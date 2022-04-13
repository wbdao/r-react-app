import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination,Navigation} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ex,at laboriosam quos minima blanditiis nobis obcaecati, consequunturmolestiae explicabo culpa aut neque doloremque minus dolorepraesentium magnam iusto suscipit.",
  },
  {
    avatar: AVTR2,
    name: "Shata Wall",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ex,at laboriosam quos minima blanditiis nobis obcaecati, consequunturmolestiae explicabo culpa aut neque doloremque minus dolorepraesentium magnam iusto suscipit.",
  },
  {
    avatar: AVTR3,
    name: "Kawma Despite",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ex,at laboriosam quos minima blanditiis nobis obcaecati, consequunturmolestiae explicabo culpa aut neque doloremque minus dolorepraesentium magnam iusto suscipit.",
  },
  {
    avatar: AVTR4,
    name: "Nana am",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ex,at laboriosam quos minima blanditiis nobis obcaecati, consequunturmolestiae explicabo culpa aut neque doloremque minus dolorepraesentium magnam iusto suscipit.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[ Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        Navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="cleint_avatar">
                <img src={avatar} alt="AVTR1" />
              </div>
              <h5 className="cleint_name">{name}</h5>
              <small className="cleint_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
