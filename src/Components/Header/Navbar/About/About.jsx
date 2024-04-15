
// dynamic Title
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useContext, useEffect } from "react";

const About = () => {

    // Update Dynamic title Setup
    const { updateTitle } = useContext(AuthContext);

    useEffect(() => {
        updateTitle('About | Estate');
    }, [updateTitle]);

    return (
        <div data-aos="zoom-in" data-aos-duration="1500" >

            <section className="bg-neutral-600 text-white">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Real Estate Website Features and Characteristics</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center font-medium ">The User Interface menualy work Assistent</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl p-1 ">User-Friendly Interface</h3>
                            <hr />
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-start  text-white">
                                        <h4 className="text-lg font-medium leading-6 text-yellow-200 ">Intuitive and easy-to-navigate design</h4>
                                        <p className="mt-2"> 1. Search and filter options for properties based on location, price, size, and amenities</p>
                                        <p className="mt-2">2. nteractive maps for property locations with detailed information and images.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-white text-start">
                                        <h4 className="text-lg font-medium leading-6 text-yellow-200 ">Advanced Search and Filter Options</h4>
                                        <p className="mt-2"> 1. Advanced search functionality with multiple criteria such as property type, number of bedrooms/bathrooms, and price range.</p>
                                        <p className="mt-2">2. Customizable filters to narrow down property listings based on user preferences.</p>
                                        <p className="mt-2">3. Saved search option to notify users of new listings that match their criteria.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-white text-start">
                                        <h4 className="text-lg font-medium leading-6 text-yellow-200 ">Responsive Design</h4>
                                        <p className="mt-2"> 1. Mobile-friendly layout ensuring seamless browsing experience on smartphones and tablets.</p>
                                        <p className="mt-2">2. Optimized performance with fast loading times and smooth navigation across devices.</p>
                                        <p className="mt-2">3. Adaptive design to automatically adjust to different screen sizes and resolutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl p-1 ">Property Listings and Details</h3>
                                <hr />
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4 text-white text-start">
                                            <h4 className="text-lg font-medium leading-6 text-yellow-200 ">Responsive Design</h4>
                                            <p className="mt-2"> 1. Comprehensive property listings with high-quality images, detailed descriptions, and virtual tours.</p>
                                            <p className="mt-2">2. Information on property amenities, neighborhood features, and nearby attractions.</p>
                                            <p className="mt-2">3. Contact forms and inquiry options for users to request more information or schedule viewings.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4 text-white text-start">
                                            <h4 className="text-lg font-medium leading-6 text-yellow-200 ">User Accounts and Personalization</h4>
                                            <p className="mt-2"> 1. Secure user registration and login functionality with profile management options.</p>
                                            <p className="mt-2">2. Personalized user dashboards to save favorite listings, view search history, and manage property alerts.</p>
                                            <p className="mt-2">3. Notifications and updates on saved searches, new listings, and price changes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="m-4 md:m-8 rounded-md dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-4 mx-auto my-6 space-y-1 text-center">
                    <span className="text-xs font-semibold tracking-wider uppercase dark:text-violet-600">shortcut to your dream ui</span>
                    <h2 className="pb-3 text-3xl font-bold md:text-4xl">Create a stylish website in minutes</h2>
                    <p>Get a jumpstart to creating your new webpage! With our fully responsive and carefully styled components you can get the structure of your website done with just a couple of clicks.</p>
                </div>
                <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col px-8 py-6">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Components</h2>
                        <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Individual components that can be re-used multiple times in your designs.</p>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/components">
                            <span>Learn More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Sections</h2>
                        <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Pre-made building blocks that you can stack on top of each other like Legos to build a website of your own in minutes.</p>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/sections">
                            <span>Learn More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col px-8 py-6">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Templates</h2>
                        <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Full pages that showcase pieces of what you can achieve with the building blocks that are in this UI kit.</p>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/templates">
                            <span>Learn More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col px-8 py-6">
                        <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Customization</h2>
                        <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Choose your primary color from any of the Tailwind CSS 2.0 colors. You can also view all of the components in our light and dark themes.</p>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/docs">
                            <span>Learn More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;