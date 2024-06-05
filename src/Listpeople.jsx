import { Link } from 'react-router-dom';
import DataShow from './Datashow';
import data from './data.json';

const ListPeople = ({ type }) => {
    let displaydata = [];

    if (type === "all") {
        displaydata = data;
    } else {
        displaydata = data.filter((p) => p.type === type);
    }

    const getPath = (type, id) => {
        switch (type) {
            case "Full stack":
                return `fullstack/${id}`;
            case "Data Science":
                return `datascience/${id}`;
            case "cyber":
                return `cybersecurity/${id}`;
            case "carrer":
                return `carr/${id}`;
            default:
                return `${type.toLowerCase().replace(/\s+/g, '')}/${id}`;
        }
    };

    return (
        <>
            <div className="container">
                {displaydata.map((p) => {
                    return (
                        <Link
                            to={`/${getPath(type, p.id)}`}
                            key={p.id}
                        >
                            <DataShow {...p} key={p.id}/>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default ListPeople;
