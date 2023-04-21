import React from 'react'
import { Card, Col, Image, Row } from 'antd'
import { BsBatteryFull } from 'react-icons/bs'
import type { ControlType } from '../graphql.types'
import IsOn from './deviceControls/IsOn'
import LightLevel from './deviceControls/LightLevel'
import Volume from './deviceControls/Volume'
import LightColor from './deviceControls/LightColor'
import Playback from './deviceControls/Playback'

const Device = ({
  device,
}: {
  device: {
    id: string
    name: string
    type: ControlType
    isReachable: boolean
    batteryPercentage?: number | null
    isOn?: boolean | null
    lightLevel?: number | null
    colorTemperature?: number | null
    colorSaturation?: number | null
    colorHue?: number | null
    playback?: string | null
    volume?: number | null
    playItem?: string | null
    playItemImageURL?: string | null
    nextPlayItem?: string | null
  }
}) => {
  return (
    <Card title={device.name}>
      <Row align="middle" gutter={[8, 8]}>
        {device.batteryPercentage != null && (
          <Col>
            <BsBatteryFull size={22} style={{ verticalAlign: 'middle' }} />{' '}
            {device.batteryPercentage}%
          </Col>
        )}

        {device.isOn != null && (
          <Col>
            <IsOn
              id={device.id}
              name={device.name}
              type={device.type}
              isReachable={device.isReachable}
              isOn={device.isOn}
            />
          </Col>
        )}

        {device.lightLevel != null && (
          <Col flex="auto">
            <LightLevel
              id={device.id}
              type={device.type}
              isReachable={device.isReachable}
              lightLevel={device.lightLevel}
            />
          </Col>
        )}

        {(device.colorTemperature != null ||
          device.colorHue != null ||
          device.colorSaturation != null) && (
          <Col>
            <LightColor
              id={device.id}
              type={device.type}
              isReachable={device.isReachable}
              colorTemperature={device.colorTemperature}
              colorHue={device.colorHue}
              colorSaturation={device.colorSaturation}
            />
          </Col>
        )}

        {device.playback != null && (
          <Col>
            <Playback
              id={device.id}
              type={device.type}
              isReachable={device.isReachable}
              playback={device.playback}
            />
          </Col>
        )}

        {device.volume != null && (
          <Col flex="auto">
            <Volume
              id={device.id}
              type={device.type}
              isReachable={device.isReachable}
              volume={device.volume}
            />
          </Col>
        )}

        {device.playItem != null && (
          <Col style={{ textAlign: 'center', flexBasis: '100%' }}>
            Now playing: {device.playItem}
          </Col>
        )}

        {device.nextPlayItem != null && (
          <Col style={{ textAlign: 'center', flexBasis: '100%' }}>
            Next: {device.nextPlayItem}
          </Col>
        )}

        {device.playItemImageURL != null && (
          <Col flex="auto">
            <Image preview={false} src={device.playItemImageURL} />
          </Col>
        )}
      </Row>
    </Card>
  )
}

export default Device
