import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";

interface AdminAttr {
    name: string;
    login: string;
    hashedPassword: string;
    isActive: boolean;
    isCreator: boolean;
    hashedRefreshToken: string;
}

@Table({tableName: 'admin'})
export class Admin extends Model<Admin, AdminAttr> {
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
    
    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique: true
    })
    login: string;

    @Column({
        type:DataType.STRING,
    })
    hashedPassword: string;

    @Column({
        type:DataType.STRING,
    })
    hashedRefreshToken: string;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: true
    })
    isActive: boolean;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    isCreator: boolean;


}
