import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasMany } from "sequelize-typescript";
import { EventType } from "../../event_type/models/event_type.model";
import { HumanCategory } from "../../human_category/models/human_category.model";
import { Venue } from "../../venue/models/venue.model";
import { Language } from "../../language/models/language.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface EventCreationAttrs{
    name: string;
    photo: string;
    startDate: Date;
    finishDate: Date;
    info: string;
    releaseDate: Date;
};

@Table({tableName: 'users'})
export class Event extends Model<Event, EventCreationAttrs> {
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

    @Column({
        type: DataType.STRING,
    })
    photo: string;

    @Column({
        type: DataType.DATE,
    })
    startDate: Date;

    @Column({
        type: DataType.DATE,
    })
    finishDate: Date;

    @Column({
        type: DataType.STRING,
    })
    info: string;

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER
    })
    eventTypeId: number;

    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.INTEGER
    })
    humanCategoryId: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER
    })
    VenueId: number;

    @ForeignKey(() => Language)
    @Column({
        type: DataType.INTEGER
    })
    languageId: number

    @Column({
        type: DataType.DATE,
    })
    releaseData: Date;

    @HasMany(() => Ticket)
    ticket: Ticket

    @BelongsTo(() => EventType)
    eventTzype: EventType;

    @BelongsTo(() => HumanCategory)
    humanCategory: HumanCategory;

    @BelongsTo(() => Venue)
    venue: Venue;
}
