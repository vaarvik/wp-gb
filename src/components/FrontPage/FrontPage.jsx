import BlockList from "../BlockList/BlockList";
import PageHeader from "../PageHeader/PageHeader";

function FrontPage() {
  return (
    <div className="FrontPage">
      <PageHeader
        title="Wordpress Gutenberg"
        preamble="Create WordPress editor blocks using Gutenberg components! This site provides snippets, images and information about all tools available when developing rich WP blocks."
      >
        <p>This site is an open source project. Please join the community and add functionalities, components or requests <a href="https://github.com/vaarvik/wp-gb" target="_blank" rel="noreferrer">here</a>.</p>
      </PageHeader>
      <section className="wrapper very-wide" id="block-content">
        <BlockList />
      </section>
    </div>
  );
}

export default FrontPage;
