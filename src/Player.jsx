import React, {Component} from 'react';

class Player extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            trainings: [],
            attendances: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/players/1')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({name: data.player.name, attendances: data.player.attendances[0].player_id});
            })
            console.log('state', this.state.name);
    }

    render() {
        return (
          <div>
              {this.state.name}
              {this.state.attendances}
          </div>
        );
    }
}

export default Player
