import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

export default function useLoggedUser() {
  return useTracker(() => {
    const loggedUser = Meteor.user();
    return [loggedUser, Meteor.userId() && !loggedUser];
  });
}
