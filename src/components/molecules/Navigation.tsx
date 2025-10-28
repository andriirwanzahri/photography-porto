import { Link, useLocation } from "react-router";
import { cn } from "../../utils/cn";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Booking", path: "/booking" },
];
function Navigation() {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "text-sm font-medium transition-colors hover:text-amber-400 relative",
            "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-amber-400 after:scale-x-0 after:transition-transform",
            "hover:after:scale-x-100",
            location.pathname === item.path &&
              "text-amber-400 after:scale-x-100"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
