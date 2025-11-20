import React from 'react'

export default function cateoriesNavabr({cateories}) {
  return (
    <div>
      {
        cateories.map( cat=>(
            <button>{cat} </button>
        ))
      }
    </div>
  )
}
