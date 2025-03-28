import { Darkmode } from './Darkmode';
import Logo from './Logo';
import Search from './Search';
import DropdownListMenu from './DropdownListMenu';

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Search />
        {/* Theme / Profile */}
        <div className="flex gap-5">
          <Darkmode />
          <DropdownListMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
