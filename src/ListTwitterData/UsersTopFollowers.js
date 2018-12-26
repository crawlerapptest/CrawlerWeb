import React, {Component} from 'react';
import axios from 'axios';
import Querystring from 'query-string';


class UsersTopFollowers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listUsersTopFollowers: null,
    };
  }

  async componentDidMount() {

    const data = {
      grant_type: 'client_credentials',
      client_id: 'TH441cFF9PITMRRSDnsRulGnbND8C5LQ',
      client_secret: 'sUYdFRpkMeDCw4lq',
    };

    let USER_TOKEN =""
    const TOKEN_URL = 'https://crawlerappcase2018-eval-prod.apigee.net/oauth/client_credential/accesstoken?grant_type=client_credentials'
    const URL = 'https://crawlerappcase2018-eval-prod.apigee.net/crawlerapi/list/AllUsersOrderByTopFollowers'

    axios.post(TOKEN_URL, Querystring.stringify(data),{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    .then(response => {
      console.log(response.data);
      USER_TOKEN = response.data.access_token;
      console.log('userresponse ' + response.data.access_token);
    })
    .catch((error) => {
      console.log('error ' + error);
    });

    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    const listUsersTopFollowers = (await axios.get(URL),{ headers: { Authorization: AuthStr } }).data;
    this.setState({
      listUsersTopFollowers,
    });
  }

  render() {
    return (
      <div className="container">
      <h3>Os 5 usuários do Twitter com maior quantidade de seguidores</h3><br/>
        <div className="row">
          {this.state.listUsersTopFollowers === null && <p>Carregando lista de dados...</p>}
          {
            this.state.listUsersTopFollowers && this.state.listUsersTopFollowers.map(data => (
              <div key={data._id} className="col-sm-12 col-md-4 col-lg-3">
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Usuário</div>
                    <div className="card-body">
                      <h4 className="card-title">{data.user}</h4>
                      <p className="card-text">Seguidores: {data.followers_count}</p>
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

export default UsersTopFollowers;