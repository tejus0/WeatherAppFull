import React from "react";

function TopButtons({ setQuery, setTopButton }) {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Gurgaon",
    },
    {
      id: 4,
      title: "Bangalore",
    },
    {
      id: 5,
      title: "Pune",
    },
  ];

  const handleButtonCLick= (city)=>{
    setQuery({ q: city.title })
    setTopButton(city.title)
    // setCity(city.title)
  }

  return (
    
    <div className="flex items-center justify-around pt-10">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white bg-blue-700 dark:hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  "
          // onClick={()=>setQuery({ q: city.title })}
          onClick={()=>handleButtonCLick(city)}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
