import { Link, Outlet, } from 'react-router-dom';
const Lay = () => {
    return(
        <>
        <div className="wrapperSecond">
            <header>
                <div className="nav">
                <Link className='navBarText' to = "/SecondPage">Главная</Link>
                <Link to = "/">О нас</Link>
                <h1>DoD</h1>
                <Link to = "/ThreePage">UniGuide</Link>
                <Link to = "/FourPage">Таганрог</Link>
                </div>
            </header>
            
            <Outlet/>
            <footer>
                    
                    <div className="contacts">
                        <p className='dod'>DoD</p>
                        <p>DoD.mail@yandex.ru</p> 
                    </div>
            </footer>
        </div>
        
        </>
    )
}

export {Lay}