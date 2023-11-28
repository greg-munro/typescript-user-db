export type AppProps = {
  title: string
}
export type Name = {
  first: string
  last: string
}
export type Login = {
  uuid: string
}
export type Users = {
  name: Name
  login: Login
  email: string
}