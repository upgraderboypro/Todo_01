const Header = ({ title }) => {
  return <header className="card">
  <h1>{title}</h1>
  <button id="theme-switcher">
    <i className="fa-solid fa-sun"></i>
  </button>
</header>;
};
Header.defaultProps = {
  title: "Title",
};
export default Header;
