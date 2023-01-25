import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const ret = [];

  const user = signUpUser(firstName, lastName);
  user.then((res) => {
    ret.push({
      status: 'fulfilled',
      value: res,
    });
  }, (err) => {
    ret.push({
      status: 'rejected',
      value: err,
    });
  });

  const photo = uploadPhoto(fileName);
  photo.then((res) => {
    ret.push({
      status: 'fulfilled',
      value: res,
    });
  }, (err) => {
    ret.push({
      status: 'rejected',
      value: err.toString(),
    });
  });

  return Promise.allSettled([user, photo]).then(() => ret); // I'm so confused
}
