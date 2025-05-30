import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    userId: number; 
}