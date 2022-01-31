import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly ProductRepository: Repository<Product>)
    {

    }
    async all():Promise<Product[]>{
        return this.ProductRepository.find();
    }
    async create(data):Promise<Product>{
        return this.ProductRepository.save(data);
    }
    async get(id:number):Promise<Product>{
        return this.ProductRepository.findOne({id});
    }
    async update(id:number,data):Promise<any>{
        return this.ProductRepository.update(id,data);
    }
    async delete (id:number):Promise<any>{
        return this.ProductRepository.delete(id);
    }

}
