import { Link } from 'react-router-dom';

const PhotographyItem = ({ photography }) => {
    return (
        <div className="allPhotographs">
            <div className="allPhotographs-info">
                <img src={photography.imageUrl} alt="" />
                <h6>{photography.name}</h6>
                <h2>{photography.destination}</h2>
                <h2>{photography.subject}</h2>

                <Link to={`/allPhotographs/${photography._id}`} className="details-button">
                    Details
                </Link>

                {/* <Link style={{ marginLeft: '150px' }} to={`/photographs/${photography._id}/edit`} className="details-button">
                    Edit
                </Link> */}
            </div>

        </div>
    );
};

export default PhotographyItem;
