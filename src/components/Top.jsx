import {Link} from "react-router-dom";
import background from "../../media/colombia.jpg";

const Top = () => {

    return(
        <div>
            <h1><Link to="/">Discovering Colombia</Link></h1>
            <img src="../../media/colombia.jpg" style={{ width: "100rem", height: "50rem" }}/>
        </div>
    )
}

export default Top;