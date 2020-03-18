import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // use lodash functions to only execute the network request once per user
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  // dispatch an action from this action
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const resp = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: resp.data });
};

export const fetchUser = id => async dispatch => {
  const resp = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: resp.data });
};

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const resp = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: resp.data });
// });

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
