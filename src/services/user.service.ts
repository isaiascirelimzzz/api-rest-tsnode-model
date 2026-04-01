import { userRepository } from "../repository/user.repository.js";
import type { AddUserDTO, UpdateUserDTO, UserResponseDTO } from "../dtos/user.dto.js";

export class UserService{
    async getAll():Promise<UserResponseDTO[]>{
        return await userRepository.findAll();
    }

    async getById(id:number):Promise<UserResponseDTO>{
        const user = await userRepository.findById(id);

        if(!user){
            throw new Error(`Usuário não encontrado`);
        }

        return user;
    }

    async add(user: AddUserDTO){
        const created = await userRepository.add(user);

        if(!created){
            throw new Error(`Usuário não adicionado`)
        }

        return {
            id: created,
            message: "Usuário criado com êxito"
        }
    }

    async update(user: UpdateUserDTO ,id:number){
        const updated = await userRepository.update(user, id);

        if(!updated){
            throw new Error(`Usuário não encontrado`);
        }

        return {message: `Usuário atualizado`};
    }

    async delete(id:number){
        const deleted = await userRepository.delete(id);
        
        if(!deleted){
            throw new Error(`Usuário não encontrado`);
        }

        return{message: `Usuário deletado`}
    }
}