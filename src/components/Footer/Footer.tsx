import {ReactElement} from 'react';
import './Footer.css';

function Footer():ReactElement{
    return (
        <footer className={"Footer"}>
            <span>Page created by <a href="https://emilvn.github.io">Emil Vennervald Nielsen</a></span>
            <span>Weather data from <a href="https://openweathermap.org/">OpenWeatherMap</a></span>
            <span>Background images by <a href="https://www.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_8562848.htm#query=weather%20background&position=14&from_view=keyword&track=ais">starline</a> on Freepik</span>
        </footer>
    );
}
export default Footer;