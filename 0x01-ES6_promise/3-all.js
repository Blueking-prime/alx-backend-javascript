import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  photo.then((resP) => {
    user.then((resU) => {
      console.log(`${resP.body} ${resU.firstName} ${resU.lastName}`);
    }, () => {
      console.log('Signup system offline');
    });
  }, () => {
    console.log('Signup system offline');
  });
}
