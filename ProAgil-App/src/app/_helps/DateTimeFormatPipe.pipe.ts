import { Pipe, PipeTransform } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { DatePipe } from '@angular/common';
import { Constants } from '../util/Constants';

@Pipe({
  name: 'DateTimeFormatPipe'
})
export class DateTimeFormatPipePipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }

}
