import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import OktaProvider from "next-auth/providers/okta";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    // OktaProvider({
    //     clientId: process.env.OKTA_CLIENT_ID,
    //     clientSecret: process.env.OKTA_CLIENT_SECRET,
    //     issuer: process.env.OKTA_ISSUER
    //   })
    // ...add more providers here
  ],
  debug: true
})