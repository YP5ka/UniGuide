import React from "react";
import Modal from './modal/modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';



function Slider () {
    const [modalActive, setModalActive] = React.useState(true);
    const [selectedImage, setSelectedImage] = React.useState("");
    const [selectedTitle, setSelectedTitle] = React.useState("");
    const [selectedText, setSelectedText] = React.useState("");
    const arr = [
      {img: "/img/fourPage/petr.jpg", title: "Каменная лестница",
      text: "Объект был построен в начале 19-го века, а в 1855 году, во время Крымкой войны, именно на Каменной лестнице произошло одно из самых ярких сражений: отряд английских солдат пытался поднятьсявверх по ступеням и попасть в город, а донские казаки сверху открыли  огонь и смогли остановить неприятеля. Сегодня лестница является одним из символов Таганрога. Ее озеленили по обеим сторонам, установили красивые скульптуры. Ежегодно в день Города по ступеням проводится массовый забег. Победитель получает памятные подарки."},
      {img: "/img/fourPage/card2.png", title: "Пушкинская набережная",
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

export default Slider