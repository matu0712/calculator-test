export class Calculator{
    public static add( opr1: number, opr2: number):number {
        const result = opr1 + opr2;
        return result;
    }
   
    public static subtract( opr1: number, opr2: number):number {
        const result = opr1 - opr2;
        return result;
    }
    public static multiply( opr1: number, opr2: number):number {
        const result = opr1 * opr2;
        return result;
    }
 
    public static divide( opr1: number, opr2: number):number {
        const result = opr1 / opr2;
        return result;
    }
}
