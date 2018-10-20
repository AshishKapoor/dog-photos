import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      dogData: {},
      error: null,
    };
  }

  getDogData = () => {
    this.setState({
      loading: true,
    });
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      this.setState({
        dogData: data,
        loading: false,
      });
    })
    .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    this.getDogData();
  }

  render() {
    const { error, loading, dogData } = this.state;
    return (
      <Layout>
        <h1>Your <button onClick={this.getDogData}>random</button> dog photo of the day</h1>
        <div>{error && error}</div>
        <div>{loading ? "loading..." : <img alt='dog photos' src={dogData && dogData.message} />}</div>
        <p><Link to="/breeds-list/">Breeds list</Link></p>
      </Layout>
    );
  }
}

export default IndexPage;
