import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";
import { Customer } from "../../customer/models/customer.model";
import { Status } from "../../status/models/status.model";
import { Booking } from "../../booking/models/booking.model";

@Table({tableName: 'cart'})
export class Cart extends Model<Cart>{

    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Ticket)
    @Column({
        type:DataType.INTEGER,
    })
    ticketId: number;

    @ForeignKey(() => Customer)
    @Column({
        type:DataType.INTEGER,
    })
    customerId: number;

    @ForeignKey(() => Status)
    @Column({
        type:DataType.INTEGER,
    })
    statusId: number;

    @HasMany(()=>Booking)
    booking: Booking;

    @BelongsTo(()=>Ticket)
    ticket: Ticket;

    @BelongsTo(()=>Customer)
    customer: Customer;

    @BelongsTo(()=>Status)
    status: Status;
}

