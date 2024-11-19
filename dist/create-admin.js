"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const mongoose_1 = require("mongoose");
const user_model_1 = require("./src/user/model/user.model");
async function createAdmin() {
    await (0, mongoose_1.connect)('mongodb+srv://Amore:Rich%401234@cluster0.prexdvx.mongodb.net/?retryWrites=true&w=majority&appName=Amore');
    const createUserDto = {
        username: 'amore',
        email: 'amore@amore.com',
        password: '12345678',
        roles: ['moderator'],
    };
    const existingAdmin = await user_model_1.UserModel.findOne({ username: createUserDto.username });
    if (existingAdmin) {
        console.log('Admin user already exists');
        return;
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const admin = new user_model_1.UserModel({
        ...createUserDto,
        password: hashedPassword,
    });
    await admin.save();
    console.log('Admin user created successfully');
    mongoose_1.connection.close();
}
createAdmin().catch((error) => {
    console.error('Error creating admin user:', error);
    mongoose_1.connection.close();
});
//# sourceMappingURL=create-admin.js.map