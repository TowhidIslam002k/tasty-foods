import Slider from 'react-slick';
// Import Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
    };

    const [chefCategory, setChefCategory] = useState([]);
    useEffect(() => {
        fetch('https://chef-server-2.vercel.app/chefId')
            .then(res => res.json())
            .then(data => setChefCategory(data))
    }, [])

    return (
        <div className='my-5'>
            <Slider {...settings}>
                {chefCategory && chefCategory.map((item, id) => {
                    return (
                        <div key={id} className="p-5 bg-base-200 text-center md:text-left">
                            <div className="md:flex justify-between items-center">
                                <div>
                                    <h1 className="md:text-5xl text-3xl font-bold">{item.name}</h1>
                                    <p className="py-6">{item.quality}</p>
                                    <Link to={`/chef/${item.chef_id}`}>
                                        <button className="btn btn-primary">All recipes of this chef</button>
                                    </Link>
                                </div>
                                <div className="mt-7 md:mt-0">
                                    <img src={item.image} className="mx-auto rounded-lg shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Carousel;
