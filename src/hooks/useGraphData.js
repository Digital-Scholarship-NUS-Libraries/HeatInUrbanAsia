import { useStaticQuery, graphql } from "gatsby"

export default function useTemperatureGraphData() {
  const query = graphql`
    query TemperatureData {
      minTemp: allSGtemperatureRecordsCsv {
          data: nodes {
            x: year
            y: min
        }
      }
      avgTemp: allSGtemperatureRecordsCsv {
          data: nodes {
            x: year
            y: mean
        }
      }
    }
  `

  const tempData = useStaticQuery(query) || {}

  const shapedData = {
      "id": "min",
      "color": "hsl(80, 70%, 50%)",
      "data": tempData.minTemp.data,
  }

  return shapedData
}
