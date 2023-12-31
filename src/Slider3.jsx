import React from "react";
import Modal from './modal/modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, A11y, Scrollbar } from 'swiper/modules';

function Slider3(){
    const [modalActive, setModalActive] = React.useState(true);
    const [selectedImage, setSelectedImage] = React.useState("");
    const [selectedTitle, setSelectedTitle] = React.useState("");
    const [selectedText, setSelectedText] = React.useState("");
    const arr = [
      {img: "/img/fourPage/alferaki.jpg", title: "Дворец Н. Д. Алфераки",
      text: "Дворец носит имя своего первого владельца, одного из богатейших помещиков Екатеринославской губернии – Николая Дмитриевича Алфераки. Он был представителем греческого рода, переселившегося в Россию в конце XVIII века. Среди соседних зданий сооружение выделяется яркой архитектурой, навеянной греческими мотивами: высокой крышей, колоннами, лепным декором. С самого момента постройки дворец был культурным центром города. У его хозяина часто гостили творческие люди, в том числе известные музыканты и композиторы. В конце 19-го века здесь была организована небольшая выставка, которая впоследствии выросла до полноценного краеведческого музея, действующего в этих стенах по сей день. В залах музея представлено очень богатое археологическое наследие. Памятники из камня, стекла, металла, текстиля – некоторые экспонаты датируются 11-13 веками."},
      {img: "/img/fourPage/teatr.jpg", title: "Драматический театр имени А. П. Чехова",
      text: "Один из самых старых на юге России театров радует зрителей постановками почти два столетия. Здесь каждый год проводятся театральные фестивали, собирающие поклонников из многих городов. Здание театра тоже вызывает интерес, представляя собой прекрасный образец архитектуры середины 19-го века. Внутри сохранилась изящная роспись и тонкая лепнина. Репертуар состоит из постановок не только местной труппы, но и из спектаклей известных гастрольных туров.",},
      {img: "/img/fourPage/bogydonia.jpg" ,title: "Богудония – рыбацкий квартал на окраине Таганрога",
      text: "Район Богудония во все времена обладал особенным колоритом. Здесь проживали рыбаки, строили незатейливые домики, отсюда отправлялись на промысел. Местные жители знали, что в Богудонии всегда можно купить свежевыловленную рыбу. Повсюду находились лавочки, коптильни, мастерские по ремонту сетей и лодок. Все три улицы квартала представляют собой крутые спуски к морю. Сегодня жители района продолжают традиции предков и занимаются рыболовством. Усовершенствовалось оснащение, изменились методы, но смысл остается прежним – вернуться с промысла с хорошим, богатым уловом.",},
      {img: "/img/fourPage/library.jpg", title: "Библиотека имени А. П. Чехова",
      text: "Центральная городская публичная библиотека имениА.П.Чехова — старейшая наюге России. Она была открыта 23мая 1876года. Библиотекаобладает уникальными фондами, особую гордость вызывают страницы истории,связанные сименемА.П.ЧеховаЦГПБ имениА.П.Чехова— современный информационный икультурнодосуговый центр Таганрога. Вструктуре 17отделов. Библиотека нетолько активноиспользует сторонние электронные ресурсы, ноисоздает собственныеФонд редких иценных изданий насчитывает более 28тысяч единицхранения ивключает печатные книги, рукописные книги печатного периода, более200наименований периодических изданий, альбомы, атласы. Книжное собраниеохватывает период сXVIII поXX векВ2020году благодаря национальному проекту «Культура» вбиблиотекепоявился виртуальный концертный зал, оснащенный профессиональным аудио-ивидеооборудованием. Четыре раза вмесяц для любителей музыки транслируютсяконцерты излучших залов Москвы идругих крупных городов России",},
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

export default Slider3;