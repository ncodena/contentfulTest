import {Routes, Route, NavLink, Link} from 'react-router-dom';
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
                headerContent.map(() =>(
                <div key={headerContent.id}> 
                <h1>{headerContent.dataTitle}</h1>
                <img src={headerContent.dataImg} style={{width: "600px", height: "300px"}} />
                {console.log(headerContent.dataImg)}
                <p>{headerContent.dataDescription}</p>
                </div>
                ))
                : null
                }   
        
        </>
    )
}

export default Header;