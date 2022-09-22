import TableRow from "./TableRow";

const tableContent = [
    { name: "phone", price: 100, id: 1 },
    { name: "computer", price: 250, id: 2 },
    { name: "car", price: 1000, id: 3 }
]

function HeaderComponent() {


    return <table className="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            {tableContent.map(elem => { return <TableRow key={elem.id} elem={elem} /> })}
        </tbody>
    </table>
}

export default HeaderComponent;