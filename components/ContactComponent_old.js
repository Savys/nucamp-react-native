import React, { Component } from 'react';
import {ScrollView,Text} from 'react-native';
import { Card } from 'react-native-elements';
export default class Contact  extends Component{
    static navigationOptions = {
        title:'Contact Us'
    }
    render(){
        return(
            <ScrollView>
                 <Card
                    title='Contact Information'
                    wrapperStyle={{margin: 20}}
                    wrapperStyle={{marginBottom: 10}}>
                        <Text>1 Nucamp Way</Text>
                        <Text>Seattle, WA 98001</Text>
                        <Text>U.S.A.</Text>
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text>Email: campsites@nucamp.co</Text>
                    </Card>
            </ScrollView>
        )
    }
}
