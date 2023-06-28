"use client";

import React, { Component } from 'react';

class Day extends React.Component {
    constructor(props) { super(props); } 
    render() {
      let cls = (this.props.selected) ? " day-active" : "";
      if (this.props.hasEvents)  cls += " has-events";
      if (this.props.hasMatches) cls += " has-matches";
      
      let day = this.props.day;
      return (
        day > 0
        ? (
          <div className={"day"+cls} onClick={e => this.props.setDay(this.props.day, e)}>
            {this.props.day}
          </div>
        ) 
        : (<div className="day day-empty"></div>)
      );
    }
  }
  
  export default Day;