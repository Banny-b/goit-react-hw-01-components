import user from '../json/user.json';
import { Profile } from './Profile/Profile';


const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div
      style={{padding: '50px'}}>
      <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
      />
    </div>
  );
};
