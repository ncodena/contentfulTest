import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className="navigation">
            <nav>
                <NavLink className="link" to="/cartagena">
                    Cartagena
                </NavLink>
                <NavLink className="link" to="/guatapé">
                    Guatapé
                </NavLink>
                <NavLink className="link" to="/valle-del-cocora">
                    Valle del Cocora
                </NavLink>
            </nav>

            
           
        </div>

    )
}
export default Nav;