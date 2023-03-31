import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";

interface CustomerCardAttr {
    name: string;
    phoneNumber: string;
    number: string;
    year: string;
    month: string;
    is_active: boolean;
    is_main: boolean;
}
@Table({tableName: 'customer_card'})
export class CustomerCard extends Model<CustomerCard, CustomerCardAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;


    @ForeignKey(()=> Customer)
    @Column({
        type:DataType.INTEGER,
    })
    customer_id: number

    @Column({
        type:DataType.STRING,
    })
    name: string;

    @Column({
        type:DataType.STRING,
    })
    phoneNumber: string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    number: string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    year: string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    month: string;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: true
    })
    isActive: boolean;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: true
    })
    isMain: boolean;

    @BelongsTo(()=> Customer)
    customer: Customer;
}
