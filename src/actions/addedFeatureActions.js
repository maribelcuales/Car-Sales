export const removeFeature = feature => {
  console.log("remove feature", removeFeature.name)
  return { type: "REMOVE_FEATURE", payload: feature };
};

