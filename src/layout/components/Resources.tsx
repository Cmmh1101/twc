import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Resources extends Component<any, any>{
    render() {
        return (
            <div className="resources-box">
                <div className="resources-title">Resources</div>
                <hr className="new1" />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-6 col-xs-12 resources-text-left">
                            <div>
                                As Teachers Who Code, we would love to see you succeed in your transition. We are compiling a series of resources that have been useful for teachers transitioning into tech.
                            </div>
                            <ul>
                                <li>Tutorials</li>
                                <li>Cources</li>
                                <li>Podcasts</li>
                                <li>Books</li>
                            </ul>
                            <Button className="resources-button">
                                Find resources
                            </Button>
                        </div>
                        <div className="col d-none d-sm-block resources-text-right">
                            <div className="image-standin">Image</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resources;