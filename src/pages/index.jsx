import { useSession } from "next-auth/react";
import React from "react";
import HomePage from "./movies/homepage";


function Home() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
    <main className="max-w-full max-h-screen">
     <HomePage/>
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
