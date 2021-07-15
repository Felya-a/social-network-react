import profileReducer, { addPostActionCreator } from "../redux/profileReducer.ts";

test("length of posts should be incremented", () => {
  
  let initialState = {
    profile: null,
    posts: [
      { id: 1, textPost: "Hi, how are you?" },
      { id: 2, textPost: "It`s my first post" },
    ],
    SettingsScore: 0,
    status: "",
  }
  let action = addPostActionCreator("fedoseev.ilya.com");
  let newState = profileReducer (initialState, action);
  expect (newState.posts.length).toBe(3)
  expect (newState.posts[2].textPost).toBe("fedoseev.ilya.com")
});

