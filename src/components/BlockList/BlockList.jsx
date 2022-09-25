import { Button } from "@wordpress/components";
import BlockItem from "./BlockItem";

function BlockList() {
  return (
    <div className="BlockList" id="BlockList">
      <ul className="grid cols-3">
        <li className="grid__item">
          <BlockItem
            title="Button"
            summary="A simple button"
            slug="button"
            category="components"
          >
		        <Button variant="primary">Heisann</Button>
          </BlockItem>
        </li>
        <li className="grid__item">
          <BlockItem
            title="Button"
            summary="A simple button"
            slug="button"
            category="components"
          >
		        <Button variant="primary">Heisann</Button>
          </BlockItem>
        </li>
        <li className="grid__item">
          <BlockItem
            title="Button"
            summary="A simple button"
            slug="button"
            category="components"
          >
		        <Button variant="primary">Heisann</Button>
          </BlockItem>
        </li>
      </ul>
    </div>
  );
}

export default BlockList;
