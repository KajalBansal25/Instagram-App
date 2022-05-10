import {Users} from './users';

export const Posts = [
  {
    imageurl:
      'https://i.picsum.photos/id/1071/200/300.jpg?hmac=y09-AL4WisOkuQR4SOKzDWjPHWptbCDbEaFP0yJkKNY',
    username: Users[0].user,
    likes: 7870,
    caption: 'Train Ride To Hogwarts',
    profile_picture: Users[0].image,
    comments: [
      {
        user: 'kajal',
        comment: 'Wow! This build looks fire. Super excited about it.',
      },
      {
        user: 'jyoti',
        comment: 'Once I wake up , I will finally be ready to get fun.',
      },
    ],
  },

  {
    imageurl:
      'https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg',
    username: Users[1].user,
    likes: 7870,
    caption: 'Train Ride To Hogwarts',
    profile_picture: Users[1].image,
    comments: [
      {
        user: 'taniya',
        comment: 'Wow!!!',
      },
      {
        user: 'shivang',
        comment: 'I am sleeping.',
      },
    ],
  },
];
