// link (Next.js)
import Link from "next/link";

// react hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "My projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
