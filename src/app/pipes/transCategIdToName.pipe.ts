import {Pipe, PipeTransform} from '@angular/core';
import {CategoryService} from "../category-list/category-service";
import {CategoryModel} from "../shared-model/category.model";

@Pipe({
  name: 'transCategIdToName'
})


export class TransCategIdToNamePipe implements PipeTransform {


  constructor(private categoryService: CategoryService) {
  }

  async  transform(id: number) {
    // let categoryName: string = '';
    // this.categoryService.fetchCategory(id)
    //   .subscribe((categoryResponse) => {
    //     console.log(`fetchCategory id=${id} from PIPE`);
    //     categoryName = categoryResponse.name.uk;
    //     console.log('categoryName FROM PIPE  ' + categoryName);
    //
    //   });
    // return categoryName;

  }
}
