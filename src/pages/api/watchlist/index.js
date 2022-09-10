import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { authOptions } from '../auth/[...nextauth].ts'
import { unstable_getServerSession } from "next-auth/next"


// use handler
export default async function handler(req,res){

    const session = await unstable_getServerSession(req, res, authOptions)

    if (req.method ==='GET') {

        const movieWatchlist = await prisma.movieWatchlist.findFirst({
            where: {
                user_id: session.user.id
            }
        })
        const movieWatchlistDisplayData = await Promise.all(
            movieWatchlist.movie_id.map((movie_id) => (
                fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`)
                .then(res => res.json())
                )
            )
        )
        res.status(200).json(movieWatchlistDisplayData)
    
    }
    else if (req.method ==='PATCH') {
        const oldMovieWatchlist = await prisma.movieWatchlist.findFirst({
            where: {
                user_id: session.user.id
            },
            select: {
                movie_id: true,
                id: true,
            }
        })
        if (oldMovieWatchlist) {
            const movieWatchlist  = await prisma.movieWatchlist.upsert({
                where: {
                    id: oldMovieWatchlist.id
                },
                update: {
                    movie_id: [
                        ...oldMovieWatchlist.movie_id, req.query.movie_id
                    ]
                },
                create: {
                    movie_id: [req.query.movie_id],
                    user_id: session.user.id
                },
            }) 
            res.status(200).json(movieWatchlist)
        } else {
            const newMovieWatchlist = await prisma.movieWatchlist.create({
                data: {
                    user_id: session.user.id,
                    movie_id: [
                        req.query.movie_id
                    ]
                },
            })
            res.status(200).json(newMovieWatchlist)
        }
    } 
    else if (req.method ==='DELETE') {
        const movieWatchlist  = await prisma.movieWatchlist.delete({
            where: {
                user_id: session.user.id
            }
        })
        res.status(200).json(movieWatchlist)
    }
    else {
         res.status(405).close()
    }
}