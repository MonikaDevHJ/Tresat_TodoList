export type TaskStatus =  "Pending" | "In Progress" | "Completed";

export interface Task {
        id : string;
        title : string;
        description : string ;
        status : TaskStatus;
        date : string; //can be ISO string  
}