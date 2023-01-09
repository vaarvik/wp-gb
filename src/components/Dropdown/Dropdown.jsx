import "./Dropdown.scss";

function Dropdown({options = [{title: "None", value: 0}], onOptionSelect}) {
    const onSelect = (option) => onOptionSelect(option.target.value);

    return (
        <div className="Dropdown">
            <select className="Dropdown__select" onChange={ onSelect }>
                { options.map((option, index) => <option className="Dropdown__option" key={index} value={option.value} disabled={option.isDisabled ?? false}>{option.title}</option>) }
            </select>
        </div>

    )
}

export default Dropdown;
