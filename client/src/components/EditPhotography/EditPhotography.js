import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as photographyService from '../../services/photographyService';
import { PhotographyContext } from '../../contexts/PhotographyContext';

const EditPhotography = () => {
    const [currentPhotography, setCurrenPhotography] = useState({});
    const { photographyEdit } = useContext(PhotographyContext);
    const { photographyId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        photographyService.getOne(photographyId)
            .then(photographyData => {
                setCurrenPhotography(photographyData);
            });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const photographyData = Object.fromEntries(new FormData(e.target));

        photographyService.edit(photographyId, photographyData)
            .then(result => {
                photographyEdit(photographyId, result);
                navigate(`/allPhotographs/${photographyId}`);
            });
    };

    return (
        <section className='loginContainer'>
            <div className="register-page">
                <form id="edit" onSubmit={onSubmit}>
                    <div className="container">
                        <h1>Edit Photography</h1>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" defaultValue={currentPhotography.name} />
                        <label htmlFor="destination">Destination:</label>
                        <input type="text" id="destination" name="destination" defaultValue={currentPhotography.destination} />
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            defaultValue={currentPhotography.subject}
                        />
                        <label htmlFor="photography-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentPhotography.imageUrl} />
                        <input className="btn submit" type="submit" defaultValue="Edit Photography" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditPhotography;
