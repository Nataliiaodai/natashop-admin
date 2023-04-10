import {Pipe, PipeTransform} from '@angular/core';
import {CategoryService} from "../category-list/category-service";
import {CategoryModel} from "../shared-model/category.model";
import {firstValueFrom, lastValueFrom} from "rxjs";

@Pipe({
  name: 'transCategIdToName'
})


export class TransCategIdToNamePipe implements PipeTransform {

  constructor(private categoryService: CategoryService) {
  }

  async transform(id: number): Promise<string> {
    let category = await firstValueFrom(this.categoryService.fetchCategory(id))
      .then((categoryResponse) => categoryResponse.name.uk);

    console.log(`fetchCategory id=${id} from PIPE`);
    console.log('category ' + category + " " + typeof category);
    return category;
  }
}

/*
* @Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(value: string) {
    return value.split(' ').slice(0, 2).join(' ') + '...';
  }
}
* */


// let categoryName: string = '';
// this.categoryService.fetchCategory(id)
//   .subscribe((categoryResponse) => {
//     console.log(`fetchCategory id=${id} from PIPE`);
//     categoryName = categoryResponse.name.uk;
//     console.log('categoryName FROM PIPE  ' + categoryName);
//
//   });
// return categoryName;

// const fetch = this.categoryService.fetchCategory(id);
// const category = await firstValueFrom(fetch)
//   .then((categoryName) => categoryName.name.uk);
// console.log(`fetchCategory id=${id} from PIPE`);
// console.log('categoryName FROM PIPE  ' + JSON.stringify(category));
