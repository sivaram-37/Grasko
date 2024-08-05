const list = document.querySelector(".posts");
const postTemplate = document.getElementById("post-template");
const fetchBtn = document.querySelector("#fetch-posts");
const form = document.querySelector("form");
const postList = document.querySelector("ul");

// Using axios library
async function fetchPost() {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(posts);
    for (const post of posts.data) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      list.append(postEl);
    }
  } catch (err) {
    alert(err.message);
    console.log(err.response);
  }
}

async function createPost(title, content) {
  // data = {
  //   title: title,
  //   body: content,
  //   userId: Math.random(),
  // };
  // const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);

  // We can also sent data as formData
  const fd = new FormData(form);
  fd.append("userId", Math.random());
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", fd);

  console.log(response);
}

fetchBtn.addEventListener("click", fetchPost);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = form.querySelector("input").value;
  const content = form.querySelector("textarea").value;
  createPost(title, content);
});

postList.addEventListener("click", (event) => {
  const postId = event.target.closest("li").id;
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
});

// // Using fetch() API
// function sendHttpRequest(method, url, data) {
//   return fetch(url, {
//     method: method,
//     // If we sent data as fromData, we don't need to add JSON.parse(data) and headers
//     body: data,
//     // body: JSON.stringify(data),
//     // headers: { "Content-type": "application/json" },
//   })
//     .then((response) => {
//       if (response.status >= 200 && response.status < 300) {
//         return response.json();
//       } else {
//         return response.json().then((errData) => {
//           console.log(errData);
//           throw new Error(
//             `code:${response.status},Something went wrong in server-side...!!!`
//           );
//         });
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       throw new Error(`Something went wrong`);
//     });
// }

// async function fetchPost() {
//   try {
//     const posts = await sendHttpRequest(
//       "GET",
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     for (const post of posts) {
//       const postEl = document.importNode(postTemplate.content, true);
//       postEl.querySelector("h2").textContent = post.title.toUpperCase();
//       postEl.querySelector("p").textContent = post.body;
//       postEl.querySelector("li").id = post.id;
//       list.append(postEl);
//     }
//   } catch (err) {
//     alert(err.message);
//   }
// }

// async function createPost(title, bodyContent) {
//   const data = {
//     title: title,
//     body: bodyContent,
//     userId: Math.random(),
//   };

//   // sent data in FormData
//   const fd = new FormData(form); // Take the input 'title' and textarea 'body' from the form directly.
//   // We don't need to append title and body if we use the form in formData as an argument
//   // fd.append("title", title);
//   // fd.append("body", bodyContent);
//   fd.append("UserId", Math.random());

//   await sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
// }

// fetchBtn.addEventListener("click", fetchPost);

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const title = event.currentTarget.querySelector("input").value;
//   const content = event.currentTarget.querySelector("textarea").value;
//   createPost(title, content);
// });

// postList.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const postId = event.target.closest("li").id;
//     console.log(postId);
//     sendHttpRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
//   }
// });

// // Using XMLHttpRequest
// function sendHttpRequest(method, url, data) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     xhr.responseType = "json";

//     xhr.onload = function () {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.response);
//       } else {
//         reject(new Error(`code : ${xhr.status},Something went wrong...!!!`));
//       }
//     };

//     xhr.onerror = function () {
//       reject(new Error(`code : ${xhr.status},Can't connect to server...!!!`));
//     };

//     xhr.send(JSON.stringify(data));
//   });
//   return promise;
// }

// async function fetchPost() {
//   try {
//     const posts = await sendHttpRequest(
//       "GET",
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     for (const post of posts) {
//       const postEl = document.importNode(postTemplate.content, true);
//       postEl.querySelector("h2").textContent = post.title.toUpperCase();
//       postEl.querySelector("p").textContent = post.body;
//       postEl.querySelector("li").id = post.id;
//       list.append(postEl);
//     }
//   } catch (err) {
//     alert(err);
//   }
// }

// async function createPost(title, bodyContent) {
//   const data = {
//     title: title,
//     body: bodyContent,
//     userId: Math.random(),
//   };
//   await sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", data);
// }

// fetchBtn.addEventListener("click", fetchPost);

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const title = event.currentTarget.querySelector("input").value;
//   const content = event.currentTarget.querySelector("textarea").value;
//   createPost(title, content);
// });

// postList.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const postId = event.target.closest("li").id;
//     console.log(postId);
//     sendHttpRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
//   }
// });
