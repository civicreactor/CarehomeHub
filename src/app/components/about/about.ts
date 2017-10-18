import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutCmp {
  defaultPicture = 'https://randomuser.me/api/portraits/lego/1.jpg';
  team = [
    {
      name: 'Olivia',
      role: 'Front End Developer & Designer',
      img: 'assets/imgs/olivia_avatar.jpg',
      description: 'Technical Support Engineer by day and Full Stack Ruby Developer by night with a flare for Design on the side.'
    },
    {
      name: 'Colin',
      role: 'Solution Architect',
      img: 'assets/imgs/colin_avatar.jpg',
      description: 'Full rounded IT profession, sharing his skills for a better world'
    },
    {
      name: 'Anna',
      role: 'Project Manager',
      img: '',
      description: 'Profession Cat herder, improving my skill through practical projects.'
    },
    {
      name: 'Antonio',
      role: 'Front-end developer',
      img: '',
      description: 'Tech team, build and Junior developer.'
    },
    {
      name: 'Dean',
      role: 'Full Stack Ruby Developer',
      img: '',
      description: 'Hobby technologist and Ruby on Rails developer.  Keen to learn new languages and work on\ ' +
      'big projects in collaboration with others.'
    },
    {
      name: 'Carlos',
      role: 'Full-stack developer',
      img: 'assets/imgs/carlos_avatar.jpg',
      description: 'JavaScript and Java developer during the day. Enjoy learning new things: Angular2, task runners,\ ' +
      'functional programming, algorithms and... days are short!'
    }
  ];
}
