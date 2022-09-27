import "./Button.scss";

function Button({type, variation, children}) {
	let CustomTag = type === "div" ? "div" : (type === "link" ? "a" : "button");

	return (
		<CustomTag className={`Button ${variation}`}>
			{ children }
		</CustomTag>
	)
}

export default Button;
