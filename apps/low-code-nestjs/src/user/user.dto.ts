/**
 * id, name , email , username
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @ApiProperty({ example: 123 })
  id?: string;

  @ApiProperty({ example: 'cq' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'www.a@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'luck boy' })
  @IsNotEmpty()
  username: string;
}
