import { Container } from "react-bootstrap";
import { TbBrandWechat } from "react-icons/tb";
import italian from '../images/Italian.png';
import italianflag from '../images/italianflag.png';
import englishFlag from '../images/englishFlag.png';
import american from '../images/american.png';
import arabic from '../images/Arabic.png';
import arabicFlag from '../images/egypt.png';
import chinese from '../images/chinese.png';
import chineseFlag from '../images/chineseFlag.png';
import Korean from '../images/Korean.png';
import KoreanFlag from '../images/corean.png';
import french from '../images/French.png';
import frenchFlag from '../images/frenchFlag.png';
import German from '../images/German.png';
import GermanFlag from '../images/germanflag.png';
import russian from '../images/Russian.png';
import russianFlag from '../images/russianflag.png';
import { Link } from "react-router-dom";

function Talking() {
    return (
        <>
            <div className="talking">
                <h4>Connect with native speakers on Talky to hone your language skills</h4>
                <div className="talkingContainer">
                    <Link to={'/call'}>

                    <div className="talkingCard">
                        <div className="talkingImg"><img src={italianflag} style={{ width: '6.5rem' }} /></div>
                        <p>Italian Language Exchange</p>
                    </div>
                </Link>

                <div className="talkingCard">
                    <div className="talkingImg"><img src={russian} /></div>
                    <p>Russian Language Exchange</p>
                </div>

                <div className="talkingCard">
                    <div className="talkingImg"><img src={frenchFlag} /></div>
                    <p>French Language Exchange</p>
                </div>
                <div className="talkingCard">
                    <div className="talkingImg"><img src={englishFlag} /></div>
                    <p>English Language Exchange</p>
                </div>
                <div className="talkingCard">
                    <div className="talkingImg"><img src={arabicFlag} /></div>
                    <p>Arabic Language Exchange</p>
                </div>
                <div className="talkingCard">
                    <div className="talkingImg"><img src={KoreanFlag} /></div>
                    <p>Korean Language Exchange</p>
                </div>
                <div className="talkingCard">
                    <div className="talkingImg"><img src={GermanFlag} /></div>
                    <p>German Language Exchange</p>
                </div>
                <div className="talkingCard">
                    <div className="talkingImg"><img src={chineseFlag} /></div>
                    <p>Chinese Language Exchange</p>
                </div>

            </div>
        </div >

        </>
    )
}

export default Talking;