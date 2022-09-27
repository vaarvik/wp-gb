import BlockItemInfo from "./BlockItemInfo";
import "./BlockList.scss";

function BlockItem({component, category, children}) {
  return (
	<div className="BlockItem">
		<div className="BlockItem__component">
			{children}
		</div>
		<BlockItemInfo category={category} component={component}  />
	</div>
  );
}

export default BlockItem;
