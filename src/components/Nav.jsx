import {NavLink, Link} from "react-router-dom";


const Nav = () => {
    return (
        <div className="navigation">
            <nav>
                <NavLink className="link" to="/">
                    Cartagena
                </NavLink>
                <NavLink className="link" to="/">
                    Guatapé
                </NavLink>
                <NavLink className="link" to="/">
                    Valle del Cocora
                </NavLink>

            </nav>

        </div>
    )
}
export default Nav;