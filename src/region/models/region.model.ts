import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { CustomerAdress } from "../../customer_address/models/customer_address.model";

interface RegionAttr {
    name: string;
}

@Table({tableName: 'region'})
export class Region extends Model<Region, RegionAttr> {
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
    
    @HasMany(() => Venue)
    venue: Venue;

    @HasMany(() => CustomerAdress)
    custmerAdress: CustomerAdress;
    

}
