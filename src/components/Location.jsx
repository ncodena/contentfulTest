import {NavLink} from "react-router-dom";
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react";

const Location = () => {
    const [article, setArticle] = useState([]);
     const { id } = useParams();

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
        setArticle(cleanData);
    }

    const getData = async () => {
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
        getData()
    }, [])


    return (
        <>
        
        <div></div>
                   
                
        
        </>  
    )
}

export default Location;