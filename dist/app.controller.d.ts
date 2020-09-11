import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    login(req: any): Promise<any>;
    getBook(req: any): any;
    getUser(req: any): any;
}
