export const getResources = async () => {
  const response = await fetch(
    "https://teachers-who-code-default-rtdb.firebaseio.com/resources.json"
  );

  const data = await response.json();
  const resources = [];
  for (const key in data) {
    resources.push({
      id: key,
      ...data[key],
    });
  }
  return resources;
};

export const getAllPost = async () => {
  const response = await fetch(
    "https://teachers-who-code-default-rtdb.firebaseio.com/blogPosts.json"
  );

  const data = await response.json();
  const posts = [];
  for (const key in data) {
    posts.push({
      id: key,
      ...data[key],
    });
  }
  return posts;
};

export const getPaths = async () => {
  const response = await fetch(
    "https://teachers-who-code-default-rtdb.firebaseio.com/paths.json"
  );

  const data = await response.json();
  const paths = [];
  for (const key in data) {
    paths.push({
      id: key,
      ...data[key],
    });
  }
  return paths;
};
