import Layout from "../../../hoc/Layout";

const Table = (props: any) => {
    const {vehicles} = props;
    console.log(vehicles);
    return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>cost in credits</th>
                </tr>
            </thead>
            <tbody>
                {
                    vehicles.map((vehicle: any, index: any) => (
                        <tr key={index}>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.manufacturer}</td>
                            <td>{vehicle.cost_in_credits}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
    )
}

export default Layout(Table);