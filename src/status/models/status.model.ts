import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";
import { Cart } from "../../cart/models/cart.model";

interface StatusAttr {
    name: string;
}

@Table({tableName: 'status'})
export class Status extends Model<Status, StatusAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
    })
    name: string;

    @HasMany(() => Ticket)    
    ticket: Ticket

    @HasMany(() => Cart)    
    cart: Cart
}
