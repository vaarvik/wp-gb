import BlockItem from "./BlockItem";

function BlockList({components}) {
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
