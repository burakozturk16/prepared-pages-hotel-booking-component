import React from "react";
import PriceCard from "./PriceCard";

class RoomCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="roomCard">
                <div className="p-2 listing-child mt-1 d-flex flex-row">
                    <img src={this.props.photo} className="rounded" style={{cursor: this.props.onClickRoomImage ? 'pointer' : ''}} width={150} onClick={() => {
                        if(typeof (this.props.onClickRoomImage) === "function"){
                            this.props.onClickRoomImage(this.props.hotelId, this.props.id, this.props.photo)
                        }
                    }} />
                    <div className="d-flex flex-column ml-2">
                        <h5>{this.props.title}</h5>
                        <div className="d-flex flex-row room-spec">
                            {this.props.features && this.props.features.map((feature, index) => {
                                return <span key={`featureRow_${index}`}><i className={`${feature.icon} text-muted`} /> {feature.title}</span>
                            })}
                        </div>
                        <div className="d-flex flex-row">
                            {this.props.extraInfoComponent}
                        </div>
                    </div>
                </div>
                {this.props.prices && this.props.prices.map((row, index) => {
                    return <PriceCard
                        key={`priceCardRow${index}`}
                        hotelId={this.props.hotelId}
                        roomId={this.props.id}
                        id={row.id}
                        price={row.price}
                        showAccommodationInfo={row.showAccommodationInfo}
                        selected={row.selected}
                        nightCount={row.nightCount}
                        moonIcon={row.moonIcon}
                        adultCount={row.adultCount}
                        adultIcon={row.adultIcon}
                        childCount={row.childCount}
                        childIcon={row.childIcon}
                        showMoonIcon={row.showMoonIcon}
                        showAdultIcon={row.showAdultIcon}
                        showChildIcon={row.showChildIcon}
                        features={row.features}
                        showMoreInfoButton={row.showMoreInfoButton}
                        moreInfoButtonTitle={row.moreInfoButtonTitle}
                        customMoreInfoButtonComponent={row.customMoreInfoButtonComponent}
                        onClickPriceMoreInfo={this.props.onClickPriceMoreInfo}
                        onSelectPrice={this.props.onSelectPrice}
                    />
                })}

                {!this.props.prices && this.props.children}
            </div>
        )
    }
}

RoomCard.defaultProps = {
    id: null,
    photo: null,
    title: null,
    features: null,
    extraInfoComponent: null,
    prices: null,
    onClickRoomImage: null,
    onSelectPrice: null,
    onClickPriceMoreInfo: null
}

export default RoomCard;
