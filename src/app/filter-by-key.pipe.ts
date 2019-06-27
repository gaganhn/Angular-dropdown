import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByKey'
})
export class FilterByKeyPipe implements PipeTransform {

  transform(value: any, list: any, key: string): any {
    return this.inFirstOnly(value, list, key);
  }

  operation(list1, list2, key, isUnion = false) {
    var result = [];

    for (var i = 0; i < list1.length; i++) {
      var item1 = list1[i],
        found = false;
      for (var j = 0; j < list2.length && !found; j++) {
        found = item1[key] === list2[j][key];
      }
      if (found === !!isUnion) { // isUnion is coerced to boolean
        result.push(item1);
      }
    }
    return result;
  }

  inFirstOnly(list1, list2, key) {
    return this.operation(list1, list2, key);
  }

}
