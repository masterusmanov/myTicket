import { Column, DataType, ForeignKey, Model, Table, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { VenueType } from "../../venue_type/models/venue_type.model";
import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";
import { HasMany } from "sequelize";
import { VenuesId } from "../../venue_type/models/venuesId.model";
import { VenuePhoto } from "../../venue_photo/models/venue_photo.model";


interface VenueCreationAttrs{
    name: string;
    address: string;
    location: string;
    site: string;
    phoneNumber: string;
    schema: string;
};

@Table({tableName: 'venue'})
export class Venue extends Model<Venue, VenueCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    site: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    phoneNumber: string;

    @ForeignKey(() => VenueType)
    @Column({
        type: DataType.INTEGER,
    })
    venuTypeId: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    schema: string;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
    })
    regionId: number;

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
    })
    districtId: number;

    @HasMany(() => Region)
    region: Region;

    @HasMany(() => District)
    district: District;
    
    @HasMany(() => VenuePhoto)
    venuePhoto: VenuePhoto;

    @BelongsToMany(() => VenueType, () => VenuesId) 
    venueType: VenueType[];
}
