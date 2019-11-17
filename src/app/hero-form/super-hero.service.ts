import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  ALTER_EGOS = ['Tom'];

  constructor() {
  }

  isAlterEgoTaken(alterEgo: string): Observable<boolean> {
    const isTaken = this.ALTER_EGOS.includes(alterEgo);
    // 这里制造一个假的延迟，实际应当从服务端获得数据。
    return of(isTaken).pipe(delay(400));
  }
}
