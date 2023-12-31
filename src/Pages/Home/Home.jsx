import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import BookCategories from "./BookCategory/BookCategories";
import MobileApp from "./MobileApp";
import HowWork from "./HowWork";


const Home = () => {

    const Categories = useLoaderData()

    return (
        <div>
            <div className="mt-16">
                <Banner></Banner>
            </div>
            <div className="mt-20">
                <BookCategories Categories={ Categories}></BookCategories>
            </div>
            <div className="mt-20">
                <MobileApp></MobileApp>
            </div>
            <div>
                <HowWork></HowWork>
            </div>
        </div>
    );
};

export default Home;