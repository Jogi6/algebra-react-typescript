import { ISpecie } from "../../helpers/interfaces/ISpecie";
import {Link} from "react-router-dom"

const Navbar = (props:any) => {
    const {species, specieName} = props

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand">IMG + USERNAME</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {species.map((specie: ISpecie, index: any) => {
                            const currentSpecieName = specie.name.toLocaleLowerCase();

                            const className = specieName === currentSpecieName ? 'nav-link active' : 'nav-link';

                            return (
                                <li className="nav-item" key={index}>
                                    <Link to={`/specie/${currentSpecieName}`} className={className}>
                                        {specie.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container">
        //         <a className="navbar-brand">IMB + USERNAME</a>
        //         <div className="collaps navbar-collapse">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 {
        //                     species.map((specie: ISpecie, index: any)=>{
        //                         const currentSpecieName = specie.name.toLocaleLowerCase();
        //                         const className = specieName === currentSpecieName ? "nav-link active" : "nav-link"
        //                         return <li className="nav-item" key={index}>
        //                             <Link className={className} to={`/specie/${specie.name.toLocaleLowerCase()}`}>
        //                                 {specie.name}
        //                                 console.log(specie.name)
        //                             </Link>
        //                         </li>
        //                     })
        //                 }
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
} 

export default Navbar;