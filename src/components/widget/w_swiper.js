import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { PanelFlx } from '../panel';
import styled from 'styled-components';

export const SwiperWrap = ({ data , loading}) => {
    useEffect(() => {
        console.log(data)
        
    }, [data])

    const getDay = (tiemstamp) => {
        const date = new Date(tiemstamp);
        const getYear = date.getFullYear()
        const getMonth = date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1;
        const getDate = date.getDate();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${getYear}년 ${getMonth}월 ${getDate}일 `
    }
    return (
        <>
            {
                loading ? <Swiper
                    // install Swiper modules
                    spaceBetween={24}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Navigation, Autoplay]}

                >
                    {
                        Object.values(data).map((ele, index) => {
                            getDay(ele.publishedAt)
                            return (
                                <SwiperSlide key={index}>
                                    <PanelFlx flex={'auto'} flexDirection={'column'} width={'auto'}>
                                        <LinkWrap href={ele.url} target='_blank'>
                                            <img src={ele.urlToImage} onError={i=> i.target.style.display='none'} />
                                            <InfoWrap className='info__wrap'>
                                                <div>{getDay(ele.publishedAt)}</div>
                                                <div>{ele.title}</div>
                                            </InfoWrap>
                                        </LinkWrap>
                                    </PanelFlx>
                                </SwiperSlide>
                            )

                        })
                    }
                </Swiper> : <SwiperWrapLoading loading={loading} />
        }
        </>
    )
}
export const SwiperWrapLoading = ({loading }) => {
   
    const arr = Array.from({ length: 10 }, (undefined, i) => i); 
    return (
        <Swiper
            // install Swiper modules
            allowTouchMove={false}
            spaceBetween={24}
            slidesPerView={'auto'}
            centeredSlides={true}
            scrollbar={{ draggable: true }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className='loading'

        >
            {
                arr.map((ele, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <PanelFlx flex={'auto'} flexDirection={'column'} width={'auto'}>
                                <LinkWrapLoading>
                                    <InfoWrap className='info__wrap'  >
                                    </InfoWrap>
                                </LinkWrapLoading>
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

        //loading true
        /* background: ${props => props.theme.loadingtheme};
        background-size: 200% 100%;
        background-position: 100% 0;
        animation: loadingValue 1.5s infinite; */
    }
    img {
        height: 100%;
    }

    &:hover:after {
        background-color: rgba(0,0,0,0.6);
    }
    @keyframes loadingValue {
        100% {
            background-position: -96% 0;
        }
    }
`
const LinkWrapLoading = styled.a`
    position: relative;
    pointer-events: none;

    &:after {
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        //loading true
        transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        background: ${props => props.theme.loadingtheme};
        background-size: 200% 100%;
        background-position: 100% 0;
        animation: loadingValue 1.5s infinite;
    }
    img {
        height: 100%;
    }

    &:hover:after {
        background-color: rgba(0,0,0,0.6);
    }
    @keyframes loadingValue {
        100% {
            background-position: -96% 0;
        }
    }
`

const InfoWrap = styled.div`
    z-index : 10;
    position: absolute;
    bottom: 12px;
    left: 12px;
    padding: 0 24px 0 0;

    

    div {
        &:last-child {
            margin-top: 6px;
            font-size: 20px;
            font-weight: 700;
        }
    }

    * {
        color : #fff;
    }

    
`