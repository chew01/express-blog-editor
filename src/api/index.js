export const logInWithEmailAndPassword = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  try {
    const response = await fetch(
      'http://localhost:3000/api/auth/login',
      requestOptions
    );
    const responseJSON = await response.json();
    return responseJSON;
  } catch (e) {
    throw new Error('error authenticating!');
  }
};

export const authCheck = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/auth/check');
    const responseJSON = await response.json();
    return responseJSON;
  } catch (e) {
    throw new Error('error authenticating!');
  }
};
