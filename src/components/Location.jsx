import {client} from "../client";
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react";

const Location = () => {
    const [article, setArticle] = useState({});
    const {id} = useParams();
    

    const getData = async () => {
        try{
            const response= await client.getEntry(id);
            console.log(id);
            const responseData = response.fields;
            console.log(responseData);
            setArticle(responseData);
            
            
            
        } catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData()
    }, [id])


    return (
        <>
        <div className="location-container">
            {(Object.keys(article).length) > 0 ?        
            <div key={id}>
                <h2>{article.title}</h2>
                <img src={article.img.fields.file.url} className="item-image" alt={article.title} />
                <p>{article.description.content[0].content[0].value}</p>
                {article.list.content.map((item, index) => {
                    return(
                        <p key={index}>{item.content[0].value}</p>
                    )
                 }

                )} 

            </div>
                : null}
        </div>        
        </>                
    )
}

export default Location;