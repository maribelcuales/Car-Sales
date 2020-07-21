export const addNewFeature = newFeature => {
  console.log("adding new feature", newFeature.name)
  return { type: "ADD_NEW_FEATURE", payload: newFeature };
};

