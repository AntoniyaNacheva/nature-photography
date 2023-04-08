import { useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import * as photographyService from '../../services/photographyService';
import { PhotographyContext } from '../../contexts/PhotographyContext';
import * as commentService from '../../services/commentService';

const PhotographyDetails = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const { addComment, fetchPhotographyDetails, selectPhotography, photographyRemove } = useContext(PhotographyContext);
    const { photographyId } = useParams();

    const currentPhotography = selectPhotography(photographyId);
    const isOwner = currentPhotography._ownerId === user._id;

    useEffect(() => {
        (async () => {
            const photographyDetails = await photographyService.getOne(photographyId);
            const photographyComments = await commentService.getByPhotographyId(photographyId);

            fetchPhotographyDetails(photographyId, { ...photographyDetails, comments: photographyComments.map(x => `${x.user.email}: ${x.text}`) });
        })();
    }, []);

    const addCommentHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const comment = formData.get('comment');

        commentService.create(photographyId, comment)
            .then(result => {
                addComment(photographyId, comment);
            });
    };

    const photographyDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this photography?');
        if (confirmation) {
            photographyService.remove(photographyId)
                .then(() => {
                    photographyRemove(photographyId);
                    navigate('/allPhotographs');
                });
        }
    };

    return (
        <section id="photography-details">
            <div className="info-section">
                <div className="photography-header">
                    <h1>Photography Details</h1>
                    <div>
                        <img className="photography-img imageWidth" src={currentPhotography.imageUrl} alt="" />
                        </div>
            <h2>Name</h2>
            <p>{currentPhotography.name}</p>
            <div className='divider'></div>
            <h2>Destination</h2>
            <p>{currentPhotography.destination}</p>
            <div className='divider'></div>
            <div className='btngrp'>
            <div>
            <h2>Subject</h2>
            <p>{currentPhotography.subject}</p>
            </div>

                    {isOwner &&
                        <div className="buttons">
                            <Link to={`/photographs/${photographyId}/edit`} className="button">
                                Edit
                            </Link>
                            <button onClick={photographyDeleteHandler} className="button">
                                Delete
                            </button>
                        </div>
                    }
            </div>
                </div>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {currentPhotography.comments?.map(x =>
                            <li key={x} className="comment">
                                <p>{x}</p>
                            </li>
                        )}
                    </ul>

                    {!currentPhotography.comments &&
                        <p className="no-comment">No comments.</p>
                    }
                    
                    <article className="create-comment">
                        <form className="form" onSubmit={addCommentHandler}>

                            <textarea
                                name="comment"
                                placeholder="Comment..."
                            />

                            <input
                                className="btn submit"
                                type="submit"
                                value="Add Comment"
                                aria-label='comment'
                            />
                        </form>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default PhotographyDetails;
