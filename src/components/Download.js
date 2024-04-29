import { Button, Container } from "react-bootstrap";
import { TbBrandApple } from "react-icons/tb";
import google from '../images/google-play.svg'
import download from '../images/download.png'
function Download() {
    return (<>

        <div className="download">
            <Container>
                <div className="downloadText">
                    <div className="downloadButtons">
                        <h4>Talky is available on Android and iOS</h4>
                        <Button type="Button"><p>download on the<br /> <TbBrandApple style={{ fontSize: '1.5rem' }} />App Store</p></Button>
                        <Button type="Button"><p>Get it on <br /><img src={google} />   Google Play </p></Button>
                    </div>
                    <div className="downloadImg"><img src={download} /></div>
                </div>
            </Container>
        </div>
    </>);
}

export default Download;