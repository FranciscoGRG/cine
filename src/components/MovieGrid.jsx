/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../css/MovieGrid.css'
import MovieCard from './MovieCard';
import Carrousel from './Carrousel';



function MovieGrid() {

  return (

    <>
      <h1 className='title'>En cartelera</h1>
      <div className='mt-10 mb-20'>
        <Carrousel></Carrousel>
      </div>
    </>
  );
}

export default MovieGrid;