//import {} from './teacher';
import Teacher , {promote} from './teacher';

//Default export   -> import ... from '';
//Named export -> import { ... } from '';

const teacher = new Teacher("Umar","MS IS");
teacher.teach();
console.log(teacher);