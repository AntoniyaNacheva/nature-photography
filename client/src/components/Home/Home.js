import { useContext } from 'react';
import { PhotographyContext } from '../../contexts/PhotographyContext';
import LatestPhotographs from './LatestPhotographs/LatestPhotographs';

const Home = () => {
    const { photographs } = useContext(PhotographyContext);
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h3> Nature Photographer Of The Year 2023</h3>
                <h2>For the eighth time in a row,
                    we’d like to welcome you to join the Nature Photographer
                    of the Year competition, powered by Nature Talks Photo Festival
                    in the Netherlands. We kindly invite all professional and
                    non-professional photographers, of all ages, from all over the world,
                    to join our contest again this year. Send in your best pictures
                    from this year, last year or years back. We believe that we can
                    show the beauty of nature worldwide by sharing the most amazing
                    images you all make. If we learn to love nature, we’ll also protect her.
                </h2>
            </div>
            <img src=".images/home_1.jpg" alt="" />
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
