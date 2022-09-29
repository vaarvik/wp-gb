import { Button } from "@wordpress/components";
import { useLoaderData } from "react-router-dom";
import BlockItemComponent from "../BlockList/BlockItemComponent";
import PageHeader from "../PageHeader/PageHeader";

function SingleComponentPage() {
  const { category } = useLoaderData();
  const title = "Fetch title from slug";
  const preamble = "Fetch preamble from slug";
  const info = "Fetch info from slug";
  return (
	<>
		<PageHeader
			title={title}
			preamble={preamble}
		/>

		<div className="wrapper">
			<BlockItemComponent>
				<Button variant="primary">Click me</Button>
			</BlockItemComponent>
		</div>

		<section className="wrapper">
			<br/>
			<code>Code goes here...</code>
			<p>{info}</p>
			<p>{category}</p>
		</section>
	</>
  )
}

export default SingleComponentPage;
