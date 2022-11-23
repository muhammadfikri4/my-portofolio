import sun from './img/sun.svg';
import moon from './img/moon.svg';
import './SwitchMode.css';
// import './About';
// import './Contact';

const SwitchMode = () => {

    // const imgMode = document.querySelector(".modeIcon");
    // const getMode = imgMode.getAttribute("src");
    // console.log(getMode);
    // console.log(getMode === "/static/media/sun.41742d8f9bb1070afc2ed6f22d4802c0.svg")
    // console.log(getMode === "/static/media/moon.9b943b998a06a12d76d35969fdf78b15.svg");
    const mode = () => {
   
        const imgMode = document.getElementById("modeIcon");
        const getMode = imgMode.getAttribute("src");
        const navbar = document.getElementById("nav");
        const spesifik = document.getElementById("spek");
        const progress = document.getElementById("progress");
        const labelll = document.querySelectorAll("#labelSkill");

        if (getMode === "/static/media/sun.41742d8f9bb1070afc2ed6f22d4802c0.svg") {
            imgMode.setAttribute("src", "/static/media/moon.9b943b998a06a12d76d35969fdf78b15.svg");
            navbar.classList.remove("bodyColorLight");
            navbar.classList.add("bodyColorDark");

            document.body.style.backgroundColor = "#222";
            

            spesifik.classList.remove("textColorSpekD");
            spesifik.classList.add("textColorSpekL");
            progress.classList.remove("textColorDark");

            progress.classList.add("textColorLight");
            for (let i = 0; i < labelll.length; i++) {
                labelll[i].style.color = "#bbb";
            }
            
        } else {
            imgMode.setAttribute("src", "/static/media/sun.41742d8f9bb1070afc2ed6f22d4802c0.svg");
            navbar.classList.remove("bodyColorDark");
            navbar.classList.add("bodyColorLight");

            document.body.style.backgroundColor = "#e3f2fd";
            

            spesifik.classList.remove("textColorSpekL");
            spesifik.classList.add("textColorSpekD");

            progress.classList.remove("textColorLight");
            progress.classList.add("textColorDark");
            for (let i = 0; i < labelll.length; i++) {
                labelll[i].style.color = "#444";
            }
        }
     
}
    return (
        <div>
            <div className="parentMode">
            <p className="mode" onClick={mode}>Switch Mode : <img src={sun} alt="mode" id="modeIcon"/></p>
            </div>
        </div>
    )

    
}

export default SwitchMode;