import { Link } from 'react-router-dom';

const PhotographyItem = ({ photography }) => {
    return (
        <div className="photography">
            <div className="image-wrap">
                <img src={photography.imageUrl} alt="" />
            </div>
            <h2>Name</h2>
            <p>{photography.name}</p>
            <div className='divider'></div>
            <h2>Destination</h2>
            <p>{photography.destination}</p>
            <div className='divider'></div>
            <div className='btngrp'>
            <div>
            <h2>Subject</h2>
            <p>{photography.subject}</p>
            </div>

                <Link to={`/allPhotographs/${photography._id}`} className="details-btn">
                    Details
                </Link>
            </div>

        </div>

    );
};

export default PhotographyItem;
