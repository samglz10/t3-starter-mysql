import { signIn } from "next-auth/react"

const Login = () => {
	return (
		
		<main>
			<div className="bg-black h-screen text-white flex flex-col text-center" >
				<h1 className="text-3xl">Log in</h1>
				<image className="flex justify-center border-r-orange-300" src="../assets/login.jpg"/>
					<div  id ="button-wrapper"className=" flex-col">
						<button onClick={() => signIn('google')} className="bg-red-500 w-fit px-4 py-2 rounded-md mx-2.5">
							Sign in with Google
						</button>
						<button onClick={() => signIn('discord')} className="bg-purple-600 w-fit px-4 py-2 rounded-md mx-2.5">
							Sign in with Discord
						</button>
					</div>
			</div>
		</main>
	)
}

export default Login;