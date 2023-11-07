import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ data }) => {
    const { id, chef_image, chef_name, chef_id, recipes, ratings } = data;
    const {instructions, recipe_name, cuisine_type, image } = recipes
    
    return (
        <div className="card bg-base-100 shadow-xl mb-5">
            <figure><img className='xl:w-3/4 xl:h-72 lg:w-full md:w-3/4 md:h-72 sm:w-full w-3/4 h-72' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {recipe_name}
                    <div className="badge badge-secondary md:hidden lg:flex">NEW</div>
                </h2>
                <p>{instructions[0].length < 50 ? <>{instructions[0]}</> : <>{instructions[0].slice(0, 50)}</>}...<Link className=' text-primary underline font-bold' to={`/recipe/${id}`}>read more</Link></p>
                <p className='text-primary font-bold'>Chef : {chef_name}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline text-secondary font-semibold">{cuisine_type}</div>
                    <div className="badge badge-outline text-secondary font-semibold">{ratings}</div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;