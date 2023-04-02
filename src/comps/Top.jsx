import React from 'react'

export default function Top() {
  return (
    <>
      <div className="top">
        <div className="td1">
        <img className="logo"  src="https://api.logo.com/api/v2/images?logo=logo_81415377-5e87-44e2-a153-125ebfa2691c&format=webp&margins=0&quality=60&width=500&background=transparent&u=1678639884" alt="logo"></img>

        <ul>
        <li>Home</li>
        <li>Recipe</li>
        <li>About</li>
        <li>Contact</li>
        <li><button className="demo">Get Demo</button></li>
        </ul>  
        </div>
        <div className="td2">
        <p className="p1">The <span>Easiest</span> Way to Make Your Favorite <span>Meal.</span></p>
        <p className="p2">
        Want to learn  how to cook but confused where to start?No need to worry again.
        </p>
        <button className="free">Join For Free</button>
        </div>
        <div className="td3">

        </div>
      </div>
    </>
  )
}
