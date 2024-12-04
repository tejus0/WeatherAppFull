import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";


function Inputs({ setQuery, setUnits,setError  }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchCitySuggestions = async (query) => {
    if (!query || query.trim() === "") {
      setSuggestions([]);
      return;
    }
    console.log(query,"city")

    const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
    const options = {
      method: 'GET',
      params: {
        namePrefix: city, // City name prefix for suggestions
        // limit: 5,         // Optional: Limits the number of results
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
      }
    };
    
    try {
      const response = await fetch(`${url}?namePrefix=${query}&limit=10`, options);

      // const response = await fetch(`${url}`, options);
      const result = await response.json(); // Parse as JSON
      console.log(result, "suggestions");
      if (result.data?.length>0) {
        setSuggestions(result.data || []); // Ensure data is present
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]); // Handle errors gracefully
    }

    // try {
    //   const response = await axios.get(
    //     `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
    //     {
    //       params: {
    //         namePrefix: query,
    //       },
    //       headers: {
    //         "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    //         "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    //       },
    //     }
    //   );

    //   setSuggestions(response.data.data || []);
    // } catch (error) {
    //   console.error("Error fetching city suggestions:", error.message);
    // }
  };

  const handleInputChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCity(value);
    console.log(city,"input xity")

    if (value.trim().length > 1) {
      await fetchCitySuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion,"suggestion in handle")
    setCity(suggestion.city);
    setSuggestions([]);
    setQuery({ q: suggestion.city });
  };


  const handleSearchClick = () => {

    if (!city || city.trim() === "" ) {
      setError("City name cannot be empty.");
      toast.error("City name cannot be empty.");
      return;
    }
  setError(null);
  setQuery({ q: city });
  setSuggestions([])
    // console.log("search" ,searchItem );
  };

  const handleLocationClick = () => {
    // setisLocated(true);
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        // toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });

      });
    }
  };

  return (
    /* <div className="flex flex-row justify-center mx-7 my-6">
       <div className=" flex flex-row w-3/4 items-center justify-center rounded-md mx-6 space-x-4">
        <input
          value={city}
          // onChange={(e) => setCity(e.currentTarget.value)}
          onChange={handleInputChange}
          type="text"
          placeholder="Search for city...."
          className="placeholder:italic capitalize placeholder:lowercase w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none" //text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div> 

{/* <div className="flex flex-row items-center justify-center rounded-md w-full space-x-4">
    <input
      value={city}
      onChange={handleInputChange}
      type="text"
      placeholder="Search for city...."
      className="placeholder:italic capitalize placeholder:lowercase w-3/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none"
    />
    <UilSearch
      size={25}
      className="text-white cursor-pointer transition ease-out hover:scale-125"
      onClick={handleSearchClick}
    />
    <UilLocationPoint
      size={25}
      className="text-white cursor-pointer transition ease-out hover:scale-125"
      onClick={handleLocationClick}
    />
  </div>

  {suggestions.length > 0 && (
    <div className="absolute top-full left-0 bg-white rounded-md shadow-md w-3/4 mt-2 max-h-40 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          onClick={() => handleSuggestionClick(suggestion.name)}
          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
        >
          {suggestion.name}, {suggestion.country}
        </div>
      ))}
    </div>
  )}

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={()=> setUnits("metric")}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={()=> setUnits("imperial")}
        >
          °F
        </button>
      </div>

    </div> */

    <div className="flex flex-col items-center mx-7 my-6">
    <div className="flex w-3/4 items-center justify-center rounded-md mx-6 space-x-4 relative">
      <input
        value={ city}
        onChange={handleInputChange}
        type="text"
        placeholder="Search for city..."
        className="w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none"
      />
      <UilSearch
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleSearchClick}
      />
      <UilLocationPoint
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleLocationClick}
      />
    </div>

    {/* Suggestions Box */}
    {suggestions.length > 0 && (
      <div className="absolute top-14 bg-white rounded-md shadow-md max-w-1/4 max-h-40 overflow-y-auto z-10">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            {suggestion.name}, {suggestion.country}
          </div>
        ))}
      </div>
    )}

    {/* Unit Selection */}
    <div className="flex flex-row w-3/4 items-center justify-center mt-4">
      <button
        name="metric"
        className="text-xl text-white font-light transition ease-out hover:scale-125"
        onClick={() => setUnits("metric")}
      >
        °C
      </button>
      <p className="text-xl text-white mx-1">|</p>
      <button
        name="imperial"
        className="text-xl text-white font-light transition ease-out hover:scale-125"
        onClick={() => setUnits("imperial")}
      >
        °F
      </button>
    </div>
  </div>

  );
}

export default Inputs;
