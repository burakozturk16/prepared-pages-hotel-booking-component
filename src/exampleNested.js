import React from 'react';
import ReactDOM from 'react-dom';
import HotelCard from "./HotelCard";
import RoomCard from "./RoomCard";
import PriceCard from "./PriceCard";

class App extends React.Component {

    selectPrice = (hotelId, roomId, priceDetails) => {

    }

    clickImage = (hotelId, roomId, imageDetails) => {

    }

    onClickPriceMoreInfoButton = (hotelId, roomId, priceDetails) => {

    }

    clickDatesButton = () => {

    }

    clickFooterButton = () => {

    }

    render(){
        return(
            <HotelCard
                hotelName="React Delux Resort Hotel"
                subTitle="Double family rooms, 2 adults"
                stars={4}
                footerInfoTitle="Cancellation Policy"
                footerInfoSubtitle="Until 23 Dec 23:00 GMT 100% Money Back"
                footerButtonTitle="Complete Booking"
                checkInDate={new Date()}
                checkOutDate={new Date(new Date().getTime()+(5*24*60*60*1000))}
                onSelectPrice={this.selectPrice}
                onClickRoomImage={this.clickImage}
                onDatesButtonClick={this.clickDatesButton}
                onClickFooterButton={this.clickFooterButton}
                onClickPriceMoreInfo={this.onClickPriceMoreInfoButton}
            >
                <RoomCard
                    hotelId={1}
                    id={1}
                    photo="https://i.imgur.com/ZGnpeai.jpg"
                    title="Superior Suit Corner"
                    onSelectPrice={this.selectPrice}
                    features={[
                        {icon: "fa fa-bed", title: "King Bed"},
                        {icon: "fa fa-user", title: "Max 2"},
                        {icon: "fa fa-wifi", title: "Free Wifi"}
                    ]}
                >
                    <PriceCard
                        hotelId={1}
                        roommId={1}
                        id={1}
                        price="$100"
                        moreInfoButtonTitle="Check Room"
                        features={[
                            {icon: "fa fa-info-circle", title: "Non Refundable", bold: false},
                            {icon: "fa fa-car", title: "Free Parking", bold: true},
                        ]}
                    />

                    <PriceCard
                        hotelId={1}
                        roommId={1}
                        id={1}
                        price="$200"
                        moreInfoButtonTitle="Check Room"
                        features={[
                            {icon: "fa fa-info-circle", title: "Non Refundable", bold: false},
                            {icon: "fa fa-car", title: "Free Parking", bold: true},
                        ]}
                    />
                </RoomCard>
            </HotelCard>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
