import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string(),
  email: g.string().unique(),
  avatarurl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),


})

const Project = g.model('Project', {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})

export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
