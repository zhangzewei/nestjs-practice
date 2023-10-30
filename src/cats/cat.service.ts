import { Injectable } from '@nestjs/common';

export enum CatType {
  old = 'old',
  young = 'young',
}

export class Cat {
  id: string;
  name: string;
  age: number;
  type: CatType;
}

@Injectable()
export class CatsService {
  cats: Cat[] = new Array(20).fill(0).map((_, index) => ({
    id: index.toString(),
    name: `cat_name_${index}`,
    age: index + 1,
    type: index + 1 > 10 ? CatType.old : CatType.young,
  }));
  getAllCats(): Cat[] {
    return this.cats;
  }
  getCatById(id: string): Cat {
    return this.cats.find((c) => c.id === id);
  }
  findCatsByType(type: CatType): Cat[] {
    if (type) {
      return this.cats.filter((c) => c.type === type);
    }
    return this.getAllCats();
  }
}