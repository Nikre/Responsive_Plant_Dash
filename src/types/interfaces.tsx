export interface PlantDetail {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  data: DataPoint[];
}


export interface DataPoint {
    time: string;
    value: number;
  }
  
  export interface LineChartProps {
    data: DataPoint[];
  }
