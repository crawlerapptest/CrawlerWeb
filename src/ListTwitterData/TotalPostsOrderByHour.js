import React, {Component} from 'react';
import axios from 'axios';

class TotalPostsOrderByHour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPosts: null,
    };
  }

  async componentDidMount() {
    const totalPosts = (await axios.get('https://twittercrawlerapi.herokuapp.com/list/TotalPostsOrderByHour')).data;
    this.setState({
        totalPosts,
    });
  }

  render() {
    return (
      <div className="container">
      <h3>Quantidade de posts por hora do dia</h3><br/>
        <div className="row">
          {this.state.totalPosts === null && <p>Carregando lista de dados...</p>}
          {
            this.state.totalPosts && this.state.totalPosts.map(data => (
              <div key={data._id} className="col-sm-12 col-md-4 col-lg-3">
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Hora</div>
                    <div className="card-body">
                      <h4 className="card-title"> {data.hour}:00</h4>
                      <p className="card-text">Total de Posts: {data.totalposts}</p>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default TotalPostsOrderByHour;