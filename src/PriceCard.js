import React from 'react';

class PriceCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected
        }
    }

    static defaultProps = {
        hotelId: null,
        roomId: null,
        id: null,
        price: null,
        showAccommodationInfo: true,
        selected: false,
        nightCount: null,
        moonIcon: "fa fa-moon-o",
        adultCount: null,
        adultIcon: "fa fa-user",
        childCount: null,
        childIcon: "fa fa-child",
        showMoonIcon: true,
        showAdultIcon: true,
        showChildIcon: true,
        features: null,
        showMoreInfoButton: true,
        moreInfoButtonTitle: null,
        customMoreInfoButtonComponent: null,
        onClickPriceMoreInfo: null,
        onSelectPrice: null
    }

    handleChange = (isSelected) => {
        this.setState({selected: isSelected}, () => {
            if(this.props.onSelectPrice && typeof(this.props.onSelectPrice) === "function"){
                this.props.onSelectPrice(this.props.hotelId, this.props.roomId, this.props)
            }
        });
    }

    render(){
        return(
            <div className="p-3 bg-white border-bottom">
                <div className="info">
                    {this.props.features && this.props.features.map((feature, index) => {
                        return <span key={`priceFeature_${index}`}><i className={`${feature.icon} text-muted`} /> <small className={feature.bold ? 'spec-text-color' : 'text-muted'}>{feature.title}</small></span>
                    })}
                </div>
                <div className="d-flex justify-content-between mt-3">
                    {this.props.showMoreInfoButton && !this.props.customMoreInfoButtonComponent &&
                        <a className="more" style={{cursor: "pointer"}} onClick={() => {
                            if(typeof(this.props.onClickPriceMoreInfo) === "function"){
                                this.props.onClickPriceMoreInfo(this.props.hotelId, this.props.roomId, this.props)
                            }
                        }}>{this.props.moreInfoButtonTitle}</a>
                    }
                    {this.props.showMoreInfoButton && this.props.customMoreInfoButtonComponent}
                    <div className="d-flex flex-row align-items-center spec">
                        {this.props.showAccommodationInfo &&
                            <>
                                {this.props.nightCount && <span className="text-muted">{this.props.showMoonIcon && <i className={`${this.props.moonIcon}`} />} {this.props.nightCount}</span>}
                                {this.props.adultCount && <span className="text-muted">{this.props.showAdultIcon && <i className={`${this.props.adultIcon}`} />} {this.props.adultCount}</span>}
                                {this.props.childCount && <span className="text-muted">{this.props.showChildIcon && <i className={`${this.props.childIcon}`} />} {this.props.childCount}</span>}
                            </>
                        }
                        <span className="text-primary font-weight-bold">{this.props.price}</span>
                        <div className="form-check ml-2">
                            <input name={`roomPriceRow_${this.props.roomId}`} className="form-check-input" type="radio" defaultChecked={this.state.selected} onClick={e => this.handleChange(e.target.checked)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriceCard;
