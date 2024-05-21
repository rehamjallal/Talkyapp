import { Container } from "react-bootstrap";
import { TbBrandWechat } from "react-icons/tb";
import italian from '../images/Italian.png';
import italianflag from '../images/italianflag.png';
import english from '../images/english.png';
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
import { MDBBtn } from 'mdb-react-ui-kit';



function Chatting() {
    return (
        <>
            <div className="Chatting">
                <div className="chattingtext">
                    <h3>Language Fusion</h3>
                    <p>Discover your perfect language match effortlessly and ignite linguistic synergy." </p>
                </div>
                <div className="chattingContainer">

                    <div className="chattingCard">
                        <div className="imgDiv"><img src={italian} /></div>
                        <div className="flagImgDiv">
                            <img className="flagImg" src={italianflag} />
                        </div>
                        <div className="squareText" >
                            <p>Name:<br />
                                Want to learn:english<br />
                                Can teach:italian</p>
                        </div>
                        <Link to={'/ChatDashboard'}>
                            <h5 className="chat"><TbBrandWechat />Start Chatting</h5>
                        </Link>
                    </div>

                    <div className="chattingCard">
                        <div className="imgDiv"><img src={english} /></div>
                        <div className="flagImgDiv">
                            <img className="flagImg" src={american} />
                        </div>
                        <div className="squareText" >
                            <p>Name:<br />
                                Want to learn:english<br />
                                Can teach:italian</p>
                        </div>
                        <Link to={'/ChatDashboard'}>
                            <h5 className="chat"><TbBrandWechat />Start Chatting</h5>
                        </Link>
                    </div>

                    <div className="chattingCard">
                        <div className="imgDiv"><img src={arabic} /></div>
                        <div className="flagImgDiv">
                            <img className="flagImg" src={arabicFlag} />
                        </div>
                        <div className="squareText" >
                            <p>Name:<br />
                                Want to learn:english<br />
                                Can teach:italian</p>
                        </div>
                        <Link to={'/ChatDashboard'}>
                            <h5 className="chat"><TbBrandWechat />Start Chatting</h5>
                        </Link>                    </div>

                    <div className="chattingCard">
                        <div className="imgDiv"><img src={Korean} /></div>
                        <div className="flagImgDiv">
                            <img className="flagImg" src={KoreanFlag} />
                        </div>
                        <div className="squareText" >
                            <p>Name:<br />
                                Want to learn:english<br />
                                Can teach:italian</p>
                        </div>
                        <Link to={'/ChatDashboard'}>
                            <h5 className="chat"><TbBrandWechat />Start Chatting</h5>
                        </Link>                    </div>

                    <div className="chattingCard">
                        <div className="imgDiv"><img src={chinese} /></div>
                        <div className="flagImgDiv">
                            <img className="flagImg" src={chineseFlag} />
                        </div>
                        <div className="squareText" >
                            <p>Name:<br />
                                Want to learn:english<br />
                                Can teach:italian</p>
                        </div>
                        <Link to={'/ChatDashboard'}>
                            <h5 className="chat"><TbBrandWechat />Start Chatting</h5>
                        </Link>                    </div>


                    <div className="chattingCard">
                        <div className="imgDiv"><img src={french} /></div>
                        <div className="flagImgDiv">
                            <img className="flagImg" src={frenchFlag} />
                        </div>
                        <div className="squareText" >
                            <p>Name:<br />
                                Want to learn:english<br />
                                Can teach:italian</p>
                        </div>
                        <Link to={'/ChatDashboard'}>
                            <h5 className="chat"><TbBrandWechat />Start Chatting</h5>
                        </Link>                    </div>

                    <div className="chattingCard">
                        <div className="imgDiv"><img src={German} /></div>
                        <div className="flagImgDiv">
                            <img className="flagImg" src={GermanFlag} />
                        </div>
                        <div className="squareText" >
                            <p>Name:<br />
                                Want to learn:english<br />
                                Can teach:italian</p>
                        </div>
                        <Link to={'/ChatDashboard'}>
                            <h5 className="chat"><TbBrandWechat />Start Chatting</h5>
                        </Link>                    </div>

                    <div className="chattingCard">
                        <div className="imgDiv"><img src={russianFlag} /></div>
                        <div className="flagImgDiv">
                            <img className="flagImg" src={russian} />
                        </div>
                        <div className="squareText" >
                            <p>Name:<br />
                                Want to learn:english<br />
                                Can teach:italian</p>
                        </div>
                        <Link to={'/ChatDashboard'}> 
                            <h5 className="chat"><TbBrandWechat />Start Chatting</h5>
                        </Link>                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatting;