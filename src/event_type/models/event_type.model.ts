import { Column, DataType, ForeignKey, Model, Table, HasMany } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface EventTypeCreationAttrs{
    name: string;
    email: string;
    password: string;
};

@Table({tableName: 'EventType'})
export class EventType extends Model<EventType, EventTypeCreationAttrs>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @ForeignKey(() => EventType)
    @Column({type: DataType.INTEGER})
    parentEventTypeId: number;

    @HasMany(() => Event)
    event: Event;
}