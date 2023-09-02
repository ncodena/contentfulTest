// import {Routes, Route, NavLink, Link} from 'react-router-dom';
import {client} from "../client"
import {useState, useEffect} from "react";

const Header = () => {
    const [headerContent, setHeaderContent] = useState([]);
    

    const cleanUpData = (rawData) => {
        const cleanData = rawData.map((data) => {
            const {sys, fields} = data;
            const {id} = sys;
            const dataTitle = fields.title;
            const dataDescription = fields.description.content[0].content[0].value;
            const dataImg = fields.img.fields.file.url;
            const updatedData = {id, dataTitle, dataDescription, dataImg};
            return updatedData;
        })
        setHeaderContent(cleanData);
    }

    const getHeaderContent = async () => {
        try{
            const response= await client.getEntries({ content_type: 'travelBlog' });
            console.log(response);
            const responseData = response.items;
            cleanUpData(responseData);
            
        } catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        getHeaderContent()
    }, [])

    console.log(headerContent);
    
    return(
        <>
            {(Object.keys(headerContent).length) > 0 ?
                headerContent.map((article) =>{
                    return (
                        <div key={article.id} className="article-container">
                          <h1>{article.dataTitle}</h1>
                          <img src={article.dataImg} className="article-image" alt={article.dataTitle} />
                          {/* <p>{article.dataDescription}</p> */}
                        </div>
                      )
                    })
                    : null
            }  
        
        </>
    )
}

export default Header;