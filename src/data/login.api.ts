export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

const mockedUser: User = {
  id: '123',
  name: 'Wizeline',
  avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export default async function loginApi(username: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (username === 'wizeline' && password === 'Rocks!') {
          return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
      }, 
      500
    );
  });
}