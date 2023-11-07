import ScrollToTop from '../SHARED/ScrollToTop/ScrollToTop';

const About = () => {
    return (
        <>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="mb-4">
                        <img
                            src="https://avatars.githubusercontent.com/u/115937153?v=4"
                            alt="About Us"
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div>
                        <p className="text-xl mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                            purus ligula. Proin condimentum augue id tortor euismod, ac
                            malesuada erat tristique. Sed vehicula, tortor ac tincidunt
                            pulvinar.
                        </p>
                        <p className="text-xl">
                            Aenean aliquam massa sed efficitur ultricies. Fusce euismod odio
                            euismod, finibus metus quis, feugiat tellus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;