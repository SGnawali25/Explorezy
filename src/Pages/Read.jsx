import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

const Read = (props) => {

    const [places, setPlaces] = useState([]);
    const originalPlaces = props.data;

    useEffect(() =>{
        setPlaces(props.data);
    },[props])

    const searchLocation = (searchValue) => {
        if (searchValue !== ""){
            const filteredLocation = originalPlaces.filter(place => place.City === searchValue);
            if (filteredLocation.length > 0){
                setPlaces(filteredLocation)
            } else{
                setPlaces([])
            }
        } else {
            setPlaces(originalPlaces)
        }

    }
    
    const sortByLikes = () => {
        const sortedPlaces = places.sort((a,b) => b.Like - a.Like);
        setPlaces([...sortedPlaces]);
    }

    const sortByAlphabetically = () =>{
        const sortedPlaces = places.sort((a,b) => a.Name.localeCompare(b.Name));
        setPlaces([...sortedPlaces]);
    }

    const sortByDefault = () => {
        setPlaces(originalPlaces);
    }

    
    


    

    return(
        <div className="Read">
            <br/>
            <br/>
            
            <input
                className='citySearch'
                type = "text"
                placeholder='City you are in                          🔍'
                onChange={(e) => searchLocation(e.target.value)}
            />
            <br/>
            <br/>
            <h4>Sort By:</h4>
            <button onClick={sortByDefault}>Default</button>
            <button onClick={sortByLikes}>Most Like</button>
            <button onClick={sortByAlphabetically}>Alphabetically</button>
            
            
            {
                places && places.length > 0 ?
                places.map((place) =>
                    <Card id = {place.id} name = {place.Name} location = {place.Location} description = {place.Description} Like = {place.Like} Dislike = {place.Dislike}/>
                ):<h2>{'No locations added Yet😞'}</h2>
            }
        </div>
    )
}

export default Read;