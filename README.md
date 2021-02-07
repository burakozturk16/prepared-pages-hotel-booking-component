# React Hotel Booking Component
I decided to create some prepared pages for react apps like
- Hotel Booking Page (You are here)
- Login Page
- User Profile Page
- etc.
  
[![npm (scoped)](https://img.shields.io/npm/v/prepared-pages-hotel-booking-component.svg)](https://www.npmjs.com/package/prepared-pages-hotel-booking-component)

The main name is **React Prepared Pages Set** of this component series, so that's why the package names starts with prepared-pages.


## Installation

```sh
npm install --save prepared-pages-hotel-booking-component
```

## Contributing
Feel free to make a PR :) They are always welcome

## Structure
The Hotel Booking Page Component has 3 components which are you can use separately.

- ``HotelCard`` 
- ``RoomCard``
- ``PriceCard``

## Props of HotelCard
| Name               | Default     | Description
| ----------------   | ----------- | ------------------------------------------------------------------------------------------------------------
| id                 |             | User specific key 
| showHeader         | `true`      |                  
| headerStyle        |             |                  
| hotelName          |             |                  
| showStars          | `true`      |                  
| stars              | `0`         |                  
| subTitle           |             |
| headerRightView    |             | Component
| backgroundColor    |             |
| rooms              |             | You can use as array or Nested Component
| showFooter         | `true`      |
| showDates          | `true`      |  
| checkInLabel       | `Check-In`  |
| checkOutLabel      | `Check-Out` |
| checkInDate        | `new Date()`|
| checkOutDate       | `new Date()`|
| showNightsBetweenDates | `true`  |
| showDatesButton    | `true`      |
| datesButtonTitle   |             |
| customDatesButtonComponent |     | Component
| showFooterInfo     | `true`      | 
| footerInfoTitle    |             |
| footerInfoSubtitle |             |
| customFooterInfoComponent |      | Component
| showFooterButton  | `true`       |
| footerButtonTitle |              |
| customFooterButton |             | Component  
| monthNames        | `array`      |
| dayNames          | `array`      |

## Props of RoomCard
| Name               | Default     | Description
| ----------------   | ----------- | ------------------------------------------------------------------------------------------------------------
| hotelId            |             | User specific key
| roomId             |             | User specific key
| id                 |             | User specific key
| photo              |             |
| title              |             |
| features           | `array`     |
| extraInfoComponent |             | Component
| prices             |             | You can use as array or Nested Component
| photo              |             |


## Props of PriceCard
| Name               | Default     | Description
| ----------------   | ----------- | ------------------------------------------------------------------------------------------------------------
| hotelId            |             | User specific key
| roomId             |             | User specific key
| id                 |             | User specific key
| price              |             |
| showAccommodationInfo| `true`    |
| selected           | `false`     |
| nightCount         |             | Component
| moonIcon           | `fa fa-moon-o`| 
| adultCount         |             |
| adultIcon          | `fa fa-user`|
| childCount         |             |
| childIcon          | `fa fa-child`|
| showMoonIcon       | `true`    |
| showAdultIcon      | `true`    |
| showChildIcon      | `true`    |
| features           | `array`   |
| showMoreInfoButton | `true`    |
| moreInfoButtonTitle|           |
| customMoreInfoButtonComponent|    | Component


## Events
| Name                |
| ------------------  |
| onSelectPrice       |
| onClickRoomImage    |
| onClickPriceMoreInfo|
| onDatesButtonClick  |
| onClickFooterButton |


# Styling
* View `src/index.css` for styling examples.

## Examples
* View `exampleArray.js` and `exampleNested.js` files.

## Basic Sample

```js
import HotelCard from 'prepared-pages-hotel-booking-component';

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
];


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
            />
        )
    }
}

```

![screen shot](https://github.com/burakozturk16/prepared-pages-hotel-booking-component/blob/master/ss.png)


## Arrays - RoomCard Features

The following declarative structure creates features of a room. There two properties the object needs such as ``icon``
and ``title``

```js
import RoomCard from 'prepared-pages-hotel-booking-component';

const features = [
    {icon: "fa fa-bed", title: "King Bed"},
    {icon: "fa fa-user", title: "Max 2"},
    {icon: "fa fa-wifi", title: "Free Wifi"}
]

class MyComponent extends Component {
  render() {
    return (
      <RoomCard features={features} />
    )
  }
};

```

## Arrays - PriceCard Features

The following declarative structure creates features of a price card. There three properties the object needs such as ``icon``, ``title`` and `bold`

```js
import PriceCard from 'prepared-pages-hotel-booking-component';

const features = [
    {icon: "fa fa-info-circle", title: "Non Refundable", bold: false},
    {icon: "fa fa-car", title: "Free Parking", bold: true}
]

class MyComponent extends Component {
  render() {
    return (
      <PriceCard features={features} />
    )
  }
};

```
