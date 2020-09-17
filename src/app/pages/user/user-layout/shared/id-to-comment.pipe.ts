import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idToComment'
})
export class IdToCommentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
