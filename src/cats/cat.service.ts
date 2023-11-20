import { Injectable } from '@nestjs/common';

export enum CatType {
  old = 'old',
  young = 'young',
}

export class Cat {
  id: number;
  name: string;
  age: number;
  type: CatType;
}

@Injectable()
export class CatsService {
  cats: Cat[] = new Array(20).fill(0).map((_, index) => ({
    id: index,
    name: `cat_name_${index}`,
    age: index + 1,
    type: index + 1 > 10 ? CatType.old : CatType.young,
  }));
  getAllCats(): Cat[] {
    return this.cats;
  }
  getCatById(id: number): Cat {
    return this.cats.find((c) => c.id === id);
  }
  findCatsByType(type: CatType): Cat[] {
    if (type) {
      return this.cats.filter((c) => c.type === type);
    }
    return this.getAllCats();
  }
  addCat(body) {
    this.cats.push({
      id: this.cats.length,
      ...body,
      type: body.age > 10 ? CatType.old : CatType.young,
    });
  }
  updateCatById(id: number, body: any) {
    this.cats = this.cats.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          ...body,
        };
      }
      return c;
    });
  }
  deleteCatById(id: number) {
    this.cats = this.cats.filter((c) => c.id !== id);
  }
}
