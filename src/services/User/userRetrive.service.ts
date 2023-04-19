import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const retriveUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      addresses: true,
      cars: true,
    },
  });

  return user;
};
