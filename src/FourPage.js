import React from 'react';
import {Link} from 'react-scroll'
import 'swiper/css/bundle';
import Slider from './Slider';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import Slider4 from './Slider4';
import Slider5 from './Slider5';
import {CarouselProvider} from './modal/ContextCarousel'
const FourPage = () => {
      
    return(
        <>  
            <CarouselProvider>  
                <div className="bannerMainFour">
                    <h1 >Любимому городу</h1>
                    <div className="arrowText">
                        <Link to = "History" smooth = {true} duration={1000}>Узнайте новое о своем городе<img src="/img/arrow.svg" alt = "arrow" /></Link>
                        <Link to = "Share" smooth = {true} duration={1000}>Поделитесь знаниями с другими<img src="/img/arrow.svg" alt = "arrow" /></Link>
                        <Link to = "Chill" smooth = {true} duration={1000}>Исследуйте новые места<img src="/img/arrow.svg" alt = "arrow" /></Link>
                    </div>
                    
                </div>
                
                    <div className="gallery">
                        
                        <div className="card">
                            <h1 id = "History">Интересные факты</h1>
                                <Slider></Slider>
                            <h1>Исторические места</h1>        
                                <Slider2></Slider2>                          
                            <h1 id = "Chill">В Таганроге</h1>
                                <Slider3></Slider3>
                        
                            <h1>Где отдохнуть?</h1>
                                <Slider4></Slider4>
                                
                        </div>
                    </div>
                

                <div className="bannerMainFourSecond">
                    
                        <div className="fon" id = "Share">
                            <h1>Поделитесь самым интересным</h1>
                            <p>Отправьте информацию о городе и скоро ее смогут увидеть другие пользователи</p>
                            <button>Заполнить форму</button>
                        </div>
                    
                </div>
                
            </CarouselProvider>
        </>
    )
}

export {FourPage}