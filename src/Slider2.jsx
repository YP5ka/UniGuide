import React from "react";
import Modal from './modal/modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Slider2(){
    const [modalActive, setModalActive] = React.useState(true);
    const [selectedImage, setSelectedImage] = React.useState("");
    const [selectedTitle, setSelectedTitle] = React.useState("");
    const [selectedText, setSelectedText] = React.useState("");
    const arr = [
      {img: "/img/fourPage/ladder.jpg", title: "Каменная лестница",
      text: "Объект был построен в начале 19-го века, а в 1855 году, во время Крымкой войны, именно на Каменной лестнице произошло одно из самых ярких сражений: отряд английских солдат пытался поднятьсявверх по ступеням и попасть в город, а донские казаки сверху открыли  огонь и смогли остановить неприятеля. Сегодня лестница является одним из символов Таганрога. Ее озеленили по обеим сторонам, установили красивые скульптуры. Ежегодно в день Города по ступеням проводится массовый забег. Победитель получает памятные подарки."},
      {img: "/img/fourPage/naberejnay.jpg", title: "Пушкинская набережная",
      text: "Старейшая набережная города никогда не бывает безлюдной: здесь гуляют отдыхающие, совершают променад семьи с детьми, неторопливо прогуливаются пенсионеры. Главное украшение набережной – памятник, установленный в честь 300-летнего юбилея Таганрога. От него лучами расходятся пешеходные дорожки в разные стороны, образуя сквер. Длина набережной составляет более километра, на всей протяженности она украшена клумбами, зелеными насаждениями, аккуратными живыми изгородями. Для гостей всегда открыты двери небольших ресторанов и уютных кафе.",},
      {img: "/img/fourPage/domikCheh.jpg" ,title: "Музей «Домик Чехова»",
      text: "В маленьком флигеле из глинобитного кирпича в 1860 году родился будущий известный писатель Антон Чехов. В начале 20-го века дом опустел. Музей создавался руками энтузиастов: два таганрогских учителя постепенно собирали экспонаты, личные вещи Чехова, его школьные тетради, фотографии, восстанавливали обстановку. Первая выставка состоялась в 1926 году. Сегодня посетители могут увидеть, как жил А.П. Чехов, пока был маленьким. Экспозиция рассказывает о быте семьи, ее традициях и привычках. Документы, записи, предметы мебели – все сохранилось в том же виде, что и полтора века назад.",},
      {img: "/img/fourPage/alex_1_dvorec.jpg", title: "Дворец Александра I",
      text: "В Таганроге, на живописной Греческой улице стоит красивый старинный особняк. В 19-м веке именно здесь останавливались все высокопоставленные лица, которые проездом оказывались в городе или приезжали сюда с деловыми визитами. В 1825 году в доме на Греческой улице поселилась семья Александра I: супруге императора был прописан врачами отдых в спокойной обстановке на берегу моря. Имелись все предпосылки предполагать, что самодержец останется здесь надолго. Но планам не суждено было сбыться. Из одной из рабочих поездок Александр I вернулся сильно простуженным. Вместо того чтобы усиленно лечиться, он продолжал активно заниматься государственными делами. Болезнь прогрессировала, и в конце ноября 1825 года император скончался. Впоследствии императрица выкупила особняк и повелела создать домовую церковь в той комнате, где почил ее супруг. За полтора века фасад дома неоднократно перестраивался, но колорит провинциального классицизма хорошо сохранился. У туристов здание вызывает большой интерес, каждый гость города считает своим долгом прийти и посмотреть на старинный особняк, который стал свидетелем таких значимых событий.",},
      {img: "/img/fourPage/muzey_gradstroit.jpg", title: "Музей градостроительства",
      text: "Объект имеет огромную архитектурную и культурную ценность не только для города, но и для всей страны. Расположился музей в старинном особняке, который сам по себе является интересной достопримечательностью. В здании гармонично переплелись архитектура, скульптура и живопись. Островерхие башни, кровля с гребешком, окна разной формы, необычный фасад – особняк нередко сравнивают с Ярославским музеем в Москве. В выставочных залах представлены экспозиции из работ местных художников. Так же здесь часто организуются временные выставки на разные темы."},
]

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
        modules={[Navigation,  A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
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

export default Slider2;