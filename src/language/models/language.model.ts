import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { Customer } from "../../customer/models/customer.model";


interface LanguageAttr {
    name: string;
}
@Table({tableName: 'language', createdAt: false, updatedAt: false})
export class Language extends Model<Language, LanguageAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    name: string;

    @HasMany(()=>Event)
    event: Event; 

    @HasMany(()=>Customer)
    customer: Customer; 
}
