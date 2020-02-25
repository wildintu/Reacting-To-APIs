import React, {Component} from 'react';
// import App from './App'

class Card extends Component {
        render() {
          return (
            <React.Fragment>
              <div className="card d-flex justify-content-center mt-3" style={{ width: "45rem" }}>
                <h4 className="chirpheader text-center card-header p-0 bg-info text-white">
                  {`${this.props.name}`}
                </h4>
                <p className="chirpbody text-center card-body text-secondarye">
                  {`${this.props.desc}`}
                </p>
                <p className="chirpbody text-center card-body text-secondarye">
                  {this.props.prop}
                </p>
              </div>
            </React.Fragment>
          );
        }
}

export default Card;