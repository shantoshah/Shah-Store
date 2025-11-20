import React, { useEffect, useState } from 'react'

export default function moviecallectio() {
    const [ movie,setMovies]= useState([]);
    const[ loading, setlodaing] = useState(true);

    useState(()=>{
        fetch('/package.json')
        .then (res => res.json())
        .then ( datav => setMovies (data))
    },[])
    const categories = [ "All",... new Set(movies.map(m=m.categories))]
  return (
    <div>
      <categoriesNavabr
      categories={categories}
      ></categoriesNavabr> 
    </div>
  )


}
