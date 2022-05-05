import {Profile, Strategy} from 'passport-discord';
import {VerifyCallback} from 'passport-oauth2';
import passport from 'passport';


passport.use(
    new Strategy({
        clientID : process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        callbackURL: process.env.DISCORD_URL_REDIRECT!,
        scope: ['identify', 'email', 'guilds'],
    },
    async (
        accessToken: string, 
        refreshToken: string, 
        profile: Profile, 
        done: VerifyCallback
        )=>{} 
    )
);
