import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Language } from "../../language/models/language.model";
import { Cart } from "../../cart/models/cart.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { CustomerCard } from "../../customer_card/entities/customer_card.entity";


interface CustomerAttr {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    hashedPassword: string;
    email: string;
    birthday: Date;
    gender: string;
    hashedRefreshToken: string;
}

@Table({tableName: 'customer'})
export class Customer extends Model<Customer, CustomerAttr>{

    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
    })
    firstName: string;

    @Column({
        type:DataType.STRING,
    })
    lastName: string;

    @Column({
        type:DataType.STRING,
    })
    hashedPassword: string;

    @Column({
        type:DataType.STRING,
    })
    hashedRefreshToken: string;

    @Column({
        type:DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string;

    @Column({
        type:DataType.STRING,
    })
    phoneNumber: string;

    @Column({
        type:DataType.STRING,
    })
    gender: string;

    @Column({
        type:DataType.DATE,
    })
    birthday: Date;

    @ForeignKey(()=> Language)
    @Column({
        type:DataType.INTEGER,
    })
    lang_id: number;

    @HasMany(()=>CustomerCard)
    customerCard: CustomerCard;

    @HasMany(()=>Cart)
    cart: Cart;

    @HasMany(()=>CustomerAddress)
    customerAddress: CustomerAddress;
}

