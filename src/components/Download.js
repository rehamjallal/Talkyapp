import { Button, Container, Row, Col } from "react-bootstrap";
import { TbBrandApple } from "react-icons/tb";
import google from '../images/google-play.svg';
import download from '../images/download.png';

function Download() {
    return (
        <div className="download">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="downloadButtons">
                        <h4>Talky is available on Android and iOS</h4>
                        <Button type="Button" className="mb-3">
                            <p>Download on the<br /><TbBrandApple style={{ fontSize: '1.5rem' }} /> App Store</p>
                        </Button>
                        <Button type="Button">
                            <p>Get it on<br /><img src={google} alt="Google Play" /> Google Play</p>
                        </Button>
                    </Col>
                    <Col md={6} className="downloadImg">
                        <img src={download} alt="Download" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Download;
