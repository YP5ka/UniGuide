import React from "react";
import Modal from './modal/modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, A11y, Scrollbar } from 'swiper/modules';

function Slider5(){
    const [modalActive, setModalActive] = React.useState(true);
    const [selectedImage, setSelectedImage] = React.useState("");
    const [selectedTitle, setSelectedTitle] = React.useState("");
    const [selectedText, setSelectedText] = React.useState("");
    const arr = [
      {img: "/img/fourPage/card5.png", title: "Памятник Петру 1",
      text: "Петр I (1672-1725) был важной личностью в истории России, потому что он провел множество реформ, которые изменили жизнь страны. Он превратил Россию из средневековой монархии в современную европейскую державу, что позволило ей стать одним из ведущих государств мира. Петр I также был великим реформатором, который пытался улучшить жизнь своих подданных. Он создал новую армию и флот, ввел новую систему налогообложения, построил новые города и дороги, а также основал множество учебных заведений."},
      {img: "/img/fourPage/card2.png", title: "Two",
      text: "cat",},
      {img: "/img/fourPage/card3.png" ,title: "Three",
      text: "fox",},
      {img: "/img/fourPage/card4.png", title: "Four",
      text: "plssssss",},
      {img: "/img/fourPage/card5.png"},
      {img: "/img/fourPage/card6.png"},
      {img: "/img/fourPage/card7.png"},]

      const openModal = (image, title, text) => {
        setSelectedImage(image);
        setSelectedTitle(title);
        setSelectedText(text);
        setModalActive(false);
      };

    return(
        <Swiper
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            '--swiper-pagination-top': 83,
          }}
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
         
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
    >
            {arr.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} alt="" onClick={() => openModal(item.img, item.title, item.text)} />
              </SwiperSlide>
      ))}
            <Modal active= {modalActive} setActive = {setModalActive} modSelectImg = {selectedImage} modSelectTitle = {selectedTitle} modSelectedText = {selectedText}>
            </Modal >
    </Swiper>
    )

}

export default Slider5;