const Card = ( {specie}: any ) => {

    return (
        <div className="card">
            <img src={require('../../../assets/img/' + specie.name.toLocaleLowerCase() + '.jpg')} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{specie.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Classification: </b>
                    {specie.classification}
                </li>
                <li className="list-group-item">
                    <b>Designation: </b>
                    {specie.designation}
                </li>
                <li className="list-group-item">
                    <b>Language: </b>
                    {specie.language}
                </li>
            </ul>
        </div>
    );
}

export default Card;