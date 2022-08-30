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
        res.status(200).json(movieWatchlist)
    }
    else if (req.method ==='PATCH') {
        const movieWatchlist  = await prisma.movieWatchlist.upsert({
            where: {
                user_id: session.user.id
            },
            update: {
                data:{
                    movies: {
                        push: req.body.movie
                    },
                },
            },
            create: {
                user_id: session.user.id,
                movies: [req.body.movie]
            }
        }) 
        res.status(200).json(movieWatchlist)
    }
    else if (req.method ==='DELETE') {
        const movieWatchlist  = await prisma.movieWatchlist.delete({
            where: {
                user_id: session.user.id
            }
        })
        res.status(200).json(movieWatchlist )
    }
    else {
         res.status(405).close()
    }
}