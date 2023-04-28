import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import User from "./user.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 8 })
  cep: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @ManyToOne(() => User, (user) => user.address, { cascade: true })
  user: User;
}

export default Address;
