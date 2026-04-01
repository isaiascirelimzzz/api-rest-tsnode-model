import type { Request, Response} from "express";
import { UserService } from "../services/user.service.js";
import type { AddUserDTO, UpdateUserDTO,UserResponseDTO } from "../dtos/user.dto.js";

const service = new UserService();

export const add = async (req: Request, res: Response) => {
    const user: AddUserDTO = req.body;

    const result = await service.add(user);

    res.status(201).json(result);
}

export const getAll = async (req: Request, res: Response) => {
    const result: UserResponseDTO[] = await service.getAll();

    res.status(200).json(result);
}

export const getById = async (req: Request, res: Response) => {
    const result: UserResponseDTO = await service.getById(Number(req.params.id))

    res.status(200).json(result);
}

export const update = async (req: Request, res: Response) => {
    const data: UpdateUserDTO = req.body;

    const result = await service.update(data, Number(req.params.id));

    res.status(200).json(result);
}

export const remove = async (req: Request, res: Response) => {
  const id:number = Number(req.params.id);

  const result = await service.delete(id);

  res.status(200).json(result);
};