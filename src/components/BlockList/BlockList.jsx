import getSlug from "../../functions/getSlug";
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
                title={component.title}
                summary={component.summary}
                slug={getSlug(component.title)}
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
