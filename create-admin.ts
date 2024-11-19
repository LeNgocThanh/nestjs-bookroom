import * as bcrypt from 'bcrypt';
import { connect, connection } from 'mongoose';
import { UserModel } from './src/user/model/user.model';
import { CreateUserDto } from './src/user/dto/user.dto';

async function createAdmin() {
  await connect('mongodb+srv://Amore:Rich%401234@cluster0.prexdvx.mongodb.net/?retryWrites=true&w=majority&appName=Amore'); // Thay thế bằng URL kết nối của bạn

  const createUserDto: CreateUserDto = {
    username: 'amore',
    email: 'amore@amore.com',
    password: '12345678',
    roles: ['moderator'],
  };

  // Kiểm tra xem admin đã tồn tại chưa
  const existingAdmin = await UserModel.findOne({ username: createUserDto.username });
  if (existingAdmin) {
    console.log('Admin user already exists');
    return;
  }

  // Mã hóa mật khẩu
  const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

  // Tạo tài khoản admin
  const admin = new UserModel({
    ...createUserDto,
    password: hashedPassword,
  });

  await admin.save();
  console.log('Admin user created successfully');

  connection.close();
}

createAdmin().catch((error) => {
  console.error('Error creating admin user:', error);
  connection.close();
});