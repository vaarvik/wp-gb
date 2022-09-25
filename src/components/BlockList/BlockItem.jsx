import BlockItemInfo from "./BlockItemInfo";
import "./BlockList.scss";

function BlockItem({title, summary, slug, category, children}) {
  return (
	<div className="BlockItem">
		<div className="BlockItem__component">
			{children}
		</div>
		<BlockItemInfo title={title} summary={summary} category={category} />
	</div>
  );
}

export default BlockItem;
