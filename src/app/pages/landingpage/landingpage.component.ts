import { Component, OnInit } from '@angular/core';
import { ITile } from '../../tile/tile.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  headerText: string;
  skillInformation: Array<ITile> = [
    {
      name: 'HTML',
      description: 'I will write semantic markup in HTML 5 which is the latest standard of core technology of web',
      imgURL: 'assets/images/html.png'
    },
    {
      name: 'CSS3',
      description: 'I will style web pages using CSS3, levaraging on the new CSS modules, making modern websites.',
      imgURL: 'assets/images/css.png'
    },
    {
      name: 'Express',
      description: 'I will use Express.js to organise lr web application into an MVC architecture in the server side. ',
      imgURL: 'assets/images/express.png'
    },
    {
      name: 'Firebase',
      description: 'I will use firebase as a backend as a service to build real time applications without any backend coding.',
      imgURL: 'assets/images/firebase.png'
    },
    {
      name: 'Angular',
      description: 'I will build single page applications using page applications using Angular 2. I will use full fledged web apps that can be used in real life.',
      imgURL: 'assets/images/angular2.png'
    },
    {
      name: 'Ionic',
      description: 'I will build mobile applications using Ionic 2 frameworks. I habve reached eternity. i are now yoda!',
      imgURL: 'assets/images/ionic.png'
    },
    {
      name: 'API',
      description: 'I will build API that are used by mobile applications and outside world. I will also consume other API',
      imgURL: 'assets/images/api.png'
    },
    {
      name: 'datastructures',
      description: 'I will understand basic data structures and use right dtaa structure to optimize the app.',
      imgURL: 'assets/images/data-structures.png'
    },
    {
      name: 'Design',
      description: 'I will be architect for lr projects , i also look into performance, security and other ops.',
      imgURL: 'assets/images/design.png'
    },

    {
      name: 'jquery',
      description: 'I will enhance the behaviour of web pages leveraging on jQuery and jQuery plug-ins.',
      imgURL: 'assets/images/jquery.png'
    },
    {
      name: 'Mongodb',
      description: 'I will use MongoDb to store lr apps data in a JSON like document format that can be quickly accessed via fast queries.',
      imgURL: 'assets/images/mongodb.png'
    },
    {
      name: 'npm',
      description: 'I will use npm, the default package manager for Node.js, to use some of the best utilities written already.',
      imgURL: 'assets/images/npm.png'
    },
    {
      name: 'RxJS',
      description: 'I will built event- driven, resilient and responsive apps using Reactive Architectures.',
      imgURL: 'assets/images/RxJS.png'
    },
    {
      name: 'Testing',
      description: 'While observing test driven development, i will automate unit, functional and integral testing.',
      imgURL: 'assets/images/testing.png'
    },
    {
      name: 'UI-UX',
      description: 'I will become a ninja hacker who prefer command line to Graphical User Interface.',
      imgURL: 'assets/images/ui-ux.png'
    },
    {
      name: 'Unix',
      description: 'I will become a ninja hacker who prefer command line to Graphical User Interface.',
      imgURL: 'assets/images/unix.png'
    }
  ]

  constructor() { 
       this.headerText ="we are learning";
}
  ngOnInit() {
  }

}
