import { Link } from "react-router-dom";
import BlockItemComponent from "./BlockItemComponent";
import BlockItemInfo from "./BlockItemInfo";
import "./BlockList.scss";

function BlockItem({title, summary, slug, category, children}) {
  return (
	<Link to={`${category}/${slug}`} className="BlockItem">
		<BlockItemComponent children={children} />
		<BlockItemInfo title={title} summary={summary} category={category} />
	</Link>
  );
}

export default BlockItem;
