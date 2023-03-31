import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";


interface VenuePhotoCreationAttrs{
    name: string;
};

@Table({tableName: 'venuePhoto'})
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER
    })
    venueId: number;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @BelongsTo(() => Venue)
    venue: Venue;
}
