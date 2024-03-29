import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PanelFlx } from '../panel';

export const SwiperWrap = ({ data }) => {
    console.log(data)
    return (
        <Swiper
            // install Swiper modules
            spaceBetween={20}
            slidesPerView={'auto'}
            centeredSlides={true}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                Object.values(data).map((ele, index) => {
                    return (
                        <SwiperSlide>
                            <PanelFlx flex={'auto'} flexDirection={'column'} >
                                <a href={ele.url}>
                                    <img src={ele.urlToImage} />
                                    <div>{ele.title}</div>
                                </a>
                            </PanelFlx>    
                        </SwiperSlide>
                    )
                    
                })
            }
        </Swiper>
    )
}