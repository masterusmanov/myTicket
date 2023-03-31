import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { PaymentMethod } from "../../payment_method/models/payment_method.model";
import { DeliveryMethod } from "../../delivery_method/models/delivery_method.model";
import { DiscountCoupon } from "../../discount_coupon/models/discount_coupon.model";
import { Status } from "../../status/models/status.model";


@Table({tableName: 'booking'})
export class Booking extends Model<Booking>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Cart)
    @Column({type: DataType.INTEGER})
    cartId: number;

    @ForeignKey(() => PaymentMethod)
    @Column({type: DataType.INTEGER})
    paymentmethodId: number;

    @ForeignKey(() => DeliveryMethod)
    @Column({type: DataType.INTEGER})
    deliveryId: number;

    @ForeignKey(() => DiscountCoupon)
    @Column({type: DataType.INTEGER})
    discountcouponId: number;

    @ForeignKey(() => Status)
    @Column({type: DataType.INTEGER})
    statusId: number;

    @BelongsTo(() => Cart)
    cart: Cart;

    @BelongsTo(() => PaymentMethod)
    paymentmethod: PaymentMethod;

    @BelongsTo(() => DeliveryMethod)
    deliverymethod: DeliveryMethod;

    @BelongsTo(() => DiscountCoupon)
    discountcoupn: DiscountCoupon;

    @BelongsTo(() => Status)
    status: Status;
}
