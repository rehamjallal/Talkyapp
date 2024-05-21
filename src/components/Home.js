import About from './About';
import Chatting from './Chatting';
import Talking from './Talking';
import Download from './Download';
import HowToFind from './Howtofind';
import HomeContent from './HomeContent';
import Footer from './Footer';

function Home() {
    return (
        <>
            <HomeContent />
            <HowToFind />
            <About />
            <Chatting />
            <Talking />
            <Download />
            <Footer />
        </>
    )
}

export default Home;