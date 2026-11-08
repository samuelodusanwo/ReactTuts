import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, handleChange, handleDelete }) => {

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map(item => (
                        <li className="item" key={item.id}>
                            <input 
                                id={item.id}
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleChange(item.id)}
                            />
                            <label
                                htmlFor={item.id}
                                style={(item.checked) ? {textDecoration: "line-through"} : null}
                                onDoubleClick={() => handleChange(item.id)}
                            >
                                {item.item}
                            </label>
                            <FaTrashAlt 
                                onClick={() => handleDelete(item.id)}
                                role="button" 
                                abIndex="0" 
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ margin: "5rem" }}> Your Item is empty!!! </p>
            )}
        </main> 
    )
}

export default Content;