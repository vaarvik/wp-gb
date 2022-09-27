import { Button } from "@wordpress/components";
import components from "../gutenberg/components";
import BlockItem from "./BlockItem";

function BlockList() {
  console.log(components)
  return (
    <div className="BlockList" id="BlockList">
      <ul className="grid cols-3">
        {
          components.map(component => (
            <li className="grid__item">
            <BlockItem
              title="Button"
              summary="A simple button"
              slug="button"
              category="components"
            >
              { component() }
            </BlockItem>
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default BlockList;
