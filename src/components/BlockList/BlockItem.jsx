import BlockItemComponent from "./BlockItemComponent";
import BlockItemInfo from "./BlockItemInfo";
import "./BlockList.scss";

function BlockItem({component, category, children}) {
  return (
	<div className="BlockItem">
		<BlockItemComponent children={children} />
		<BlockItemInfo category={category} component={component}  />
	</div>
  );
}

export default BlockItem;
