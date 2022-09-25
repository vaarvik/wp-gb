import { Link } from "react-router-dom";
import BlockItemInfo from "./BlockItemInfo";
import "./BlockList.scss";

function BlockItem({title, summary, slug, category, children}) {
  return (
	<Link to={`${category}/${slug}`} className="BlockItem">
		<div className="BlockItem__component">
			{children}
		</div>
		<BlockItemInfo title={title} summary={summary} category={category} />
	</Link>
  );
}

export default BlockItem;
