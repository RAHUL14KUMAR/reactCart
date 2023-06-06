import React,{useState} from 'react'
import { Button, Form } from "react-bootstrap";
import {useStateValue} from '../StateProvider'

function Filter() {
    const[{basket},dispatch]=useStateValue();

    const[ince,setInce]=useState(false);
      const change=()=>{
        if(ince){
          dispatch({
            type:"INCLUDE_ELECTRIC",
            payload:true
          })
        }
      }

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={()=>{
            dispatch({
              type:"SORT_BY_PRICE",
              payload:"lowtohigh"
            })
          }}
          />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={()=>{
            dispatch({
              type:"SORT_BY_PRICE",
              payload:"hightolow"
            })
          }}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include electric"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onClick={()=>setInce(!ince)}
          onChange={change}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include toy"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
      <Form.Check
          inline
          label="Include clothes"
          name="group1"
          type="checkbox"
          id={`inline-5`}
        />
      </span>
      <Button
        variant="light"
        onClick={()=>window.location.reload()}
      >
        Clear Filters
      </Button>
    </div>
  )
}

export default Filter
