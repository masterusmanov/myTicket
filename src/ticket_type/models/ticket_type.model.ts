import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";

interface TicketTypeAttr {
    name: string;
    color: string;
}

@Table({tableName: 'ticket_type', createdAt: false, updatedAt: false})
export class TicketType extends Model<TicketType, TicketTypeAttr>{
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

    @Column({
        type:DataType.STRING,
    })
    color: string;
}
