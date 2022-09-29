import { useLoaderData } from "react-router-dom";
import BlockItemComponent from "../BlockList/BlockItemComponent";
import PageHeader from "../PageHeader/PageHeader";

function SingleComponentPage() {
  const component = useLoaderData();
  const info = "<TODO> Add info on components in export jsx";
  return (
	<>
		<PageHeader
			title={component.title}
			preamble={component.summary}
		/>

		<div className="wrapper">
			<BlockItemComponent>
				<component.render/>
			</BlockItemComponent>
		</div>

		<section className="wrapper">
			<br/>
			<code>{"<TODO> Show code on components"}</code>
			<p>{info}</p>
			{/* <p>{category}</p> */}
		</section>
	</>
  )
}

export default SingleComponentPage;
