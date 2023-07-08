import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';
import { GraphService } from 'src/shared-services/graph.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post, Query } from './types';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-graph-ql',
  templateUrl: './graph-ql.component.html',
  styleUrls: ['./graph-ql.component.scss']
})
export class GraphQLComponent implements OnInit {
  posts: Observable<Post[]>;
  @Input() postId: number;
  item$: Observable<any[]>;
  serverData: JSON;
  data: any;
  greeting: string;
  public userId: number;
  public user: User;
  public users: User[];

  constructor(private http: HttpClient, private graph: GraphService, private apollo: Apollo, firestore: AngularFirestore) {
    this.userId = 1;
    this.item$ = firestore.collection('items').valueChanges();
  }

  public getUser() {
    this.graph.getUser(this.userId).subscribe(user => this.user = user);
  }

  public getAllUsers() {
    this.graph.getAllUsers().subscribe(users => this.users = users);
  }

  sayHi() {
    this.http.get('https://us-central1-angularux.cloudfunctions.net/webApi/sayHi').subscribe(data => {
      this.data = data;
      this.greeting = this.data.greeting;
      console.log(this.data);
    })
  }

  ngOnInit(): void {
    this.posts = this.apollo.watchQuery<Query>({
      query: gql`
        query allPosts {
          posts {
            id
            isPublic @client
            title
            votes
            author {
              id
              firstName
              lastName
            }
          }
        }
      `,
    })
      .valueChanges
      .pipe(
        map(result => result.data.posts)
      );
  }

}
