import Button from "../Button/Button";
import "./BlockList.scss";

function BlockItemInfo({component, category}) {
  return (
	<div className="BlockItemInfo">
		<div className="BlockItemInfo__header">
			<h2>{component.title}</h2>
			<p>{component.summary}</p>
		</div>
		<div className="BlockItemInfo__footer">
			<p className="BlockItemInfo__category">{category}</p>
			<Button type="link" href={`/${category}/${component.slug}`}>Read more</Button>
		</div>
	</div>
  )
}

export default BlockItemInfo;
