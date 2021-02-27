import React from 'react';

class Coursepic extends React.Component {
  constructor(){
    super();
    //upload images
    this.state = {
      file: null
    }
    this.image = this.image.bind(this)
}
    //image upload
      image(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

  render() {
    return (
      <center> 
        <input type="file" onChange={this.image}/><br/>
        <img src={this.state.file} alt="" style={{width:'300px', height:'200px'}} />
      </center>
    );
  }
}

export default Coursepic;