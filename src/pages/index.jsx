import { useSession } from "next-auth/react";
import React from "react";


function Home() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
    <main className="max-w-full max-h-screen">
      <div className="flex flex-col text-center items-center place-content-center justify-center max-w-full max-h-screen">
        <h1> Welcome to My Movie Page </h1>
        <p>Check out the latest movies and save them to your Movie Lists!</p>
        <p>Signed in as {session.user.email}</p>
      </div>
    </main>
    )
  }

  return (
    <main>
      This is the home page
    </main>
  );
}

export default Home;
