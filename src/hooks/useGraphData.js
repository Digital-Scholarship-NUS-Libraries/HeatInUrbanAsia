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

  const shapedData = [
    {
      id: "minimum",
      color: "#67001f",
      data: tempData.minTemp.data,
    },
    {
      id: "average",
      color: "#d6604d",
      data: tempData.avgTemp.data,
    },
  ]

  return shapedData
}
