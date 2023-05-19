import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.sub;
      console.log('要放進table的id:', session.user.id);
      return session;
    },
  },
};

export default NextAuth(authOptions);
