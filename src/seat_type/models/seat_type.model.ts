import { BelongsToMany, Column, DataType, Model, HasMany, Table } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";

interface SeatTypeCreationAttrs{
    name: string;
};

@Table({tableName: 'seatType'})
export class SeatType extends Model<SeatType, SeatTypeCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @HasMany(() => Seat)
    seat: Seat;
}
