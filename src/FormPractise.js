import React from "react"
import "./FormPractise.css"
export default function FormPractise() {
    const [formData,setFormData]=React.useState(
        {
            email:"",
            password:"",
            confirm_password:"",
            okayToEmail:false
        })

    
    
    //  * 3. When the user clicks "Sign up", check if the 
    //  *    password & confirmation match each other. If
    //  *    so, log "Successfully signed up" to the console.
    //  *    If not, log "passwords to not match" to the console.
    //  * 4. Also when submitting the form, if the person checked
    //  *    the "newsletter" checkbox, log "Thanks for signing
    //  *    up for our newsletter!" to the console.
    function handleChange(event){
        const { name,value,type,checked}=event.target
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password!==formData.confirm_password){
            console.log("passwords do not match")
        }
        else {
            console.log("Successfully signed up")
            if (formData.okayToEmail){
                console.log("Thanks for signing up for our newsletter!")
            }
        }
        console.log(formData)
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirm_password"
                    onChange={handleChange}
                    value={formData.confirm_password}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        onChange={handleChange}
                        checked={formData.okayToEmail}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>

                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
