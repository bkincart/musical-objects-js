// import { createNewMusical, createNewCharacter } from './createNewMusical.js'
// import React from 'react'
// class MyComponent extends React.Component {
// }

// import React, { Component } from 'react'
// class MyComponent extends Component {}

import createNewMusical from './createNewMusical.js'
import createNewSong from './createNewSong.js'
// your code here

let phantom = createNewMusical(
  'The Phantom of the Opera',
  'Andrew Lloyd Webber',
  7
)
let hamilton = createNewMusical('Hamilton', 'Lin Manuel Miranda', 11)
// console.log(phantom)
// console.log(hamilton)

let allIAsk = createNewSong('All I Ask of You', ['Raoul', 'Christine'], '4:11')
let masquerade = createNewSong(
  'Masquerade',
  ['Andre', 'Firmin', 'Company'],
  '5:32'
)
// console.log(allIAsk)
// console.log(masquerade)

phantom.addSong(allIAsk)
phantom.addSong(masquerade)
hamilton.addSong(masquerade)

console.log('phantom')
console.log(phantom)
console.log('hamilton')
console.log(hamilton)
console.log('phantom songs')
console.log(phantom.songs)
