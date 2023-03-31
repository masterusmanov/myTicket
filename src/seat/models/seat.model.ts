import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { SeatType } from "../../seat_type/models/seat_type.model";
import { Ticket } from "../../ticket/models/ticket.model";


interface SeatCreationAttrs{
    sector: string;
    rowNumber: number;
    number: number;
    locationInSchema: string;
};

@Table({tableName: 'seat'})
export class Seat extends Model<Seat, SeatCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    sector: string;

    @Column({
        type: DataType.INTEGER,
    })
    rowNumber: number;

    @Column({
        type: DataType.INTEGER,
    })
    number: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER
    })
    venueId: number;

    @ForeignKey(() => SeatType)
    @Column({
        type: DataType.INTEGER
    })
    seatTypeId: number;

    @HasMany(() => Ticket)
    ticket: Ticket;

    @BelongsTo(() => Venue)
    venue: Venue;

    @BelongsTo(() => SeatType)
    seatType: SeatType;
}
