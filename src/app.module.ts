import { Module } from '@nestjs/common';
import { VenueModule } from './venue/venue.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { EventTypeModule } from './event_type/event_type.module';
import { EventModule } from './event/event.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { TicketModule } from './ticket/ticket.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { LanguageModule } from './language/language.module';
import { CountryModule } from './country/country.module';
import { CartModule } from './cart/cart.module';
import { StatusModule } from './status/status.module';
import { CastomerCardModule } from './castomer_card/castomer_card.module';
import { AdminModule } from './admin/admin.module';
import { BookingModule } from './booking/booking.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DiscountCouponModule } from './discount_coupon/discount_coupon.module';
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { CustomerCardModule } from './customer_card/customer_card.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
    ServeStaticModule.forRoot({
        rootPath: resolve(__dirname, 'static')
    }),
    SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: String(process.env.POSTGRES_PASSWORD),
        database: process.env.POSTGRES_DB,
        models: [],
        autoLoadModels: true,
        logging: false
    }),
    VenueModule,
    VenuePhotoModule,
    VenueTypeModule,
    HumanCategoryModule,
    RegionModule,
    DistrictModule,
    EventTypeModule,
    EventModule,
    SeatModule,
    SeatTypeModule,
    TicketModule,
    CustomerModule,
    CustomerAddressModule,
    LanguageModule,
    CountryModule,
    CartModule,
    StatusModule,
    CastomerCardModule,
    AdminModule,
    BookingModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    DiscountCouponModule,
    TicketTypeModule,
    CustomerCardModule,
  ],
  providers: [],
  exports: [JwtService]
})
export class AppModule {}
