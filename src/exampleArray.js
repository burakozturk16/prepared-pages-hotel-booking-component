import React from 'react';
import ReactDOM from 'react-dom';
import HotelCard from "./HotelCard";

const rooms = [
    {
        id: 1,
        photo: "https://i.imgur.com/ZGnpeai.jpg",
        title: "Superior Suit Corner",
        extraInfoComponent: null,
        features: [
            {icon: "fa fa-bed", title: "King Bed"},
            {icon: "fa fa-user", title: "Max 2"},
            {icon: "fa fa-wifi", title: "Free Wifi"}
        ],
        prices: [
            {
                id: 1,
                price: "$200",
                selected: true,
                nightCount: 2,
                moonIcon: "fa fa-moon-o",
                adultCount: 2,
                adultIcon: "fa fa-user",
                childCount: 1,
                childIcon: "fa fa-child",
                showAccommodationInfo: true,
                showMoonIcon: true,
                showAdultIcon: true,
                showChildIcon: true,
                features: [
                    {icon: "fa fa-info-circle", title: "Non Refundable", bold: false},
                    {icon: "fa fa-car", title: "Free Parking", bold: true},
                ],
                showMoreInfoButton:true,
                moreInfoButtonTitle: "Availability Calendar",
                onClickMoreInfoButton: null,
                customMoreInfoButtonComponent: null
            },
            {
                id: 2,
                price: "$100",
                selected: false,
                nightCount: "for 2 nights",
                moonIcon: "fa fa-moon-o",
                adultCount: 2,
                adultIcon: "fa fa-user",
                childCount: null,
                childIcon: "fa fa-child",
                showAccommodationInfo: true,
                showMoonIcon: false,
                showAdultIcon: true,
                showChildIcon: false,
                showMoreInfoButton: true,
                moreInfoButtonTitle: "Availability Calendar",
                onClickMoreInfoButton: null,
                customMoreInfoButtonComponent: null,
                features: [
                    {icon: "fa fa-info-circle", title: "Free Refundable", bold: true}
                ],
            }
        ]
    }
]

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
                rooms={rooms}
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
            </HotelCard>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
