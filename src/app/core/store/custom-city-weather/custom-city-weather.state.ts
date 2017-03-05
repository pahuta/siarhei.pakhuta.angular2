export interface CustomCityState {
  name: string;
}

export const initialCustomCityState: CustomCityState = {
  name: '',
};


export interface InitialCustomCityState {
  customCity: CustomCityState;
}
