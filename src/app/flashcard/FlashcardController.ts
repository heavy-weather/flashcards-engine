import { IpcMainInvokeEvent } from 'electron';
import Controller from '../ipc/Controller.js';
import HandlerMapping from '../ipc/HandlerMapping.js';
import FlashcardService from './FlashcardService.js';

export default class FlashcardController extends Controller {
    flaschardService: FlashcardService;
    
    constructor(flashcardService: FlashcardService) {
        super();
        this.flaschardService = flashcardService;
    }
    getHandlerMappings(): HandlerMapping[] {
        return [
            {
                method: 'GET',
                route: '/hello',
                handler: (event: IpcMainInvokeEvent, val: string) => {
                    console.log(val);
                    return new Promise((res, rej) => res(val.toUpperCase()));
                }
            }
        ];
    }
}
