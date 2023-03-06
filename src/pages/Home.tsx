import Loader from "../components/Loader";
import Spicies from "../components/Spicies";
import { ISpecie } from "../helpers/interfaces/ISpecie";

type props = {
    isLoad: boolean;
    species: Array<ISpecie>
}

const Home = ({isLoad, species}:props) => {
    if (!isLoad) {
        return <Loader />
    }
    return <Spicies species={species} />;
    
}

export default Home;