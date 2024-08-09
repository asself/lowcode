import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransfromInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('进入interceptor-拦截器')
    return next.handle().pipe(
      map((data)=> {
        console.log('after---TransfromInterceptor')
        return ({
          data,
          status: 0,
          extra: {},
          message: 'success',
          success: true,
        })
      })
    );
  }
}
