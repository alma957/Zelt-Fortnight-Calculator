export interface InputState {
  weeklyHours: number;
  additionalDaysOff: number;
  per: number;
  

}


export const initialState: InputState = {
  weeklyHours: 40,
  additionalDaysOff: 1,
  per: 2,
  

};
