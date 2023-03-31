import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";


interface VenueTypeCreationAttrs{
    name: string;
};

@Table({tableName: 'VenueType'})
export class VenueType extends Model<VenueType, VenueTypeCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;
    
}
