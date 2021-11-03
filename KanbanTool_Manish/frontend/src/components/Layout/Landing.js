import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landing extends Component {

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }


    render() {
        return (

            <div className="landing" style={{ 
      backgroundImage: `url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v975-background-07-b-kqkr4ukm.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d92b38f7af4f92cbb48fb96c37560242")` 
    }} >
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center"  >
                                <h1 className="display-3 mb-4"style={{fontWeight: 'bold' }}>Kanban Tool</h1>
                                <p className="lead"style={{fontWeight: 'bold' }} >
                                    Create account  or Login
                            </p>
                                <hr />
                                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                                    Sign Up
                                    </Link>
                                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps)(Landing);