import PageHeader from "./components/PageHeader/PageHeader";

function App() {
  return (
    <div className="App">
      <main className="site-content">
        <PageHeader
          title="Wordpress Gutenberg"
          preamble="Create WordPress editor blocks using Gutenberg components! This site provides snippets, images and information about all tools available when developing rich WP blocks."
        >
          <p>This site is an open source project. Please join the community and add functionalities, components or requests <a href="https://github.com/vaarvik/wp-gb" target="_blank" rel="noreferrer">here</a>.</p>
        </PageHeader>
        <div className="block-content wrapper wide" id="block-content">

        </div>
      </main>
    </div>
  );
}

export default App;
