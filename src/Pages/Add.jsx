import React, {useDebugValue, useState} from "react";
import { supabase } from "../Client";


const Add = () => {
    const [place, setPlace] = useState({Name:"", Location: "", Description:""})

    const handleChange= (event) =>{
        const {name, value} = event.target;
        setPlace((prev)=>{
            return{
                ...prev,[name]:value
            }
        })
    }

    const createLocation = async(event) =>{
        event.preventDefault();

        await supabase
            .from("FinalProject")
            .insert({
                Name: place.Name,
                Location: place.Location,
                Description : place.Description,
                City : place.City
            })
            .select();

            window.location = "/see";
    }
    return(
        <div className="Add">
            <h1>Promote Tourism in your Area.</h1>
            <form>
                <label htmlFor="Name">Name of the Place</label>
                <br/>
                <input type= "text" className="input-box" id="Name" name="Name" value={place.Name} onChange={handleChange}/>
                <br/>
                <br/>

                <label htmlFor="Location">Location of the Place</label>
                <br/>
                <input type="text" className="input-box" id="Location" name="Location" value={place.Location} onChange={handleChange}/>
                <br/>
                <br/>

                <label>City Name</label>
                <br/>
                <input type="text" id="City" name="City" value={place.City} onChange={handleChange}/>
                <br/>
                <br/>

                <label htmlFor="description">Description</label>
                <br />
                <textarea type = "text" width = "500" height = "500" id="Description" name = "Description" value={place.Description} onChange={handleChange}></textarea>
                <br />

                <input className = "submit"  type="submit" value="Submit" onClick={createLocation}/>

            </form>
        </div>
    )
}

export default Add;