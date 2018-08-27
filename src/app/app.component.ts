import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular-boost';

interface Player {
  id: string;
  name: string;
}

interface Response {
  allPlayers: Player[];
}

const submitNewPlayer = gql`
  mutation submitNewPlayer($name: String!) {
    createPlayer(name: $name) {
      id,
      name
    }
  }`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  players: any[];
  loading: boolean;
  error: any;
  newPlayer: Player = {id: undefined, name: ''};
  addPlayer = false;

  constructor(private apollo: Apollo) {
  }


  ngOnInit() {
    this.apollo
    .watchQuery<Response>({
      query: gql`
        {
          allPlayers {
            name,
            id
          }
        }
      `,
    })
    .valueChanges.subscribe(result => {
      this.players = result.data.allPlayers;
      this.loading = result.loading;
      this.error = result.errors;
    });
  }

  savePlayer() {
    this.apollo.mutate({
      mutation: submitNewPlayer,
      variables: {
        name: this.newPlayer.name
      }
    }).subscribe(response => {
      this.players = [...this.players, {id: response.data.createPlayer.id, name: response.data.createPlayer.name}],
        this.newPlayer.name = '';
      this.addPlayer = false;
    }, error => {
      this.error = error;
    });
  }
}
