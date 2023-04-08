import { useContext } from 'react';
import PhotographyItem from './PhotographyItem/PhotographyItem';
import { PhotographyContext } from '../../contexts/PhotographyContext';

const AllPhotographs = () => {
    const { photographs } = useContext(PhotographyContext);

    return (
        <section className="allPhotographs">
            <h1>All Photographs</h1>
            <div className='photographsContainer'>
            {photographs.length > 0
                ? photographs.map(x => <PhotographyItem key={x._id} photography={x} />)
                : <h3 className="no-articles">No photographs yet</h3>
            }
            </div>
        </section>
    );
};

export default AllPhotographs;