const updatePlace=(place)=>{
    return {
        type:"UPDATE_PLACE",
        payload: place,
    }
}
const updatePlaceData=(place)=>{
    return(dispatch)=>{
           fetch(
      `https://api.weatherapi.com/v1/current.json?key=c3466e82919f495f862161527210708&q=${place}`
      )

    .then((res)=>res.json())
    .then((data)=>{
        dispatch({
            type : "UPDATE_PLACE_DATA",
            payload: data,
        })
    })
}
}

const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    }
}


export { updatePlace,updatePlaceData, toggleTheme};