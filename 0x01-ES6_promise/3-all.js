import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return Promise.all([photo, user]).then(
    (promise) => { console.log(`${promise[0].body} ${promise[1].firstName} ${promise[1].lastName}`); },
    () => { console.log('Signup system offline'); },
  );
}
