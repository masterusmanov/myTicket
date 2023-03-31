import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";


interface DiscountCouponAttr {
    name: string;
}
@Table({tableName: 'discount_coupon'})
export class DiscountCoupon extends Model<DiscountCoupon, DiscountCouponAttr>{
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

    @HasMany(()=>Booking)
    booking: Booking; 
}
