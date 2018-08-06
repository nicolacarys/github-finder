import React, { Component } from 'react';
import axios from 'axios';

import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import NoUser from '../components/NoUser';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			inputValue: "",
			submitValue: "Find me!",
			validUser: null,
			user: {},
			errorMessage: "",
		}

		this.updateValue = this.updateValue.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateValue(e) {
		this.setState({ inputValue: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		axios
			.get(`https://api.github.com/users/${ this.state.inputValue }`)
			.then(response => {
				if(response.data) {
					this.setState({ 
						user: response.data,
						validUser: true,
						submitValue: "You found me!",
					})
				}
			})
			.catch(error => {
				this.setState({ 
					validUser: false,
					errorMessage: "Oops! That user doesn't exist ... try again",
					submitValue: "Find me!",
				})
			})
	}

	render() {
		return (
			<div>
				<form>
					<Input value={ this.state.inputValue } changeHandler={ this.updateValue }/>
					<Button value={ this.state.submitValue } clickHandler={ this.handleSubmit }/>
				</form>

				{ this.state.validUser ? 
					<Card userData={ this.state.user }/>
					:
					<NoUser errorHelpText={ this.state.errorMessage }/>
				}

			</div>
		)
	}
}

export default Form;