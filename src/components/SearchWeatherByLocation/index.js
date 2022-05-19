export const SearchWeatherByLocation =({city}) => {
 const handleSubmit=async(event)=>{
     try{ 
       event.preventDefault()
       const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},ES&appid=${process.env.REACT_APP_API_KEY}`
    );
    
}catch(error){
    console.error(error);
}}
  

  };