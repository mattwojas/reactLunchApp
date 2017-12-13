import React, {Component} from 'react';
import { connect } from 'react-redux';

class Lunches extends Component {
    render() {
        console.log("props",this.props);
        return (
            <div>
                 <h1>Lunches</h1>
                <div className="lunchWrap">
                     
                    {this.props.lunches.map((lunch, index) => {
                    return (
                        <div className="lunch" key={index}>
                            <div className="title">{lunch.name} - {index}</div>
                            <div className="subTitle">food place with a {lunch.rating} rating</div>
                        </div>
                    )
                    })}
                </div>
            </div>
        )        
    }
}

function mapStateToProps(state, ownProps) {
    return {
        lunches: state.lunches
    };
}

export default connect(mapStateToProps)(Lunches);