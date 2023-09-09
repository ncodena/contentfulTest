// import {Routes, Route, NavLink, Link} from 'react-router-dom';
import {client} from "../client"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom"


const Header = () => {
    const [headerContent, setHeaderContent] = useState([]);
    

    const cleanUpData = (rawData) => {
        const cleanData = rawData.map((data) => {
            const {sys, fields} = data;
            const {id} = sys;
            const dataTitle = fields.title;
            const dataDescription = fields.description.content[0].content[0].value;
            const dataImg = fields.img.fields.file.url;
            const dataList = fields.list.content[0].content[0].value;
            const updatedData = {id, dataTitle, dataDescription, dataImg, dataList};
            
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

    
    
    return(
        <>
    
            {(Object.keys(headerContent).length) > 0 ?
                headerContent.map((article) =>{
                    return (
                        <Link key={article.id} to={`article/${article.id}`}>
                        <div key={article.id} className="article-container">
                          <h2>{article.dataTitle}</h2>
                          <img src={article.dataImg} className="article-image" alt={article.dataTitle} />
                          
                        </div>
                        </Link>
                      )
                    })
                    : null
            }  
        
        </>
    )
}

export default Header;