import React from "react";
import "./index.css"
import bots from "../../projet-abgraphix/images/canard001.jpg"
const App=()=>{

  return(
    <div class="m-10 justify-center flex">
      <img src={bots} alt="bots" class="w-72 px-2"/>
      <p class='text-blue-700'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolor, fugit atque, nisi quos sed facere mollitia eum impedit facilis fugiat tempora repellendus at placeat nam. Eius ducimus magni tempora? </p>
    </div>
  )
}

export default App
