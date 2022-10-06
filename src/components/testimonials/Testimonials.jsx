import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/client_img.jpg";
import Image2 from "../../assets/client_img2.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const data = [
  {
    id: 1,
    image: Image1,
    title: "Mr Ifeanyi",
    subtitle: "Senior Software Developer at SDSD Prestige Ltd",
    comment:
      "Commitment to work and attention to details displayed by him is commendable, without that I don’t think that the project would have progressed so smoothly. I definitely recommend Dev Joshua to other clients.",
  },
  {
    id: 2,
    image: Image2,
    title: "Mr Samuel Osinloye",
    subtitle: "Software Developer at SDSD Prestige Ltd",
    comment:
      "I was very happy to work with Dev Joshua for my web application. The quality of work was really excellent, and his turnaround time was really amazing. Anytime i had bug or issues to fix, he rectified in required timing. And he did an excellent job. I will definitely recommend him and i will definitely work with him in future projects.",
  },

];

const Testimonials = () => {
  return (
    <section className="testimonials_container section">
      <h2 className="section_title">Clients & Reviews</h2>

      <Swiper className="testimonials_container grid"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}

      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials_item" key={id}>
              <div className="thumb">
                <img src={image} className='client_img' alt="" />
              </div>
              <h3 className="testimonials_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>

    </section>
  )
}

export default Testimonials;