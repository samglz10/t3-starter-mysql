import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// use handler
export default async function handler(req,res){
    if (req.method ==='GET') {
        const movieWatchlist = await prisma.movieWatchlist.findUnique({
            where: {
                id: req.query.id
            }
        })
        res.status(200).json(movieWatchlist)
    } else if (req.method ==='DELETE') {
        const deletedUser = await prisma.movieWatchlist.delete({
            where: {
                id: req.body.id
            }
        })
        res.status(200).json(deletedUser)
    }
    else {
         res.status(405).close()
    }
}