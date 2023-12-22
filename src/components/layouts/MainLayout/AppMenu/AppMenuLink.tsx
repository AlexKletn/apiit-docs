import {Link} from "react-router-dom";
import type {FC, PropsWithChildren} from "react";
import type {AppMenuLinkProps} from "./types.ts";

const AppMenuLink:FC<PropsWithChildren<AppMenuLinkProps>> = ({ to, children }) => {
  return (
    <Link
      to={to}
      onClick={event => event.stopPropagation()}
    >
      {children}
    </Link>
  )
}

export default AppMenuLink;
