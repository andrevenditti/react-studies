import { Header } from "./components/header/Header"
import { Sidebar } from "./components/sidebar/Sidebar"
import { Post } from "./components/post/Post"

import styles from "./App.module.css"
import "./global.css"

//posts = { id:"", author: {name:"", avatarUrl:"", role:""}, content:[], publishedAt:Date }

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://github.com/andrevenditti.png",
      name: "Andre Venditti",
      role: "Front-End Dev"
    },
    content: [
      {type: "paragraph", content:"Fala galeraa 👋"},
      {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content:"jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-10-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:"https://github.com/lm2almeida.png",
      name: "Lucas Almeida",
      role: "Front-End Engineer"
    },
    content: [
      {type: "paragraph", content:"Fala galeraa 👋"},
      {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content:"jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-10-03 20:00:00"),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
