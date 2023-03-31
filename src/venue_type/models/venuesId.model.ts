import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueType } from "./venue_type.model";

@Table({tableName: 'venuesId', createdAt: false, updatedAt: false})
export class VenuesId extends Model<VenuesId>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Venue)
    @Column({type: DataType.INTEGER})
    venueId: number;

    @ForeignKey(() => VenueType)
    @Column({type: DataType.INTEGER})
    venueTypeId: number;
}