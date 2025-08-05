export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null; // Quando o timer chega ao final, recebe número, senão, recebe null (interrupção)
    interruptDate: number | null; // Quando a task for interrompida, recebe número, senão, recebe null (completa)
    type: 'workTime' | 'shortBreakTime' | 'longBreakTime'; // type: keiof TaskStateModel['config'] -> mesmo resultado
}