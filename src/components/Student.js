import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
//import updateStudent from '../actions/students/update'
//import { Link } from 'react-router'
//import './StudentItem.css'
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};



export default class Student extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    batch: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    currentEvaluation: PropTypes.string,
  }
  render() {
    const { _id, firstName, lastName, profilePicture, currentEvaluation, batch } = this.props

    const tilesData = [
      {
        img: `${profilePicture}`,
        title: `${firstName} ${lastName}`,
        evaluation: `${currentEvaluation}`,
        batch: `Batch: ${batch}`
      },
    ]


    return(
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            evalutation={<span>by <b>{tile.evaluation}</b></span>}
            batch={tile.batch}
          >
            <img src={tile.img} alt="Student" />
          </GridTile>
        ))}
      </GridList>
    </div>
      // <article className="Student">
      //   <h1>
      //     <img src={profilePicture} alt="student!" className = "profilePicture"/>
      //     <Link to={`/students/${_id}`}>{firstName} {lastName}</Link> <br />
      //     {batch}
      //     {currentEvaluation}
      //   </h1>
      // </article>
    )
  }
}
