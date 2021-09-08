import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import {
  MapContainer,
  Marker,
  useMap,
  TileLayer,
  WMSTileLayer,
  ImageOverlay,
    ZoomControl,
} from "react-leaflet"
import Slider from "@material-ui/core/Slider"
import Switch from "@material-ui/core/Switch"
import useHasMounted from "../hooks/useHasMounted.js"
import useMapData from "../hooks/useMapData"
import year1820 from "../images/mapImages/Year1820.webp"
import year1841_town from "../images/mapImages/Year1841_town.webp"
import year1869 from "../images/mapImages/Year1869.webp"
import year1880 from "../images/mapImages/Year1880.webp"
import year1890a from "../images/mapImages/Year1890a.webp"
import year1890b from "../images/mapImages/Year1890b.webp"
import isolineAverage2000 from "../images/mapImages/Average May temp 2000.png"
import isolineAverage2005 from "../images/mapImages/Average May temp 2005.png"
import isolineAverage2010 from "../images/mapImages/Average May temp 2010.png"
import isolineAverage2015 from "../images/mapImages/Average May temp 2015.png"
import isolineAverage2020 from "../images/mapImages/Average May temp 2020.png"

const SGBounds = [
  [1.16169, 103.59287],
  [1.48201, 104.09412],
]
const AsiaBounds = [
  [-6.2088, 72.8777],
  [39.9042, 139.6503],
]

const layersOpacity = 0.8

//this needs to be a component that is a child of MapContainer so that we can access the map
const UpdateBounds = ({isFocusSG}) => {
    const map = useMap()
    useEffect(() => {
        if (!map) return
        if (isFocusSG) {
            map.fitBounds(SGBounds)
        } else {
            map.fitBounds(AsiaBounds)
        }
    }, [map, isFocusSG])
    return null
}

const ProjectPage = () => {
  const mapData = useMapData()
  const hasMounted = useHasMounted()

  const [isFocusSG, setIsFocusSG] = useState(false)
  //const [bounds, setBounds] = useState(AsiaBounds)
  const [selectedYear, setSelectedYear] = useState(mapData.minYear)
    const [sideBarContent, setSideBarContent] = useState(<h2>Temperature Variations in Asian Cities</h2>)

  const asiaMapMarkers = mapData.regionData.map(oneCity => {
    return {
      center: [Number(oneCity.Latitude), Number(oneCity.Longitude)],
      title: oneCity.cityName,
      tmp: oneCity.tempVar,
      img: oneCity.Image,
      source: oneCity.Source,
    }
  })

  const sgMapMarkers = year => {
    return mapData.cityData
      .filter(
        oneStation =>
          oneStation.Type === "station" && Number(oneStation.Year) === year
      )
      .map(oneStation => {
        return {
          center: [Number(oneStation.Latitude), Number(oneStation.Longitude)],
          title: oneStation.Location,
          facts: oneStation.InterestingFacts,
          avgTemp: oneStation.AverageTemp,
          obs: oneStation.Observer,
          source: oneStation.Source,
        }
      })
  }

  const [markerData, setMarkerData] = useState(
    isFocusSG ? sgMapMarkers(selectedYear) : asiaMapMarkers
  )

  const handleChangeFocus = event => {
      //the logic appears inverted here because state will change AFTER this has run, https://reactjs.org/docs/react-component.html#setstate
    if (isFocusSG) {
      setMarkerData(asiaMapMarkers)
        setSideBarContent(<h2>Temperature Variations in Asian Cities</h2>)
    } else {
      setMarkerData(sgMapMarkers(selectedYear))
        setSideBarContent(<><h1>{selectedYear}</h1>{yearMapContent(selectedYear)}</>)
    }
    setIsFocusSG(!isFocusSG)//even if this is at the start of the block
  }

    const yearMapContent = (givenYear) => {
      return mapData.cityData
      .filter(
        oneStation =>
          oneStation.Type === "mapText" && Number(oneStation.Year) === givenYear
      )
      .map((oneStation, index) => {
        return (
            <p key={index}>{oneStation.mapText}</p>
        )
      })
    }

  const handleChangeYear = (event, newValue) => {
    setMarkerData(sgMapMarkers(newValue))
      const newContent = yearMapContent(newValue)
      setSideBarContent(<>
          <h1>{newValue}</h1>
          {newContent}
          </>)
    setSelectedYear(newValue)
  }

  return (
    <Layout>
      <Seo title="Interactive Map" />
      <Container fluid style={{ textAlign: `justify` }}>
        <Row>
            <Col md={{ span: 9, order: "last" }} style={{padding: `0`}}>
            {hasMounted && (
              <MapContainer
                bounds={AsiaBounds}
                scrollWheelZoom={false}
                  zoomControl={false}
                style={{ height: `700px` }}
              >
                  <ZoomControl position="topright" />
                <UpdateBounds isFocusSG={isFocusSG} />
                <TileLayer
                  attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />
                <ImageOverlay
                  url={year1820}
                  zIndex={2}
                  bounds={[
                    [0.4127301, 103.0291972],
                    [1.5833369, 104.6631818],
                  ]}
                  opacity={
                    isFocusSG && [1820].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={year1841_town}
                  zIndex={3}
                  bounds={[
                    [1.2326721, 103.7699612],
                    [1.3808437, 103.9567873],
                  ]}
                  opacity={
                    isFocusSG && [1839, 1841].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={year1869}
                  zIndex={2}
                  bounds={[
                    [1.2677848, 103.8249148],
                    [1.3229471, 103.8726779],
                  ]}
                  opacity={
                    isFocusSG && [1864, 1869].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={year1880}
                  zIndex={2}
                  bounds={[
                    [1.2529963, 103.7788157],
                    [1.3320876, 103.8795237],
                  ]}
                  opacity={
                    isFocusSG && [1878, 1880].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={year1890a}
                  zIndex={2}
                  bounds={[
                    [1.2241947, 103.7946017],
                    [1.285496, 103.8364247],
                  ]}
                  opacity={
                    isFocusSG && [1890].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={year1890b}
                  zIndex={2}
                  bounds={[
                    [1.2224081, 103.824651],
                    [1.2862698, 103.8650148],
                  ]}
                  opacity={
                    isFocusSG && [1890].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <WMSTileLayer
                  url="https://libmaps.nus.edu.sg/gis/services/Sing_Hist_Maps/1914/MapServer/WmsServer?"
                  params={{
                    layers: "0",
                    transparent: true,
                    format: "image/png",
                  }}
                  zIndex={2}
                  opacity={
                    isFocusSG && [1920, 1934].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <WMSTileLayer
                  url="https://libmaps.nus.edu.sg/gis/services/Sing_Hist_Maps/1943/MapServer/WmsServer?"
                  params={{
                    layers: "0",
                    transparent: true,
                    format: "image/png",
                  }}
                  zIndex={2}
                  opacity={
                    isFocusSG && [1940].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <WMSTileLayer
                  url="https://libmaps.nus.edu.sg/gis/services/Sing_Hist_Maps/1983/MapServer/WmsServer?"
                  params={{
                    layers: "0",
                    transparent: true,
                    format: "image/png",
                  }}
                  zIndex={2}
                  opacity={
                    isFocusSG && [1980].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <WMSTileLayer
                  url="https://libmaps.nus.edu.sg/gis/services/Sing_Hist_Maps/1993/MapServer/WmsServer?"
                  params={{
                    layers: "0",
                    transparent: true,
                    format: "image/png",
                  }}
                  zIndex={2}
                  opacity={
                    isFocusSG && [1990].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <WMSTileLayer
                  url="https://libmaps.nus.edu.sg/gis/services/Sing_Hist_Maps/2002/MapServer/WmsServer?"
                  params={{
                    layers: "0",
                    transparent: true,
                    format: "image/png",
                  }}
                  zIndex={2}
                  opacity={
                    isFocusSG && [2000].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={isolineAverage2000}
                  zIndex={3}
                  bounds={[
                    [1.1740998, 103.5500069],
                    [1.505542, 104.0661863],
                  ]}
                  opacity={isFocusSG && [2000].includes(selectedYear) ? 0.7 : 0}
                />
                <WMSTileLayer
                  url="https://libmaps.nus.edu.sg/gis/services/Sing_Hist_Maps/2005/MapServer/WmsServer?"
                  params={{
                    layers: "0,1,2,3,4,5,6,7,8,9",
                    transparent: true,
                    format: "image/png",
                  }}
                  zIndex={2}
                  opacity={
                    isFocusSG && [2005].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={isolineAverage2005}
                  zIndex={3}
                  bounds={[
                    [1.1746535, 103.5499958],
                    [1.5062091, 104.0664156],
                  ]}
                  opacity={isFocusSG && [2005].includes(selectedYear) ? 0.7 : 0}
                />
                <WMSTileLayer
                  url="https://libmaps.nus.edu.sg/gis/services/Sing_Hist_Maps/2010/MapServer/WmsServer?"
                  params={{
                    layers: "0",
                    transparent: true,
                    format: "image/png",
                  }}
                  zIndex={2}
                  opacity={
                    isFocusSG && [2010, 2015].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={isolineAverage2010}
                  zIndex={3}
                  bounds={[
                    [1.1785755, 103.5385214],
                    [1.5145568, 104.0578985],
                  ]}
                  opacity={isFocusSG && [2010].includes(selectedYear) ? 0.7 : 0}
                />
                <ImageOverlay
                  url={isolineAverage2015}
                  zIndex={2}
                  bounds={[
                    [1.1641403, 103.5799155],
                    [1.510422, 104.0779551],
                  ]}
                  opacity={
                    isFocusSG && [2015].includes(selectedYear)
                      ? layersOpacity
                      : 0
                  }
                />
                <ImageOverlay
                  url={isolineAverage2020}
                  zIndex={3}
                  bounds={[
                    [1.1752072, 103.5494245],
                    [1.506272, 104.067478],
                  ]}
                  opacity={isFocusSG && [2020].includes(selectedYear) ? 0.7 : 0}
                />
                {markerData.map((oneMarker, index) => {
                  return (
                      <Marker
                          key={index}
                          position={oneMarker.center}
                          eventHandlers={{
                              click: () => {
                                  const newContent = (
                                      <>
                                          {isFocusSG ? <h1>{selectedYear}</h1> : <h2>Temperature Variations in Asian Cities</h2>}
                        <h1>{oneMarker.title}</h1>
                        {oneMarker.tmp && (
                          <p>
                            Temperature variation over the last century:{" "}
                              <strong>{oneMarker.tmp}</strong>
                          </p>
                        )}
                        {oneMarker.avgTemp && (
                            <p>Average temperature: <strong>{oneMarker.avgTemp.substring(0,oneMarker.avgTemp.indexOf(".")+2)}°C</strong></p>
                        )}
                        {oneMarker.img && <GatsbyImage image={oneMarker.img} alt={"graph showing the evolution of the themperature over the last century in " + oneMarker.title }/>}
                        {oneMarker.facts && <p>{oneMarker.facts}</p>}
                        {oneMarker.obs && <p>{oneMarker.obs}</p>}
                        {oneMarker.source && <p>{oneMarker.source}</p>}
                                      </>
                                  )
                                  setSideBarContent(newContent)
                              }
                          }}>
                    </Marker>
                  )
                })}
              </MapContainer>
            )}
          </Col>
            <Col md={{ span: 3 }} style={{padding: `20px`}}>
            <span>Asia</span>
            <Switch
              checked={isFocusSG}
              onChange={handleChangeFocus}
              name="focus"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <span>Singapore</span>
            {isFocusSG && (
              <Slider
                min={mapData.minYear}
                max={mapData.maxYear}
                defaultValue={mapData.minYear}
                value={selectedYear}
                onChange={handleChangeYear}
                aria-labelledby="discrete-slider-custom"
                step={null}
                valueLabelDisplay="off"
                marks={mapData.marks}
              />
            )}
              <div id="sideBarContent">
              {sideBarContent}
              </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProjectPage
