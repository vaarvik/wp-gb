import useGutenbergStore from "../../store/store";
import "./Dropdown.scss";

function Dropdown({options = [{title: "None", value: 0}]}) {
    const sortComponentsBy = useGutenbergStore(state => state.sortBy);
    const onSelect = (option) => sortComponentsBy(option.target.value);

    return (
        <div className="Dropdown">
            <select className="Dropdown__select" onChange={ onSelect }>
                { options.map((option, index) => <option className="Dropdown__option" key={index} value={option.value} disabled={option.isDisabled ?? false}>{option.title}</option>) }
            </select>
        </div>
        
    )
}

export default Dropdown;