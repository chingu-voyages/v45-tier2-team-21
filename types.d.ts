type BarChart = {
    year: string,
    strikes: number
}

type Meteorite = {
    id: string;
    name: string;
    nametype: string;
    recclass: string;
    mass: number;
    fall: string;
    year: string | number;
    reclat?: number;
    reclong?: number;
    geolocation?: {
      latitude?: number;
      longitude?: number;
    };
 };

 interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: any[];
      backgroundColor: string | string[];
      borderColor: string | string[];
      borderWidth: number;
    }[];
  }