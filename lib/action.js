"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function ShareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  const errors = {};

  if (isInvalidText(meal.title)) {
    errors.title = "Title is required.";
  }

  if (isInvalidText(meal.summary)) {
    errors.summary = "Summary is required.";
  }

  if (isInvalidText(meal.instructions)) {
    errors.instructions = "Instructions are required.";
  }

  if (isInvalidText(meal.creator)) {
    errors.creator = "Name is required.";
  }

  if (!meal.creator_email || !meal.creator_email.includes("@")) {
    errors.creator_email = "A valid email is required.";
  }

  // Example for file check (if image is a file input)
  if (!meal.image || (meal.image.size !== undefined && meal.image.size === 0)) {
    errors.image = "Image is required.";
  }

  // If there are errors, return them to the client instead of saving
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await saveMeal(meal);
  redirect("/meals");
}
