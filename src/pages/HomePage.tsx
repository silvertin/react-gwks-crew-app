import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination} from 'swiper';
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { PageTagProps } from "./interface/PageInterface";
import Header from "../layout/Header";

SwiperCore.use([Navigation, Pagination])

const HomePage = (props: PageTagProps) => {
    return (
        <>
            <Header title={props.title} />
            <main>
                <Swiper
                    className="banner"
                    spaceBetween={50}
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide style={{textAlign: 'center'}}>
                        <img src={"https://i.picsum.photos/id/995/388/450.jpg?hmac=wVsm3ShvQtdZlSwnHlfVLnultsYE5tsN85GNkofpEJU"} />
                    </SwiperSlide>
                    <SwiperSlide style={{textAlign: 'center'}}>
                        <img src={"https://i.picsum.photos/id/811/388/450.jpg?hmac=xNpNZ2_Rsw15SwXoYDR3UDwgcsqw93HisMCzSFmimqY"} />
                    </SwiperSlide>
                    <SwiperSlide style={{textAlign: 'center'}}>
                        <img src={"https://i.picsum.photos/id/250/388/450.jpg?hmac=C2e7MWQSfGbqAwjorn5l9EUX-q5L-d4Dx8ly8pasAyQ"} />
                    </SwiperSlide>
                    <SwiperSlide style={{textAlign: 'center'}}>
                        <img src={"https://picsum.photos/388/450"} />
                    </SwiperSlide>
                </Swiper>
            </main>
        </>
    )
}

export default HomePage;
