import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [formData, setformData]=React.useState({
    firstName:"",
    lastName:"",
    email:"",
    comments:"",
    isFriendly:true,
    employement:"",
    favColor:""


  })
  console.log(formData.favColor)
  function handleChange(event){
    const {name,value,type,checked}=event.target
      setformData((prevFormData)=>{
        return {
          ...prevFormData,
          [name]:type==="checkbox"?checked:value
        }
      })
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData)
    console.log("Form is submitted")
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='firstName'
        onChange={handleChange}
        name="firstName"
          value={formData.firstName}
        />

        <input 
        type="text" 
        placeholder='lastName'
        onChange={handleChange}
        name="lastName"
          value={formData.lastName}
        />
        <input 
        type="email" 
        placeholder='Email'
        onChange={handleChange}
        name="email"
          value={formData.email}
        />

        <textarea 
        placeholder="Comments"
        name="comments" 
        onChange={handleChange}
        value={formData.comments}
        />
        <input 
        type="checkbox" 
        id="isFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}

        />
        <label htmlFor="isFriendly">Are you Friendly ?</label>
        <br />


        <fieldset>
          <legend>Current employment status</legend>

          <input
            type="radio"
            id="unemployed"
            name="employement"
            value="unemployement"
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employement"
            value="part-time"
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employement"
            value="full-time"
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />

        </fieldset>


        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br />

        <button>Submit</button>

      </form>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
