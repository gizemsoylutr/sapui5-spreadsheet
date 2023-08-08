using {  Calculations as cal} from '../db/data-model';

service CalculationsService {
    entity Calculations as projection on cal;
}