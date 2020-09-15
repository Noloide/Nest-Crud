import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getBooks(req: any): any;
    getBooksBy(req: any): any;
    createBooks(req: any): any;
    deleteBooks(req: any): any;
    updateBooks(req: any): any;
}
