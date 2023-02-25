import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/iurioliveira914.png',
      name: 'Iuri Oliveira',
      role: 'Web Developer'
    },
    content: [
      {tyep: 'paragraph', content: 'Fala galera 👋,'},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto para o meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: 'Acesse o projeto clicando aqui'},
    ],
    publishedAt: new Date('2022-11-14 15:00:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://images.unsplash.com/photo-1582415892570-1191f68775f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50',
      name: 'Otávio Ramos',
      role: 'UX Designer'
    },
    content: [
      {tyep: 'paragraph', content: 'Fala galera 👋'},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto para o meu portfólio. É um projeto que fiz juntamente com o Gustavo Guanabara, do canal Curso em Vídeo . O nome do projeto é Bugdroid 🚀'},

      {type: 'link', content: 'Acesse o projeto clicando aqui'},
    ],
    publishedAt: new Date('2022-11-12 15:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App;
