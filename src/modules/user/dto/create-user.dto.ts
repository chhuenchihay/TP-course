import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(3)
  password: string;
}

// export class UpdateUserDto {
//   @IsString()
//   username: string;

//   @Matches(/^[\w.-]+@[\w.-]+\.com$/, { message: 'អុីម៉ែលមិនត្រឹមត្រូវ' })
//   email: string;
// }