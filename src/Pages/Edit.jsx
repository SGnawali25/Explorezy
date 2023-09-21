import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../Client";


const Edit = () => {
    const {id} = useParams();
    const [place, setPlace] = useState({id:null, Name:"", Location:"", Description:""});
    // const [places, setPlaces] = useState([]);

    
    useEffect(() => {
        const fetchPlaces = async() => {
        const {data, error} = await supabase
        .from('FinalProject')
        .select()
        .order("created_at",{ascending: true})

        if (error) {
            console.error('Error fetching data:', error);
          } else {
            // Update the state with the retrieved data
            const result = data.filter(item => String(item.id) === id)[0];
            setPlace({Name:result.Name, Location: result.Location, Description: result.Description});
          } 
        
    }

        fetchPlaces()
    }, []);






    const handleChange = (event) => {
        const {name, value} = event.target;
        setPlace((prev) => {
            return{
                ...prev,[name]:value,
            }
        })
    }

    const updateLocation = async(event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('FinalProject')
            .update({Name:place.Name, Location: place.Location, Description: place.Description})
            .eq('id',id)

            if (error){
                console.log(error);
            }

            window.location = "/see";
    }

    const deleteLocation = async(event) => {
        event.preventDefault();
        const { error } = await supabase   
            .from('FinalProject')
            .delete()
            .eq('id', id)

        if (error){
            console.log(error);
        }

        window.location = "/see"
    }


    return(
        <div className="edit">
            <form className="editForm">
                <label>Name</label>
                <br/>
                <input type= "text" id = "Name" name = "Name" value = {place.Name} onChange = {handleChange}/>
                <br/>
                

                <label>Location</label>
                <br/>
                <input type="text" id="Location" name="Location" value={place.Location} onChange = {handleChange}/>
                <br/>

                

                <label>Description</label>
                <br/>
                <textarea type = "text" width = "500" height = "500" id="Description" name = "Description" value={place.Description} onChange={handleChange}></textarea>
                <br/>

                <input className="submit" type="submit" value="Submit" onClick = {updateLocation}/>
                <br/>
                <button className="deleteButton" onClick={deleteLocation}>Delete</button>

            </form>
        </div>
    )
}

export default Edit;