import { useLoaderData } from 'react-router-dom';
import ChefIdDetails from '../ChefIdDetails/ChefIdDetails';

const ChefId = () => {
    const chefRecipe = useLoaderData()
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 mt-28 mb-10">
            {
                chefRecipe.map(item => <ChefIdDetails
                    key={item.id}
                    data={item}
                ></ChefIdDetails>)
            }
        </div>
    );
};

export default ChefId;