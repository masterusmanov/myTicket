import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Language } from "../../language/models/language.model";
import { Country } from "../../country/models/country.model";
import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";
import { Customer } from "../../customer/models/customer.model";


interface CustomerAdressAttr {
    name: string;
    street: string;
    house: string;
    flat: string;
    location: string;
    postIndex: number;
    info: string;
}

@Table({tableName: 'customer_adress'})
export class CustomerAdress extends Model<CustomerAdress, CustomerAdressAttr>{

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

    @ForeignKey(()=> Country)
    @Column({
        type:DataType.INTEGER,
    })
    countryId: number;

    @ForeignKey(()=> Region)
    @Column({
        type:DataType.INTEGER,
    })
    regionId: number;

    @ForeignKey(()=> District)
    @Column({
        type:DataType.INTEGER,
    })
    districtId: number;

    @Column({
        type:DataType.STRING,
    })
    street: string;

    @Column({
        type:DataType.STRING,
    })
    house: string;

    @Column({
        type:DataType.STRING,
    })
    flat: string;

    @Column({
        type:DataType.STRING,
    })
    location: string;

    @Column({
        type:DataType.INTEGER,
    })
    postIndex: number;

    
    @Column({
        type:DataType.STRING,
    })
    info: string;

    @BelongsTo(()=>Customer)
    customer: Customer[];
}

