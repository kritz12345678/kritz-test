import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentColorServiceService {
  private departmentColors: Record<string, string> = {
    department1: '#BF50BF',
    department2: 'BF50BF',
    department3: 'BF50BF',
    department4: 'BF50BF',
  };

  getColor(departmentName: string): string {
    const colorKey = departmentName.toLowerCase();
    return this.departmentColors[colorKey] || 'gray';
  }
}
