// fiscal-year.interface.ts

export interface SectorData {
  fiscalYears: FiscalYear[];
}

export interface FiscalYear {
  year: string;
  sectors: Sector[];
}

// department.interface.ts
export interface Sector {
  name: string;
  aumValue: number;
}


