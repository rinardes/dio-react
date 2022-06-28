import React from 'react'
import useODBM from '../../useODBM'
import { useState } from 'react'
import './Header.css'

function Header() {
    const {getMovie} = useODBM();
    const [movieToSearch, setMovieToSearch] = useState();

    const submitSearch = () => {
        if(!movieToSearch) return;
        return getMovie(movieToSearch);
    }

  return (
    <header>
        <input type="text" placeholder='Insira o nome do filme/serie' name="" onChange={(e)=> setMovieToSearch(e.target.value)}/>
        <button type="submit" onClick={submitSearch}>Buscar</button>
    </header>
  )
}

export default Header