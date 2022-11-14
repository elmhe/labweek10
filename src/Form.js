import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            fullName: "",
            address: "",
            address2: "",
            city: "",
            province: "",
            postalCode: ""
        }

        this.provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]
    }

    onSubmitData = (event) => {
        event.preventDefault()
        console.log(this.state)
        
    }


    onValueChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(data) {this.setState({formData: data})}

    render(){
        return(
            <>
                <h1 className="App">Data Entry Form</h1>
                <form className="box" onSubmit={ e => this.onSubmitData(e)}>
                    <div>
                        <h3>Email</h3>
                        <h4>
                             <input className="input" onChange={ e => this.onValueChange(e)} type="text" name="email" placeholder="Enter Email"/>
                        </h4>
                        
                    </div>

                    <div>
                        <h3>Name</h3>
                        <h4>
                            <input className="input" onChange={ e => this.onValueChange(e)} type="text" name="fullName" placeholder="Enter Full Name"/>
                        </h4>
                    </div>

                    <div>
                        <h3>Address</h3>
                        <h4>
                            <input className="input" onChange={ e => this.onValueChange(e)} type="text" name="address" placeholder="123 Main St"/>
                        </h4>
                    </div>

                    <div>
                        <h3>Address 2</h3>
                        <h4>
                            <input className="input" onChange={ e => this.onValueChange(e)} type="text" name="address2" placeholder="Apartment, studio, or floor"/>
                        </h4>
                    </div>

                    <div>
                        <h3>City</h3>
                        <h4>
                            <input className="input" onChange={ e => this.onValueChange(e)} type="text" name="city" placeholder=""/>
                        </h4>
                    </div>

                    <div>
                        <h3>Province</h3>
                        <h4>
                            <select className="input" name="province" onChange={ e => this.onValueChange(e)}>
                                {
                                    this.provinces.map((province) => (
                                        <option key={province} value={province}>{province}</option>
                                    ))
                                }
                            </select>
                        </h4>
                    </div>
                    
                    <div>
                        <h3>Postal Code</h3>
                        <h4>
                            <input className="input" onChange={ e => this.onValueChange(e)} type="text" name="postalCode" placeholder=""/>
                        </h4>
                    </div>
                    
                    <div>
                        <input type="checkbox" name="agree" />Agree Terms & Condition?
                    </div>
                    
                    <div>
                        <button className="submit" type="submit" value="Submit">Submit</button>  
                    </div>  
                </form>

                <div className="App">
                    {
                        
                    }
                    <h3>Email: {this.state.email}</h3>
                    <h3>Name: {this.state.fullName}</h3>
                    <h3>Address: {this.state.address}</h3>
                    <h3>City: {this.state.city}</h3>
                    <h3>Province: {this.state.province}</h3>
                    <h3>Postal Code: {this.state.postalCode}</h3>
                </div>
            </>
        )
    }
}

export default Form;