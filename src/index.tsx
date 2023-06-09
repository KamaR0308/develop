import React from 'react';
import ReactDOM from 'react-dom';

import PersonalKanban from './PersonalKanban';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';

import { User } from './PersonalKanban/types';

export const defaultUsersData: User[] = [
  {
    id: 1,
    name: 'Сергей Бабин',
    records: [],
  },
  {
    id: 2,
    name: 'Александр Голубков',
    records: [],
  },
  {
    id: 3,
    name: 'Александр Плаксюк',
    records: [],
  },
  {
    id: 4,
    name: 'Стажёр Цех',
    records: [],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <PersonalKanban />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();
