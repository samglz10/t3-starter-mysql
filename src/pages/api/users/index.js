import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req,res){
    if (req.method ==='GET') {
        const user = await prisma.user.findUnique({
            where: {
                id: req.query.id
            }
        })
        res.status(200).json(user)
    } else if (req.method ==='DELETE') {
        const deletedUser = await prisma.user.delete({
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