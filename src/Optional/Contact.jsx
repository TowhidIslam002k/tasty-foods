import ScrollToTop from '../SHARED/ScrollToTop/ScrollToTop';

const Contact = () => {
    return (
        <>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-100 mt-16">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="mb-4">
                        <img
                            src="https://avatars.githubusercontent.com/u/115937153?v=4"
                            alt="Contact Us"
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div>
                        <p className="text-xl mb-4">
                            If you have any questions or need assistance, please don't
                            hesitate to contact us using the form below.
                        </p>

                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-2 rounded border"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 rounded border"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-lg font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full p-2 rounded border"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;