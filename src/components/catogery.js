import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
import four from "../images/four.jpg"
import ten from "../images/ten.jpg"
function Catogery(){
    return(
        <div class="catogery_main">
        <div class="catogery">
    
            <button>Devolopoment</button>
            <button>Business</button>
            <button>IT & Software</button>
            <button>Personal Devolopoment</button>
            <button>Design</button>
            <button>Marketing</button>
        </div>
        <div class="sale__image">
            <img src={ten} alt="Reload"></img>
    
            <div class="sale__image__offer">    
                <h2>
                    Udemy flash sale! 24 hours to save
                </h2>
                <p>
                    Get the courses for just 499 only
                </p>
    
            </div>
        </div>
        <div class="recommeneded">
            <h2>Recommeneded for you</h2><br></br>
            <p>Pick the best one</p>
            <div class="recommeneded__continer">
                <div class="Cources">
                    <img class="loo" src={one} alt=""></img>
                    <p>2023 Python Data</p>
                    <h3>Visuallsation Masterclass</h3>
                    <p>Col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>₹449 <del>₹1049</del> </p>
                </div>
                <div class="Cources">
                    <img class="loo" src={two} alt=""></img>
                    <p>Web Development</p>
                    <h3> Bootcamp 2023</h3>
                    <p>Col steele</p>
                    <p>3.2 ⭐⭐</p>
                    <p>₹449 <del>₹999</del> </p>
                </div>
                <div class="Cources">
                    <img class="loo" src={three} alt=""></img>
                    <p>Master UI/UX </p>
                    <h3>Figma</h3>
                    <p>Col steele</p>
                    <p>4.8 ⭐⭐⭐</p>
                    <p>₹449 <del>₹1999</del> </p>
                </div>
                <div class="Cources">
                    <img class="loo" src={four} alt=""></img>
                    <p>Sasic to Advance Java Core </p>
                    <h3>Java</h3>
                    <p>Col steele</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>₹449 <del>₹999</del> </p>
                </div>
    
    
            </div>
        </div>
    </div>
    )
}
export default Catogery