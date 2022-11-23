import vector from './img/vectorNime.png';
import './Home.css';
import './About';

const Home = () => {
    return (
        <div>
            <div className='container-fluid home'>
                <div className="row baris">
                    <div className='col-md-5 kolom-1'>
                        <img src={vector} alt="Learning" className='vectorAnimated img-fluid'/>
                        
                    </div>
                    <div className="col-md-7 kolom-2">
                        <div className='intro'>
                            <h1 className='hai'>Welcome,</h1>
                            <p className='meee'>I'm <span className='name'>Muhammad Fikri</span></p>
                            <p className='profesi text-secondary'>I'm interested in managing a website, especially in the front-end developer section using HTML CSS Javascript React JS</p>
                            <a href='https://web.whatsapp.com/send/?phone=%2B62895360778397&text&type=phone_number&app_absent=0' className='text-light fw-bold talk'>Let's Talk</a>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        </div>
        
    )
    


}

export default Home;