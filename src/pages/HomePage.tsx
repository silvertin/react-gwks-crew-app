import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination} from 'swiper';
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { PageTagProps } from "./interface/PageInterface";

SwiperCore.use([Navigation, Pagination])

const HomePage = (props: PageTagProps) => {
    return (
        <>
            <header>
                <h3>{props.title}</h3>
            </header>
            <main>
                <Swiper
                    className="banner"
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img src={"https://i.picsum.photos/id/995/388/450.jpg?hmac=wVsm3ShvQtdZlSwnHlfVLnultsYE5tsN85GNkofpEJU"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"https://i.picsum.photos/id/811/388/450.jpg?hmac=xNpNZ2_Rsw15SwXoYDR3UDwgcsqw93HisMCzSFmimqY"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"https://i.picsum.photos/id/250/388/450.jpg?hmac=C2e7MWQSfGbqAwjorn5l9EUX-q5L-d4Dx8ly8pasAyQ"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"https://picsum.photos/388/450"} />
                    </SwiperSlide>
                </Swiper>
            </main>
        </>
    )
}

export default HomePage;
