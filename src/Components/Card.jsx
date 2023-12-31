import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { supabase } from "../Client";

const Card = (props) => {
    const [like, setLike] = useState(props.Like);
    const [dislike, setDislike] = useState(props.Dislike);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(() =>{
        setName(props.name);
        setLocation(props.location);
        setDescription(props.description);
        setLike(props.Like)
        setDislike(props.Dislike)
        setImage(props.image)
    },[props])
    
    
    

    const updateLike = () => {
        LikeUpdate();
        setLike(like + 1);
        
    }

    const updateDislike = () => {
        DislikeUpdate();
        setDislike(dislike + 1);
        
    }

    const LikeUpdate = async() => {
        const { error } = await supabase
            .from('FinalProject')
            .update({Like:like+1})
            .eq('id',props.id)

            if (error){
                console.log(error);
            }

    }

    const DislikeUpdate = async() => {
        const { error } = await supabase
            .from('FinalProject')
            .update({Dislike:dislike+1})
            .eq('id',props.id)

            if (error){
                console.log(error);
            }

    }
    return(
        <div className="card">
            <Link to = {'edit/' + props.id}><button>Edit</button></Link>
            <h3 className="name">Name of the Place : {name}</h3>
            <h3 className="location">Location : {location}</h3>
            <h3 className="Description">Description : {description}</h3>
            <h3 className="location">Image : <img src={image} alt="test" /></h3>
            <h2 onClick={updateLike} className="like">👍:{like}</h2>
            <h2 onClick={updateDislike} className="dislike">👎: {dislike}</h2>
        </div>
    )
}

export default Card;