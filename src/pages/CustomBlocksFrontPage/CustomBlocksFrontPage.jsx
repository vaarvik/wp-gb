import BlockList from "../../components/BlockList/BlockList";
import Dropdown from "../../components/Dropdown/Dropdown";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useCustomBlocksStore} from "../../store/store"

function CustomBlocksFrontPage() {
	const {components, updateFilter, sortBy} = useCustomBlocksStore(state => state);
	return (
		<div className="FrontPage">
			<PageHeader
				title="Custom React WordPress Blocks"
				preamble="Check out WordPress React blocks created by other developers."
			>
				<p>This site is an open source project. Please join the community and add functionalities, components or requests <a href="https://github.com/vaarvik/wp-gb" target="_blank" rel="noreferrer">here</a>.</p>
			</PageHeader>
			<div className="wrapper">
				<div className="grid cols-2">
					<div className="grid__item">
						<SearchBar onInputChange={updateFilter}/>
					</div>
					<div className="grid__item">
						<Dropdown options={
							[
								{
									title: "Sort by",
									value: "",
									isDisabled: true
								},
								{
									title: "Name",
									value: "title"
								},
							]
						} onOptionSelect={sortBy} />
					</div>
				</div>
			</div>
			<section className="wrapper very-wide" id="block-content">
				<BlockList components={components} />
			</section>
		</div>
	);
}

export default CustomBlocksFrontPage;
