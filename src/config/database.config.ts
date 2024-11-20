import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const DatabaseConfig = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGO_URI'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: { version: '1', strict: true, deprecationErrors: true },
  }),
  inject: [ConfigService],
});