import { useEffect } from 'react';
import { Swiper, SwiperSlide, Autoplay } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import { PanelFlx } from '../panel';
import styled from 'styled-components';

export const SwiperWrap = ({ data }) => {
    useEffect(() => {
        console.log(data)
        
    }, [data])
    return (
        <Swiper
            // install Swiper modules
            spaceBetween={12}
            slidesPerView={'auto'}
            centeredSlides={true}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onActiveIndexChange={(e) => {
                console.log(e)
            }}
            autoplay={true}
        >
            {
                Object.values(data).map((ele, index) => {
                    return (
                        <SwiperSlide>
                            <PanelFlx flex={'auto'} flexDirection={'column'} width={'auto'}>
                                <LinkWrap href={ele.url}>
                                    <img src={ele.urlToImage} />
                                    <InfoWrap className='info__wrap'>
                                        <div>{ele.publishedAt}</div>
                                        <div>{ele.title}</div>
                                        {/* <div>{ele.description}</div> */}

                                    </InfoWrap>
                                </LinkWrap>
                            </PanelFlx>    
                        </SwiperSlide>
                    )
                    
                })
            }
        </Swiper>
    )
}

const LinkWrap = styled.a`
    position: relative;

    &:after {
      content:'';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
      transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    img {
        height: 100%;
    }

    &:hover:after {
        background-color: rgba(0,0,0,0.6);
    }
`

const InfoWrap = styled.div`
z-index : 10;
position: absolute;
bottom: 12px;
left: 12px;

div {
    transform: translateY(-16px)
}

* {
    color : #fff;
}
`