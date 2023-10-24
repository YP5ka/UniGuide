import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import {Lay} from './components/Lay';

import { ThreePage } from './ThreePage';
import { FourPage } from './FourPage';
import { FirstPage } from './firstPage';
const SecondPage = () => {
    
    const navigate = useNavigate();
    function navToThreePage() {
        navigate('/ThreePage')
        window.scrollTo(0,0);
    }
    function navToFourPage(){
        navigate('/FourPage')
        window.scrollTo(0,0);
    }
    return(
        <>
            <div className="firstBannerMain">
                <div className="textCentreImg">
                    <div className="textfull">
                        <div className="first"><h1 className="textUniFirst">UniG</h1></div>
                        <div className="second"><h1 className="textUniSecond">uide</h1></div>
                        
                    </div>
                    <h3 className="textUnderUni">cкоро</h3>  
                </div>
                <a href = "" >DoD.mail@yandex.ru</a>
            </div>
            <div className="bannerMainTwo">
                <div className="firstCube ">
                    
                        <div className="textCube">
                            
                            <h3>Приключение в кармане!</h3>
                            
                            <p>Узнайте на что способна технология LocationAudio.</p>
                            <button onClick={navToThreePage}>Подробнее</button>
                        </div>
                        <img width={400} height={400} src = "/img/uni/girlMain.png"  alt="" ></img>
                        
                    
                </div>
            </div>

            <div className="bannerMainThree">
                <div className="firstCube ">
                    
                        <div className="textCube">
                            <h3>Собрали для вас самое интересное о Таганроге</h3>
                            <button onClick={navToFourPage}>Подробнее</button>
                        </div>
                </div>
            </div>
        
        </>
    )
}

export {SecondPage}