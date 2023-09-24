import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/playground", label: "Playground" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a
                  href={navLink.path}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  data-cy={navLink.label}
                  end
                >
                  {navLink.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
