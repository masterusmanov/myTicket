import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasMany } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { CustomerAdress } from "../../customer_address/models/customer_address.model";

interface DistrictCreationAttrs{
    name: string;
};

@Table({tableName: 'district'})
export class District extends Model<District, DistrictCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @HasMany(() => Event)
    event: Event

    @HasMany(() => CustomerAdress)
    customerAddress: CustomerAdress;
}
