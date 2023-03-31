import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { Seat } from "../../seat/models/seat.model";
import { Status } from "../../status/models/status.model";
import { TicketType } from "../../ticket_type/models/ticket_type.model";
import { Cart } from "../../cart/models/cart.model";


interface TicketAttr {
    price: number;
    serviceFee: number;
}

@Table({tableName: 'ticket'})
export class Ticket extends Model<Ticket, TicketAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Event)
    @Column({
        type:DataType.INTEGER,
    })
    eventId: number;

    @ForeignKey(()=> Seat)
    @Column({
        type:DataType.INTEGER,
    })
    seatId: number;

    @Column({
        type:DataType.DECIMAL,
    })
    price: number;

    @Column({
        type:DataType.DECIMAL,
    })
    serviceFee: number;

    @ForeignKey(()=> Status)
    @Column({
        type:DataType.INTEGER,
    })
    statusId: number;

    @ForeignKey(()=> TicketType)
    @Column({
        type:DataType.INTEGER,
    })
    ticketTypeId: number;

    @HasMany(() => Cart)
    cart: Cart;
    
    @BelongsTo(()=> Event)
    event: Event;

    @BelongsTo(()=> Seat)
    seat: Seat;

    @BelongsTo(()=> Status)
    status: Status;

    @BelongsTo(()=> TicketType)
    ticketType: TicketType;

}
