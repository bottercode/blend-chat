import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <a href="#intro" className="home">BLEND-CHAT.</a>
        
     <div class="frame">
	
	<header class="frame-header">
		<div class="image">
			<img class="album-artwork" src="https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWF0ZWQlMjBzdGFycyUyMGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
		</div>
		<div class="info">
			<div class="title">About</div>
			<div class="subtitle">Blend-Chat</div>
		</div>
	</header>
	
	<div class="frame-lyrics">
		<div>Welcome to Blend Chat</div>
		<div class="active">Login in with your spotify account</div>
		<div>To find people with great music taste as yours.</div>
		<div></div>
		<div></div>
		<div>Login</div>
		<div title="Login">
      <img className="spotify-icon" src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/spotify-fill-128.png" alt=""></img>
    </div>
		<div></div>
	</div>
	
	<div class="frame-bg">
		<img class="bg-color album-artwork" src="https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWF0ZWQlMjBzdGFycyUyMGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
		<img class="bg-black album-artwork" src="https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWF0ZWQlMjBzdGFycyUyMGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
	</div>	

</div>


    </div>
  )
}

export default Navbar