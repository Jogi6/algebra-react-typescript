import { ISpecie } from "../../helpers/interfaces/ISpecie";
import {Link} from "react-router-dom"
import Card from "./Card";
import Navbar from "../Navbar";

const Spicies = ({species}:any) => {
    return (
        // <Navbar species={species}/>

        <div className="container mt-5">
            <div className="row">
                {
                    species.map((specie: ISpecie, index: any)=>(
                        <div className="col-4" key={index}>
                            <Link to={`specie/${specie.name.toLocaleLowerCase()}`}>
                                <Card specie={specie} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Spicies;