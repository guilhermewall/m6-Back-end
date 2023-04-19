import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";
import { ICar } from "../../interfaces/cars.interface";
import { Repository } from "typeorm";
import { carReturnSchema } from "../../schema/car.schemas";

const createdCarService = async (dataBody: ICar) => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const createCar: Car = carRepository.create(dataBody);

  await carRepository.save(createCar);

  const car = carReturnSchema.parse(createCar);

  return car;
};

export default createdCarService;
