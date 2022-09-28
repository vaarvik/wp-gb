import BlockItem from "./BlockItem";
import useGutenbergStore from "../../store/store"

function BlockList() {
  const components = useGutenbergStore(state => state.components);
  return (
    <div className="BlockList" id="BlockList">
      <ul className="grid cols-3">
        {
          components.map((component, index) => (
            <li className="grid__item" key={index}>
              <BlockItem
                component={component}
                category="components"
              >
              <component.render/>
            </BlockItem>
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default BlockList;
