import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
//@--> decorator attached to a class
@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      'mongodb+srv://Praneetha:Praneetha@cluster0.kkhnn.mongodb.net/test',
    ),
  ],
  //accepting incoming requests
  controllers: [AppController],
  //extra services provides abstraction and can be injected into controllers and modules
  providers: [AppService],
})
export class AppModule {}
