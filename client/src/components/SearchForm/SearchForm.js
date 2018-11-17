import React from 'react';
import './SearchForm.css';
import { Columns, Column } from '../Grid'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: "",
      startYear: "",
      endYear: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Columns>
        <Column size="is-fullwidth has-text-centered buffer borderPlus">
          <form className="formBuffer">
            <div className="field">
              <label className="label">Topic</label>
              <div className="control">
                <input className="input" value={this.state.topic} type="text" placeholder="e.g. Animals" />
                </div>
            </div>
            <div className="field inputBuffer">
              <label className="label">Start Year</label>
              <div className="control">
                <input className="input" value={this.state.startYear} type="text" placeholder="e.g. 1978" />
              </div>
            </div>
            <div className="field inputBuffer">
              <label className="label">End Year</label>
              <div className="control">
                <input className="input" value={this.state.endYear} type="text" placeholder="e.g. 2010" />
              </div>
            </div>
            <div className="control center">
              <button className="button buttonStyle">Submit</button>
            </div>
          </form>
        </Column>
      </Columns>

    )
  }
}

export default SearchForm;

export default SearchForm;
