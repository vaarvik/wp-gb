import Button from "../Button/Button";
import "./BlockList.scss";

function BlockItemInfo({title, summary, category}) {
  return (
	<div className="BlockItemInfo">
		<div className="BlockItemInfo__header">
			<h2>{title}</h2>
			<p>{summary}</p>
		</div>
		<div className="BlockItemInfo__footer">
			<p className="BlockItemInfo__category">{category}</p>
			<Button type="div">Read more</Button>
		</div>
	</div>
  )
}

export default BlockItemInfo;
