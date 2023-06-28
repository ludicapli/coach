"use client";

import React, { Component } from 'react';
import Image from 'next/image'
const allExercices = [
  {
    name: "abs", 
    imageURL: "/../public/abs.png",
    quantity: 0
  },
  {
    name: "declinePushUp", 
    imageURL: "/../public/declinePushUp.png",
    quantity: 0
  },
  {
    name: "dumbellFrontRise", 
    imageURL: "/../public/dumbellFrontRise.png",
    quantity: 0
  },
  {
    name: "dumbellPullOver", 
    imageURL: "/../public/dumbellPullOver.png",
    quantity: 0
  },
  {
    name: "dumbellRow", 
    imageURL: "/../public/dumbellRow.png",
    quantity: 0
  },
  {
    name: "inclineDumbellPress", 
    imageURL: "/../public/inclineDumbellPress.png",
    quantity: 0
  },
  {
    name: "inclinePushUp", 
    imageURL: "/../public/inclinePushUp.png",
    quantity: 0
  }
  ,
  {
    name: "legrise", 
    imageURL: "/../public/legrise.png",
    quantity: 0
  }
  ,
  {
    name: "legsup", 
    imageURL: "/../public/legsup.png",
    quantity: 0
  }
  ,
  {
    name: "inclineDumbellPress", 
    imageURL: "/../public/inclineDumbellPress.png",
    quantity: 0
  }
  ,
  {
    name: "pushups", 
    imageURL: "/../public/pushups.png",
    quantity: 0
  }
  ,
  {
    name: "run", 
    imageURL: "/../public/run.png",
    quantity: 0
  },
  {
    name: "squat", 
    imageURL: "/../public/squat.png",
    quantity: 0
  }


]
class Form extends React.Component {
    constructor(p) { super(p); }
    render() {
      return (
        <form onSubmit={(e) => this.props.submit(e)}>
          {/* <div className="input-group">
            <input className="input-main"
              onChange={(e) => this.props.update(e.target.value)}
              type="text" placeholder="Planned something?"
              value = {this.props.value}>
            </input>
            <button type="submit" className="btn-main">+</button>
          </div> */}

          <div className='grid justify-center grid-cols-4  p-5'>
            {allExercices.length >= 1 && allExercices.map((item) => (
              <div key={item.name} className='flex-col p-3 border-2 rounded-md'>
                <Image src={(item?.imageURL)} alt="" width={50} height={50} class="mx-auto pb-3"/>
                <div className='item-desc class="mx-auto"'>
                  <div className='flex top'>
                    {/* <h5>{item.name}</h5> */}
                  </div>
                      <div className= 'grid-row-3 text-center justify-center w-full rounded mx-auto w-full text-white bg-superRed flex'>
                        <div className="mx-auto" /* onClick={() => toggleCartItemQuantity(item._id, 'dec') }*/>
                          -
                        </div>
                        <div className=" bg-white text-superRed px-3 border-y-2 ">{item.quantity}
                        </div>
                        <div className="mx-auto" /* onClick={() => toggleCartItemQuantity(item._id, 'inc')}*/>
                          +
                        </div>
                      </div>
                </div>
              </div>
            ))}
          </div>

          
        </form>
      );
    }
  }
  
  export default Form;