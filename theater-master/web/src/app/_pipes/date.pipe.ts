import {Pipe} from '@angular/core';

@Pipe({
    name: 'dateMonth'
})
export class DateMonthPipe {
    transform(value: string ): string {
        let date = new Date(value);
        let month = ['Января', 'Февраля', 'Марта',
            'Апреля', 'Мая', 'Июня',
            'Июля', 'Августа', 'Сентября',
            'Октября', 'Ноября', 'Декабря'];
        return date.getDate()+ ' ' + month[date.getMonth()];
    }
}


@Pipe({
    name: 'month'
})
export class MonthPipe {
    transform(value: string ): string {
        let date = new Date(value);
        let month = ['Января', 'Февраля', 'Марта',
            'Апреля', 'Мая', 'Июня',
            'Июля', 'Августа', 'Сентября',
            'Октября', 'Ноября', 'Декабря'];
        return month[date.getMonth()];
    }
}


@Pipe({
    name: 'monthYear'
})
export class MonthYearPipe {
    transform(value: string ): string {
        let date = new Date(value);
        let month = ['Январь', 'Февраль', 'Март',
            'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь',
            'Октябрь', 'Ноябрь', 'Декабрь'];
        return month[date.getMonth()] + ' ' + date.getFullYear();
    }
}


@Pipe({
    name: 'weekDay'
})
export class WeekDayPipe {
    transform(value: string ): string {
        let date = new Date(value);
        let weekDay = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК',
            'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];
        return weekDay[date.getDay()];
    }
}


@Pipe({
    name: 'time'
})
export class TimePipe {
    transform(value: string ): string {
        let date = new Date(value);
        if (!date.getMinutes()) {
            return date.getHours() + ':00';
        }
        return date.getHours() + ':' + date.getMinutes();
    }
}