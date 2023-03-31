import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { CustomerAdress } from "../../customer_address/models/customer_address.model";


interface CountryCreationAttrs{
    name: string;
};

@Table({tableName: 'country'})
export class Country extends Model<Country, CountryCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @HasMany(() => CustomerAdress)
    customerAdress: CustomerAdress 
}