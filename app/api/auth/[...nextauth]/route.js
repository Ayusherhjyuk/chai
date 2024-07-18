
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import User from '@/models/User';
import connectDb from '@/app/db/connectDb';
import  signIn  from 'next-auth/react';
import { jwt } from 'jsonwebtoken';

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


async function login(credentials){
  try{
    await connectDb();
   
      const user= await User.findOne({email:credentials.email});
      if(user){
         const ispasswordcorrect = await bcrypt.compare(credentials.password, user.password);    
         if(ispasswordcorrect){
           return user;
         }
         throw new Error("error ocured");
      }
      
      
    }   catch (error) {
      console.log("Error: ", error);
    }
}

export const authoptions = NextAuth({

  pages:{
    signIn:"/login"
  },

  // OAuth authentication providers...
  providers: [
    GithubProvider ({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),

    CredentialsProvider({
      id:"credentials",
      name:"credentials",
      Credentials:{
        email: { label:"email",type:"email"},  
        password:{ label:"password",type:"password"},
      },
      async authorize(credentials){

        try{
        await connectDb();
       
          const user= await User.findOne({email: credentials.email});
          if(user){
             const ispasswordcorrect = await bcrypt.compare(
              credentials.password,
              user.password
             );
             if(ispasswordcorrect){
               return user;
             }
             return null;
          }
          
          
        }   catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  
    //   }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    //   }),
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    //   }),
    //   // Passwordless / email sign in
    //   EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    //   }),

  ],


  session: {
    strategy: 'jwt',
      
  },


 
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      if(account.provider  === "credentials"){
        return true;
      }
      else if(account.provider === "github" ) {
        await connectDb()

        const currentUser = await User.findOne({ email: email })
        
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
           name: user.email.split("@")[0],
          })
          
        }
        
       return true
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email })
      console.log(dbUser)
      session.user.name = dbUser.name
      return session
    }
    
  }             



  
});


export { authoptions as GET, authoptions as POST }
