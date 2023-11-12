import { useLoaderData, useNavigate } from 'react-router-dom';
import ScrollToTop from '../../../SHARED/ScrollToTop/ScrollToTop';
import Instructions from './Instructions';

const CardDetails = () => {
    const navigate = useNavigate();
    const recipeData = useLoaderData();
    const { id, chef_image, chef_name, chef_id, recipes, ratings } = recipeData;
    const { instructions, recipe_name, cuisine_type, image } = recipes;

    const goBack = () => {
        navigate(-1)
    }

    return (<>
        <ScrollToTop />
        <div className="card bg-base-100 shadow-xl mx-auto mt-24 mb-10">
            <div className="lg:flex">
                <figure><img className='sm:w-2/4 md:w-3/4 lg:w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-primary text-3xl font-bold'>Chef : {chef_name}</h2>
                    <h2 className="card-title">
                        Recipe Name : {recipe_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    {instructions.map((item, id) => <Instructions
                        key={id}
                        data={item}
                    >

                    </Instructions>)}
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline text-secondary font-semibold">{cuisine_type}</div>
                        <div className="badge badge-outline text-secondary font-semibold">{ratings}</div>
                    </div>
                    <button className='btn btn-primary mt-10' onClick={goBack}>Go Back</button>
                </div>
            </div>
        </div> </>
    );
};

export default CardDetails;