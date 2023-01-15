import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from '../components/navbar';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <NavBar/>
       { /*<Image src="../assets/movie-front.jpg" sizes="25vw" fill alt="main background" className=""/> */} 
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
