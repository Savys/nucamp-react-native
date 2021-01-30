import React, { Component } from 'react';
import Directory from './DirectoryComponent';	

import CampsiteInfo from './CampsiteInfoComponent';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';	import { CAMPSITES } from '../shared/campsites';


class Main extends Component {	class Main extends Component {
    constructor(props) {	    constructor(props) {
        super(props);	        super(props);
        this.state = {	        this.state = {
            campsites: CAMPSITES	            campsites: CAMPSITES,
            selectedCampsite: null
        };	        };
    }	    }


    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId})
    }

    render() {	    render() {
        return <Directory campsites={this.state.campsites} />;	        return (
            <View style={{flex: 1}}>
                <Directory 
                    campsites={this.state.campsites} 
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
                />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(
                        campsite => campsite.id == this.state.selectedCampsite)[0]}
                />
            </View>
        );
    }	    }
}	}


