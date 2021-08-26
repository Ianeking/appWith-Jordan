import React from 'react';

const beers=[
    {
        name: 'Panic Ipa'
    },
    {
        name: 'Pale ale'
    }
]

function BeerList() {
  return (
   <ul>
    {beers.map((beer)=>(<li>{beer.name}</li>))}
   </ul>
  );
}

export default BeerList;
