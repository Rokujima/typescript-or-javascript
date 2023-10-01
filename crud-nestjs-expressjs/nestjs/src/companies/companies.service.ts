import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company, CompanyDocument } from './../schemas/company.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private readonly companyDocument: Model<CompanyDocument>
  ){}

  create(createCompanyDto: CreateCompanyDto) {
    return this.companyDocument.create(createCompanyDto);
  }

  findAll() {
    return this.companyDocument.find();
  }

  findOne(id: string) {
    return this.companyDocument.findById(id);
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companyDocument.findByIdAndUpdate(id, updateCompanyDto);
  }

  remove(id: string) {
    return this.companyDocument.findByIdAndDelete(id);
  }
}
