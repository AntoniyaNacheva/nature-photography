import { useContext } from 'react';

import { PhotographyContext } from '../../contexts/PhotographyContext';
import * as photographyService from '../../services/photographyService';

const CreatePhotography = () => {
    const { photographyAdd } = useContext(PhotographyContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const photographyData = Object.fromEntries(new FormData(e.target));

        photographyService.create(photographyData)
            .then(result => {
                photographyAdd(result);
            });
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Photography</h1>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter photography name..."
                    />
                    <label htmlFor="destination">Destination:</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        placeholder="Enter photography destination..."
                    />
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter photography subject..."
                    />

                    <label htmlFor="subject-img">Image:</label>

                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Photography"
                    />
                </div>
            </form>
        </section>
    );
};

export default CreatePhotography;