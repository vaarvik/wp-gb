import components from "../gutenberg/components";
import BlockItem from "./BlockItem";

function BlockList() {
  return (
    <div className="BlockList" id="BlockList">
      <ul className="grid cols-3">
        {
          components.map(component => (
            <li className="grid__item">
              <BlockItem
                component={component}
                category="components"
              >
              { component.render() }
            </BlockItem>
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default BlockList;
