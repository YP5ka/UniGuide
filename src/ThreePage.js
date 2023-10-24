const ThreePage = () => {
    return(
        <>
        <div className="wrapperSecond">
        <div className="firstBanner">
            <div className="textLeftImg">
                    <h1 className="textUni"><span className="fon">UniGuide</span></h1>
                    <h3 className="textUnderUni">Путешествия по новому!</h3>
            </div>        
            <img src = "/img/firstBanner.png" />
            </div>
            <div className="infoCube">
                <div className="cube">
                    <p className="p1">Не ищите гида</p>
                    <p className="p2">Интересно именно вам</p>
                </div>
                <img src = "/img/uni/girlMain.png"/>
                <div className="cube">
                    <p className="p3">Забудьте про однообразие маршрутов</p>
                    <p className="p4">В любое время в любом месте</p>
                </div>
                
            </div>
            <div className="secondBanner">
                <div className="block_1">
                <img src = "/img/secondBanner/1.png"/>
                    <div className="text1">
                      <h2>Яркие приключения всегда в кармане</h2>
                      <p>Скачайте прииложение и забудьте про поиск гида.</p>   
                    </div>
                </div>
                <div className="block_2">
                <img src = "/img/secondBanner/2.png"/>
                    <div className="text2">
                      <h2>Яркие приключения всегда в кармане</h2>
                      <p>Скачайте прииложение и забудьте про поиск гида.</p>   
                    </div>
                </div>
                <div className="block_3">
                <img src = "/img/secondBanner/3.png"/>
                    <div className="text3">
                      <h2>Яркие приключения всегда в кармане</h2>
                      <p>Скачайте прииложение и забудьте про поиск гида.</p>   
                    </div>
                </div>
                <div className="block_4">
                <img src = "/img/secondBanner/4.png"/>
                    <div className="text4">
                      <h2>Яркие приключения всегда в кармане</h2>
                      <p>Скачайте прииложение и забудьте про поиск гида.</p>   
                    </div>
                </div>
            </div>
            <div className="threeBanner">
                <div className="banner3">
                    <img src = "/img/threeBanner/1.png" alt = "img" />
                    <div className="buttonAndText">
                    <div className="textMain">
                        <h2>Скачайте</h2>
                        <p>своё яркое путешествие</p>
                    </div>
                    <div className="buttons">
                        <button>App Store</button>
                        <button>RuStore</button>
                    </div>
                </div>
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export {ThreePage}