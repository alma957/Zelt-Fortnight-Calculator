export interface InputState {
  validDate: boolean;
  payPeriod: string;
  pay: number;
  category: string;
  calculationType: string;
  directorshipStart:string;
  proRataThreshold:number;
  firstPaidMonth:number;
  employmentType:string;

}
export const multiplier: mult = {
  annually: 1 / 12,
  monthly: 1,
  weekly: 52 / 12,
  daily: 365 / 12,
};
export interface mult {
  annually: number;
  monthly: number;
  weekly: number;
  daily: number;
}
export interface BreakdownTable {
  income:Array<number|null>;
  rate:Array<number|null>;
  contr:Array<number|null>;
  incomeBand:Array<{
    start:number,
    end:number
  }|string>
}
export const initialState: InputState = {
  validDate: true,
  payPeriod: "annually",
  pay: 60000,
  category: "A",
  calculationType:"standard",
  directorshipStart:"2023-04-06",
  proRataThreshold:1,
  firstPaidMonth:0,
  employmentType:"employee"

};
export interface RatesType {
  firstPeriod: Array<Rates>;
  secondPeriod: Array<Rates>;
  thirdPeriod: Array<Rates>;

}
export interface Mapping {
  A: number;
  B: number;
  F: number;
  H: number;
  M: number;
  V: number;
  I: number;
  J: number;
  L: number;
  Z: number;
  S: number;
  C: number;
}
export interface Rates {
  start: number;
  end: number;
  categories: Mapping;
}
export const employeeRates: RatesType = {
  firstPeriod: [
    {
      start: 1048,
      end: 4189,
      categories: {
        A: 0.12,
        B: 0.0585,
        F: 0.12,
        H: 0.12,
        M: 0.12,
        V: 0.12,
        I: 0.0585,
        J: 0.02,
        L: 0.02,
        Z: 0.02,
        S: 0,
        C: 0,
      },
    },
    {
      start: 4189.01,
      end: Infinity,
      categories: {
        A: 0.02,
        B: 0.02,
        F: 0.02,
        H: 0.02,
        M: 0.02,
        V: 0.02,
        I: 0.02,
        J: 0.02,
        L: 0.02,
        Z: 0.02,
        S: 0,
        C: 0,
      },
    },
  ],
  secondPeriod: [
    {
      start: 1048,
      end: 4189,
      categories: {
        A: 0.12,
        B: 0.0585,
        F: 0.12,
        H: 0.12,
        M: 0.12,
        V: 0.12,
        I: 0.0585,
        J: 0.02,
        L: 0.02,
        Z: 0.02,
        S: 0,
        C: 0,
      },
    },
    {
      start: 4189.01,
      end: Infinity,
      categories: {
        A: 0.02,
        B: 0.02,
        F: 0.02,
        H: 0.02,
        M: 0.02,
        V: 0.02,
        I: 0.02,
        J: 0.02,
        L: 0.02,
        Z: 0.02,
        S: 0,
        C: 0,
      },
    },
  ],
  thirdPeriod: [
    {
      start: 1048,
      end: 4189,
      categories: {
        A: 0.12,
        B: 0.0585,
        F: 0.12,
        H: 0.12,
        M: 0.12,
        V: 0.12,
        I: 0.0585,
        J: 0.02,
        L: 0.02,
        Z: 0.02,
        S: 0,
        C: 0,
      },
    },
    {
      start: 4189.01,
      end: Infinity,
      categories: {
        A: 0.02,
        B: 0.02,
        F: 0.02,
        H: 0.02,
        M: 0.02,
        V: 0.02,
        I: 0.02,
        J: 0.02,
        L: 0.02,
        Z: 0.02,
        S: 0,
        C: 0,
      },
    },
  ]
};
/////EMPLOYER DATA
//////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
//////////////////
export const employerData: RatesType = {
  firstPeriod:  [
    {
      start: 758,
      end: 2083,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0,
        H: 0,
        I: 0,
        J: 0.138,
        L: 0,
        M: 0,
        S: 0,
        V: 0,
        Z: 0,
      },
    },
    {
      start: 2083.01,
      end: 4189,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0.138,
        H: 0,
        I: 0.138,
        J: 0.138,
        L: 0.138,
        M: 0,
        S: 0.138,
        V: 0,
        Z: 0,
      },
    },
    {
      start: 4189.01,
      end: Infinity,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0.138,
        H: 0.138,
        I: 0.138,
        J: 0.138,
        L: 0.138,
        M: 0.138,
        S: 0.138,
        V: 0.138,
        Z: 0.138,
      },
    },
  ],
  secondPeriod:  [
    {
      start: 758,
      end: 2083,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0,
        H: 0,
        I: 0,
        J: 0.138,
        L: 0,
        M: 0,
        S: 0,
        V: 0,
        Z: 0,
      },
    },
    {
      start: 2083.01,
      end: 4189,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0.138,
        H: 0,
        I: 0.138,
        J: 0.138,
        L: 0.138,
        M: 0,
        S: 0.138,
        V: 0,
        Z: 0,
      },
    },
    {
      start: 4189.01,
      end: Infinity,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0.138,
        H: 0.138,
        I: 0.138,
        J: 0.138,
        L: 0.138,
        M: 0.138,
        S: 0.138,
        V: 0.138,
        Z: 0.138,
      },
    },
  ],
  thirdPeriod: [
    {
      start: 758,
      end: 2083,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0,
        H: 0,
        I: 0,
        J: 0.138,
        L: 0,
        M: 0,
        S: 0,
        V: 0,
        Z: 0,
      },
    },
    {
      start: 2083.01,
      end: 4189,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0.138,
        H: 0,
        I: 0.138,
        J: 0.138,
        L: 0.138,
        M: 0,
        S: 0.138,
        V: 0,
        Z: 0,
      },
    },
    {
      start: 4189.01,
      end: Infinity,
      categories: {
        A: 0.138,
        B: 0.138,
        C: 0.138,
        F: 0.138,
        H: 0.138,
        I: 0.138,
        J: 0.138,
        L: 0.138,
        M: 0.138,
        S: 0.138,
        V: 0.138,
        Z: 0.138,
      },
    },
  ]
};



export interface AnnualDirectorDataByCategory  {
  "A":AnnualDirectorData;
  "B":AnnualDirectorData;
  "C":AnnualDirectorData;
  "F":AnnualDirectorData;
  "H":AnnualDirectorData;
  "I":AnnualDirectorData;
  "J":AnnualDirectorData;
  "L":AnnualDirectorData;
  "M":AnnualDirectorData;
  "S":AnnualDirectorData;
  "V":AnnualDirectorData;
  "Z":AnnualDirectorData;
}
export interface AnnualDirectorData {
  primary_threshold:number;
  upper_earning_limit:number;
  secondary_threshold:number;
  rates:DirRates;
}
export interface DirRates {
  first_period:DirectorRatesPeriod;
  second_period:DirectorRatesPeriod;
}
export interface DirectorRatesPeriod {
  primary_threshold:number;
  upper_earning_limit:number;
  secondary_threshold:number;
}
export const directorRates_a:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:9100,
  rates:{
    first_period:{
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_b:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:9100,
  rates:{
    first_period:{
      primary_threshold:0.0585,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.0585,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_c:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:9100,
  rates:{
    first_period:{
      primary_threshold:0.0,
      upper_earning_limit:0.0,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.0,
      upper_earning_limit:0.0,
      secondary_threshold:0.138
    }
  }
}

export const directorRates_f:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:25000,
  rates:{
    first_period:{
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_h:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:50270,
  rates:{
    first_period:{
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_i:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:25000,
  rates:{
    first_period:{
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.0585,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_j:AnnualDirectorData ={
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:9100,
  rates:{
    first_period:{
      primary_threshold:0.02,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.02,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_l:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:25000,
  rates:{
    first_period:{
      primary_threshold:0.02,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.02,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_m:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:50270,
  rates:{
    first_period:{
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_s:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:25000,
  rates:{
    first_period:{
      primary_threshold:0.0,
      upper_earning_limit:0.0,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.0,
      upper_earning_limit:0.0,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_v:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:50270,
  rates:{
    first_period:{
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.12,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}
export const directorRates_z:AnnualDirectorData = {
  primary_threshold:12570,
  upper_earning_limit:50270,
  secondary_threshold:50270,
  rates:{
    first_period:{
      primary_threshold:0.02,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    },
    second_period:
    {
      primary_threshold:0.02,
      upper_earning_limit:0.02,
      secondary_threshold:0.138
    }
  }
}

export const directorRatesByCategory:AnnualDirectorDataByCategory={
  "A":directorRates_a,
  "B":directorRates_b,
  "C":directorRates_c,
  "F":directorRates_f,
  "H":directorRates_h,
  "I":directorRates_i,
  "J":directorRates_j,
  "L":directorRates_l,
  "M":directorRates_m,
  "S":directorRates_s,
  "V":directorRates_v,
  "Z":directorRates_z,
}

