import { Link } from 'react-router-dom';

const LatestPhotographs = ({
    photography
}) => {
    return (
        <div className="photography">
            <div className="image-wrap">
                <img src={photography.imageUrl} alt="" />
            </div>
            <h3>{photography.name}</h3>
            <div className="data-buttons">
                <Link to={`/allPhotographs/${photography._id}`} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default LatestPhotographs;
