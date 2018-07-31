import React, { Component } from 'react'
import { func } from 'prop-types'
import falcon from '../assets/images/falcon.png'
import spaceship from '../assets/audios/spaceship.wav'

export default class TravelButton extends Component {

  static propTypes = {
    planetInfo: func.isRequired,
    playAudio: func.isRequired
  }

  // Fetch the API data and play audio when the ship is clicked
  shipClicked = () => {
    this.props.planetInfo()
    this.props.playAudio()
  }

  render() {
    return (
      <div className='bottom-container'>
        <div className='btn'>
          <img
            onClick={this.shipClicked}
            onKeyPress={this.shipClicked}
            className='btn__image'
            src={falcon}
            alt='Millennium Falcon'
            role='button'
            tabIndex='0'
          />
          <span className='btn__text'>Next planet</span>
        </div>
        <audio
          className='audio'
          src={spaceship}
          type='audio/wav'
          aria-label='Millennium Falcon engine'>
          <p>Your browser does not support audio.</p>
        </audio>
      </div>
    )
  }
}
