<div id="top"></div>

# Sprightly anime

Сайт о аниме.

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#links">Links</a></li>
      </ul>
    </li>
    <li>
      <a href="#my-process">My process</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#what-i-learned">What I learned</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Overview

### Screenshots
<p align=center>Desktop version</p>



<p align=center>Mobile version</p>



### Links

-   [Live Site URL](https://maksepifanov.github.io/SprightlyAnime/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Technologies

![TypeScript](https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/redux_toolkit-764ABC.svg?style=for-the-badge&logo=redux&logoColor=white)
![React router](https://img.shields.io/badge/react_router-CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=white)

![Styled Component](https://img.shields.io/badge/Styled_components-DB7093.svg?style=for-the-badge&logo=styledcomponents&logoColor=white)
![ESlint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)
![ESlint Airbnb](https://img.shields.io/badge/eslint_airbnb-FF5A5F.svg?style=for-the-badge&logo=airbnb&logoColor=white)

### Features

- Данные берутся с [jikan.moe](https://docs.api.jikan.moe/). Jikan is an Unofficial MyAnimeList API
- Просмотр данных об аниме.
- Загрузка  данных в зависимости от выбранного контента.
- Обработка загрузки. Если загружается, то показывается Скелетон компонент, если ошибка, то показывается ошибка.
- Типизация с помощью TypeScript.

<p align="right">(<a href="#top">back to top</a>)</p>

### What I learned

- Навык работы с Redux Toolkit и асинхронными запросами.
- Навык типизации с помощью TypeScript.
- Написание стилей с помощью Styled Components.

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [ ] Реализовать поиск с фильтром.
- [ ] Карусель с наиболее актуальными аниме на домашнюю странице.
- [ ] Добавить расписание выхода аниме. Как на отдельную страницу, так и в низу домашней страницы.
- [ ] На странице аниме добавить компонент (с реализацией redux slice) о персонажах в этом аниме.
- [ ] Создать страницу о определенном персонаже.
- [ ] Error Boundary.

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

1. Клонировать репозиторий 
  ```sh
  git clone https://github.com/MaksEpifanov/SprightlyAnime
  ```
2. Установить зависимости
  ```sh
  npm install
  ```
3. 
Запустить проект
  ```sh
  npm start
  ```
Собрать проект
  ```sh
  npm build
  ```
4. Для размещения на github pages в `package.json` изменить `homepage`
  ```sh
  npm deploy
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Maks Epifanov

[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/klimov4_maks)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/maksepifanov)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maksepifanovbr@gmail.com)

<p align="right">(<a href="#top">back to top</a>)</p>

