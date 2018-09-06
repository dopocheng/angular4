import { Inject, Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from '../messages/messages.component'
import { Project } from '../domain/project';
import { ErrorConfig } from '../cofig/error.config'
import { Observable, of } from 'rxjs';

@Injectable()
export class ProjectService {
    private readonly domain = 'projects';
    private httpOptions = new HttpHeaders({
        'Contrnt-Type': 'application/json',
        'Authorization': 'my-auth-token'
    });
    constructor( 
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient,
        private errorConfig: ErrorConfig,
        private messageService: MessageService
    ) {

    }

    
    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }
  
    // 新增项目
    add(project: Project) {
        project.id = null;
        const uri = `${this.config.uri}/${this.domain}`;
        return this.http
            .post<Project>(uri,JSON.stringify(project), {headers: this.httpOptions})
            .pipe(
                catchError(this.handleError('addHero', project))
              );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
       
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
       
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
       
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
}
