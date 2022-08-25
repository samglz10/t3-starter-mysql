import { useSession } from "next-auth/react";
import React from "react";
function Home() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }

  return (
    <main>
      This is the home page
    </main>
  
  );
  
}

export default Home;
