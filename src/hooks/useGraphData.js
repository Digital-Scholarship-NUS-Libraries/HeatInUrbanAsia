import { useStaticQuery, graphql } from "gatsby"

export default function useTemperatureGraphData() {
    const query = graphql`
    query TemperatureData {
  allSGtemperatureRecordsCsv(sort: {order: ASC, fields: year}) {
    data: nodes {
      year
      min
      mean
    }
  }
}
  `

  const tempData = useStaticQuery(query) || {}

  return tempData.allSGtemperatureRecordsCsv.data
}
