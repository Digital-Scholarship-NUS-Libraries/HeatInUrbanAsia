import { useStaticQuery, graphql } from "gatsby";

export default function useMapData() {
  const query = graphql`
    query MapData {
      allRegionMapDataCsv(sort: { fields: [field1] }) {
        edges {
          node {
            id
            City_name
            Latitude
            Longitude
            Source
            Temperature_variation
            Image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            field1
          }
        }
      }
      allCityMapDataCsv {
        edges {
          node {
            id
            Latitude
            Longitude
            Location
            Image
            Interesting_facts
            Annual_Average_Temperature___C_
            Observer_or_Authorising_Officer
            Source
            Year
            map_text
            map_to_use
          }
        }
      }
    }
  `;

  const mapData = useStaticQuery(query) || {};

  const uniqueYears = mapData.allCityMapDataCsv.edges.reduce(
    (accumulator, { node }) => {
      if (Number(node.Year) && !accumulator.includes(Number(node.Year))) {
        accumulator.push(Number(node.Year));
      }
      return accumulator;
    },
    []
  );

  const minYear = Math.min(...uniqueYears);
  const maxYear = Math.max(...uniqueYears);

  // the slider component requires defined marks, we will only have labels for max and min, to keep things readable
  const marks = uniqueYears.map((year) => {
    let oneMark = {};
    oneMark.value = Number(year);
    if ([minYear, maxYear].includes(year)) oneMark.label = year;
    return oneMark;
  });

  const regionData = mapData.allRegionMapDataCsv.edges.map(({ node }) => ({
    cityName: node.City_name,
    Latitude: node.Latitude,
    Longitude: node.Longitude,
    tempVar: node.Temperature_variation,
    Source: node.Source,
    Image: node.Image.childImageSharp.gatsbyImageData,
  }));

  const cityData = mapData.allCityMapDataCsv.edges.map(({ node }) => {
    if (!node.Latitude) {
      return {
        Type: "mapText",
        Year: node.Year,
        mapText: node.map_text,
        mapToUse: node.map_to_use,
      };
    } else {
      return {
        Type: "station",
        Year: node.Year,
        Latitude: node.Latitude,
        Longitude: node.Longitude,
        Location: node.Location,
        Observer: node.Observer_or_Authorising_Officer,
        InterestingFacts: node.Interesting_facts,
        AverageTemp: node.Annual_Average_Temperature___C_,
        stationImage: node.Image,
        Source: node.Source,
      };
    }
  });

  const shapedData = {
    uniqueYears,
    minYear,
    maxYear,
    marks,
    regionData,
    cityData,
  };

  return shapedData;
}
