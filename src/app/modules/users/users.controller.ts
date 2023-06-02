import { Request, Response } from "express";
import { createUserDB, getUsersDB } from "./users.service";
import { TUser } from "./users.interface";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, id, password, role } = req.body
        const result: TUser | null = await createUserDB({ name, id, password, role })
        res.status(200).json({ status: true, data: result })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
export const getUser = async (req: Request, res: Response) => {
    try {

        const result = await getUsersDB()
        res.status(200).json({ status: true, data: result })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}