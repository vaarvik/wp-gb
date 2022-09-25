import './PageHeader.scss';

function PageHeader({title, preamble, children}) {
  return (
    <header className="PageHeader wrapper">
		<h1>{title}</h1>
		<p className="PageHeader__preamble">{preamble}</p>
		{children}
    </header>
  );
}

export default PageHeader;
