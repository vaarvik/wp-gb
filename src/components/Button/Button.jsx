import { Link } from "react-router-dom";
import "./Button.scss";

function Button({type, variation, children, href = null}) {
	let CustomTag = type === "div" ? "div" : (type === "link" ? Link : "button");

	return (
		<CustomTag {...{ to: type === "link" && href ? href : "" }} className={`Button ${variation}`}>
			{ children }
		</CustomTag>
	)
}

export default Button;
