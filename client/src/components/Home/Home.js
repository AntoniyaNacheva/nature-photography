import { useContext } from 'react';
import { PhotographyContext } from '../../contexts/PhotographyContext';
import LatestPhotographs from './LatestPhotographs/LatestPhotographs';

const Home = () => {
    const { photographs } = useContext(PhotographyContext);
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                {/* TODO */}
                <h2>ALL new photographs are</h2>
                <h3>Only in Nature Photography</h3>
            </div>
            <img src="./images/home.jpg" alt="" />
            <div id="home-page">
                <h1>Latest Photographs</h1>

                {photographs.length > 0
                    ? photographs.map(x => <LatestPhotographs key={x._id} photography={x} />)
                    : <p className="no-articles">No photography yet</p>
                }
            </div>
        </section>
    );
};

export default Home;
