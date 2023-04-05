import { useContext } from 'react';
import PhotographyItem from './PhotographyItem/PhotographyItem';
import { PhotographyContext } from '../../contexts/PhotographyContext';

const AllPhotographs = () => {
    const { photographs } = useContext(PhotographyContext);

    return (
        <section id="allPhotographs-page">
            <h1>All Photographs</h1>

            {photographs.length > 0
                ? photographs.map(x => <PhotographyItem key={x._id} photography={x} />)
                : <h3 className="no-articles">No photographs yet</h3>
            }
        </section>
    );
};

export default AllPhotographs;
