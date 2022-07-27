import React from 'react'
import NewMovies from './contentComponents/NewMovies'
import KeepWatching from './contentComponents/KeepWatching'
import YouMayLike from './contentComponents/YouMayLike'

function Content() {
  return (
    <div>
        <NewMovies />
        <KeepWatching />
        <YouMayLike />
    </div>
  )
}

export default Content