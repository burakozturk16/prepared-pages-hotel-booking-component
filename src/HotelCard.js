import './index.css';
import React from 'react';
import RoomCard from "./RoomCard";

class HotelCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkIn: this.props.checkInDate ? new Date(this.props.checkInDate) : new Date(),
            checkOut: this.props.checkOutDate ? new Date(this.props.checkOutDate) : new Date(),
            accommondationNights: Math.round(Math.abs((this.props.checkOutDate - this.props.checkInDate) / 86400000))
        }
    }

    static defaultProps = {
        id: null,
        showHeader: true,
        headerStyle: null,
        hotelName: null,
        showStars: true,
        stars: 0,
        subTitle: null,
        headerRightView: null,
        backgroundColor: '#eee',
        rooms: null,
        showFooter: true,
        showDates: true,
        checkInLabel: "Check-In",
        checkOutLabel: "Check-Out",
        checkInDate: null,
        checkOutDate: null,
        showNightsBetweenDates: true,
        showDatesButton: true,
        datesButtonTitle: null,
        customDatesButtonComponent: null,
        showFooterInfo: true,
        footerInfoTitle: null,
        footerInfoSubtitle: null,
        customFooterInfoComponent: null,
        showFooterButton: true,
        footerButtonTitle: null,
        customFooterButton: null,
        onSelectPrice: null,
        onClickRoomImage: null,
        onClickPriceMoreInfo: null,
        onDatesButtonClick: null,
        onClickFooterButton: null,
        monthNames : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }

    render(){
        return(
            <>
                {this.props.showHeader && this.props.hotelName &&
                    <div className="p-1 px-3" style={{...this.props.headerStyle}}>
                        <div className="d-flex flex-row align-items-center">
                            <h5 className="hotelName" style={{marginBottom: 0}}>{this.props.hotelName}</h5>
                            {this.props.showStars &&
                            <span className="ratings ml-2">
                                    <i className={`fa fa-star ${this.props.stars > 0 ? 'star_filled' : null}`} />
                                    <i className={`fa fa-star ${this.props.stars > 1 ? 'star_filled' : null}`} />
                                    <i className={`fa fa-star ${this.props.stars > 2 ? 'star_filled' : null}`} />
                                    <i className={`fa fa-star ${this.props.stars > 3 ? 'star_filled' : null}`} />
                                    <i className={`fa fa-star ${this.props.stars > 4 ? 'star_filled' : null}`} />
                                </span>
                            }
                        </div>
                        <div className="mt-0 d-flex justify-content-between">
                            <span>{this.props.subTitle}</span>
                            {this.props.headerRightView}
                        </div>
                    </div>
                }
                <div className="px-5 p-2 listing" style={{backgroundColor: this.props.backgroundColor}}>
                    {this.props.rooms && this.props.rooms.map((room, index) => {
                        return <RoomCard
                            key={`roomCard${index}`}
                            hotelId={this.props.id}
                            id={room.id}
                            photo={room.photo}
                            title={room.title}
                            features={room.features}
                            extraInfoComponent={room.extraInfoComponent}
                            prices={room.prices}
                            onClickPriceMoreInfo={this.props.onClickPriceMoreInfo}
                            onClickRoomImage={this.props.onClickRoomImage}
                            onSelectPrice={this.props.onSelectPrice}
                        />
                    })}

                    {!this.props.rooms && this.props.children}
                </div>
                {this.props.showFooter &&
                    <>
                        {this.props.showDates &&
                        <div className="bg-white p-2 px-3 border-bottom">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="check-in">
                                            <span>{this.props.checkInLabel}</span>
                                            <div className="d-flex flex-row align-items-center">
                                                <h1 className="date-o">{this.state.checkIn.getDate()}</h1>
                                                <div className="d-flex flex-column ml-2 date"> <span>{this.props.monthNames[this.state.checkIn.getMonth()]} {this.state.checkIn.getFullYear()}</span> <span>{this.props.dayNames[this.state.checkIn.getDay()]}</span> </div>
                                            </div>
                                        </div>

                                        {this.props.showNightsBetweenDates &&
                                            <div className="d-flex flex-column align-items-center">
                                                <i className="fa fa-moon-o" />
                                                <small>{this.state.accommondationNights}</small>
                                            </div>
                                        }
                                        <div className="check-out">
                                            <span>{this.props.checkOutLabel}</span>
                                            <div className="d-flex flex-row align-items-center">
                                                <h1 className="date-o">{this.state.checkOut.getDate()}</h1>
                                                <div className="d-flex flex-column ml-2 date"> <span>{this.props.monthNames[this.state.checkOut.getMonth()]} {this.state.checkOut.getFullYear()}</span> <span>{this.props.dayNames[this.state.checkOut.getDay()]}</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-right d-flex flex-column mt-4">
                                        {this.props.showDatesButton && !this.props.customDatesButtonComponent &&
                                            <a className="text-primary" style={{cursor: "pointer"}} onClick={this.props.onDatesButtonClick}>{this.props.datesButtonTitle}</a>
                                        }

                                        {this.props.showDatesButton && this.props.customDatesButtonComponent}
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        <div className="complete p-3 mt-2">
                            {this.props.showFooterInfo && !this.props.customFooterInfoComponent &&
                                <div className="text-left">
                                    <span className="d-block">{this.props.footerInfoTitle}</span>
                                    <span className="text-success">{this.props.footerInfoSubtitle}</span>
                                </div>
                            }

                            {this.props.showFooterInfo &&
                                <div className="text-left">
                                    {this.props.customFooterInfoComponent}
                                </div>
                            }

                            <div className="text-center mt-4 mb-4">
                                {this.props.showFooterButton && !this.props.customFooterButton && this.props.footerButtonTitle &&
                                    <button className="btn btn-danger booking" onClick={this.props.onClickFooterButton}>{this.props.footerButtonTitle}</button>
                                }

                                {this.props.showFooterButton &&
                                    this.props.customFooterButton
                                }
                            </div>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default HotelCard;
