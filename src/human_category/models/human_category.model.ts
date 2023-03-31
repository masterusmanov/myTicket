import { HasMany } from "sequelize";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";


interface HumanCategoryCreationAttrs{
    name: string;
    startAge: string;
    finishAge: string;
    gender: string;
};

@Table({tableName: 'humanCategory'})
export class HumanCategory extends Model<HumanCategory, HumanCategoryCreationAttrs> {
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
    startAge: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    finishAge: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    gender: string;

    @HasMany(() => Event)
    event: Event[];
}
