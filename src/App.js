import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Jayden',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/1',
    'name': '마돈나',
    'birthday': '760315',
    'gender': '여자',
    'job': '대학원생'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/2',
      'name': '배수지',
      'birthday': '561002',
      'gender': '남자',
      'job': '교수'
      }
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c_one => {
            return (
              <Customer
                key={c_one.id}
                id={c_one.id}
                image={c_one.image}
                name={c_one.name}
                birthday={c_one.birthday}
                gender={c_one.gender}
                job={c_one.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;