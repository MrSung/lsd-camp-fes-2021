import Image from 'next/image'
import styled from 'styled-components'

import { Style } from '@/const/style'

interface ILayerImageProps {
  src: StaticImageData
  alt: string
  width: number
  height: number
  layerPosition: 'leftBottom' | 'rightBottom'
  layerColor: typeof Style.COLOR.MANGO_TANGO | typeof Style.COLOR.STRAW
}

export const LayerImage = ({
  src,
  alt,
  width,
  height,
  layerPosition,
  layerColor,
}: ILayerImageProps) => (
  <Wrapper layerPosition={layerPosition}>
    <Container width={width} height={height}>
      <BackgroundLayer layerPosition={layerPosition} layerColor={layerColor} />
      <Image src={src} alt={alt} />
    </Container>
  </Wrapper>
)

const LAYER_OFFSET_SMALL = 16
const LAYER_OFFSET_LARGE = 40

interface IWrapperProps {
  layerPosition: ILayerImageProps['layerPosition']
}

const Wrapper = styled.div<IWrapperProps>`
  margin-bottom: ${LAYER_OFFSET_SMALL}px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    margin-bottom: ${LAYER_OFFSET_LARGE}px;
  }

  ${({ layerPosition }) => {
    switch (layerPosition) {
      case `leftBottom`:
        return `
          margin-left: ${LAYER_OFFSET_SMALL}px;

          @media (min-width: ${Style.BREAKPOINT.MD}px) {
            margin-left: ${LAYER_OFFSET_LARGE}px;
          }
        `
      case `rightBottom`:
        return `
          margin-right: ${LAYER_OFFSET_SMALL}px;

          @media (min-width: ${Style.BREAKPOINT.MD}px) {
            margin-right: ${LAYER_OFFSET_LARGE}px;
          }
        `
    }
  }}
`

interface IContainerProps {
  width: ILayerImageProps['width']
  height: ILayerImageProps['height']
}

const Container = styled.div<IContainerProps>`
  position: relative;
  max-width: 100%;
  height: auto;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
`

interface IBackgroundLayer {
  layerPosition: ILayerImageProps['layerPosition']
  layerColor: ILayerImageProps['layerColor']
}

const BackgroundLayer = styled.div<IBackgroundLayer>`
  position: absolute;
  bottom: -${LAYER_OFFSET_SMALL}px;
  width: 100%;
  height: 100%;
  background-color: ${({ layerColor }) => layerColor};

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    bottom: -${LAYER_OFFSET_LARGE}px;
  }

  ${({ layerPosition }) => {
    switch (layerPosition) {
      case `leftBottom`:
        return `
          left: -${LAYER_OFFSET_SMALL}px;

          @media (min-width: ${Style.BREAKPOINT.MD}px) {
            left: -${LAYER_OFFSET_LARGE}px;
          }
        `
      case `rightBottom`:
        return `
          right: -${LAYER_OFFSET_SMALL}px;

          @media (min-width: ${Style.BREAKPOINT.MD}px) {
            right: -${LAYER_OFFSET_LARGE}px;
          }
        `
    }
  }}
`
