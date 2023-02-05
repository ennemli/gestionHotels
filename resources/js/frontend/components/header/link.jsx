import { NavLink as NavLink_ } from "react-router-dom";

export function NavLink(props) {
    const className=props.className?props.className:''
  return (
    <NavLink_ {...props} className={({isActive})=>`${className} ${isActive?'activeLink':''}`}>{props.children}</NavLink_>
    )
}
