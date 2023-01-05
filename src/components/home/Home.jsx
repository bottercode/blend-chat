import React from 'react'
import Login from '../login/Login'
import Navbar from '../navbar/Navbar'
import "./home.scss"

const Home = () => {
  return (
    <div>
		<Navbar />
        <div className="frame">
	
	<header className="frame-header">
		<div className="image">
			<img className="album-artwork" src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
		</div>
		<div className="info">
			<div className="title">About</div>
			<div className="subtitle">Blend-Chat</div>
		</div>
	</header>
	
	<div className="frame-lyrics">
		<div>Welcome to Blend Chat</div>
		<div className="active">Login in with your spotify account</div>
		<div>To find people with great music taste as yours.</div>
		<Login />
		
	</div>
	
	<div className="frame-bg">
		<img className="bg-color album-artwork" src="https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWF0ZWQlMjBzdGFycyUyMGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
		<img className="bg-black album-artwork" src="https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWF0ZWQlMjBzdGFycyUyMGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
	</div>	

</div>

    </div>
  )
}

export default Home